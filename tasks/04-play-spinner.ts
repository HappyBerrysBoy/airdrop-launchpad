import { task } from "hardhat/config";
import { getContract } from "./utils";
import { spinnerAddress } from "./constants";

async function getContracts(ethers: any) {
  const spinner = await getContract("Spinner", spinnerAddress, ethers);
  return { spinner };
}

task("get-spinner-info", "Get spinner information").setAction(
  async (_, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    console.log("spinner address", spinner.target);

    const isActive = await spinner.isActive();
    console.log(`Spinner active: ${isActive}`);

    const totalSegments = await spinner.totalSegments();
    console.log(`Total segments: ${totalSegments}`);

    const totalSpins = await spinner.totalSpins();
    console.log(`Total spins: ${totalSpins}`);

    const remainingAmounts = await spinner.getRemainingAmounts();
    console.log("Remaining amounts per segment:");

    remainingAmounts.forEach((amount: any, index: number) => {
      console.log(`Segment ${index}: ${amount}`);
    });

    const segmentAmounts = await spinner.getSegmentAmounts();
    console.log("Segment amounts:");
    segmentAmounts.forEach((amount: any, index: number) => {
      console.log(`Segment ${index}: ${amount}`);
    });

    const segmentProbabilities = await spinner.getProbabilities();
    console.log("Segment probabilities:");
    segmentProbabilities.forEach((probability: any, index: number) => {
      console.log(`Segment ${index}: ${probability}`);
    });
  }
);

task("get-segment-amounts", "Get segment amounts")
  .addParam("segment", "Segment number")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    const segmentAmounts = await spinner.segmentAmounts(taskArgs.segment);
    console.log("Segment amounts:", segmentAmounts);
  });

task("set-segment-amounts", "Set segment amounts").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  console.log("spinner address", spinner.target);

  const MAX_PROBABILITY = 10000000;
  const amounts = [1, 100, 1000, 10000, 10000, 0, 0, 0]; // 1 token per segment
  const probabilities = [
    100000, 400000, 1000000, 2000000, 3000000, 4500000, 7000000, 10000000,
  ];

  const tx = await spinner.setSegmentAmounts(amounts, probabilities);

  await tx.wait();
  console.log("Segment amounts updated successfully");
});

task("set-active", "Set spinner active status").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  const tx = await spinner.setActive(true);
  await tx.wait();
  console.log("Spinner active status set to true");
});

task("get-precision", "Get spinner precision").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  const precision = await spinner.PRECISION();
  console.log(`Spinner precision: ${precision}`);
});

task("set-inactive", "Set spinner active status").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  const tx = await spinner.setActive(false);
  await tx.wait();
  console.log("Spinner active status set to false");
});

task("get-active-status", "Get spinner active status").setAction(
  async (_, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    const activeStatus = await spinner.getActiveStatus();
    console.log(`Spinner active status: ${activeStatus}`);
  }
);

task("spin", "Spin the wheel").setAction(async (taskArgs, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  console.log("Spinning the wheel...");
  const tx = await spinner.spin({ gasLimit: 1000000 });
  const receipt = await tx.wait();

  const spinResultEvent = receipt.logs.find(
    (log: any) => log.fragment.name === "SpinResult"
  );

  if (spinResultEvent) {
    const { user, segment, randomNumber, timestamp } = spinResultEvent.args;
    console.log(`
      Spin Result:
      User: ${user}
      Segment: ${segment}
      Random Number: ${randomNumber}
      Timestamp: ${new Date(Number(timestamp) * 1000).toLocaleString()}
    `);
  }
});
