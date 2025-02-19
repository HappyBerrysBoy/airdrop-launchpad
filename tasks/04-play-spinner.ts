import { task } from "hardhat/config";
import { getContract } from "./utils";
import { spinnerAddress } from "./constants";

async function getContracts(ethers: any) {
  const spinner = await getContract("Spinner", spinnerAddress, ethers);
  return { spinner };
}

task("set-start-end-block", "Set start and end block")
  .addParam("startblock", "Start block")
  .addParam("endblock", "End block")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    const startBlock = taskArgs.startblock;
    const endBlock = taskArgs.endblock;

    const tx = await spinner.setBlockRange(startBlock, endBlock);
    await tx.wait();
    console.log(
      "Start and end block set successfully",
      startBlock,
      endBlock,
      tx.hash
    );
  });

task("get-start-end-block", "Get start and end block").setAction(
  async (taskArgs, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    const startBlock = await spinner.startBlock();
    const endBlock = await spinner.endBlock();

    console.log("Start block:", startBlock);
    console.log("End block:", endBlock);
  }
);

task("recharge-spins", "Recharge spins")
  .addParam("address", "Address to recharge spins for")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    const address = taskArgs.address;

    const tx = await spinner.rechargeSpins(address);
    await tx.wait();

    console.log("Spins recharged successfully");
  });

task("get-user-spins-available", "Get user spins available")
  .addParam("address", "Address to get spins available for")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    const spinsAvailable = await spinner.getUserSpinsAvailable(
      taskArgs.address
    );

    console.log("User spins available:", spinsAvailable);
  });

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

  const MAX_PROBABILITY = 100000000;
  const amounts = [100, 1000, 30000, 3000000, 20000, 1800000, 2000000, 0]; // 1 token per segment
  const probabilities = [
    1000,
    11000,
    312000,
    30312000,
    30512000,
    48512000,
    68512000,
    MAX_PROBABILITY,
  ];

  const tx = await spinner.setSegmentAmounts(amounts, probabilities);

  await tx.wait();
  console.log("Segment amounts updated successfully");
});

// task("set-active", "Set spinner active status").setAction(async (_, hre) => {
//   const { ethers } = hre;
//   const { spinner } = await getContracts(ethers);

//   const tx = await spinner.setActive(true);
//   await tx.wait();
//   console.log("Spinner active status set to true");
// });

task("get-precision", "Get spinner precision").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  const precision = await spinner.PRECISION();
  console.log(`Spinner precision: ${precision}`);
});

// task("set-inactive", "Set spinner active status").setAction(async (_, hre) => {
//   const { ethers } = hre;
//   const { spinner } = await getContracts(ethers);

//   const tx = await spinner.setActive(false);
//   await tx.wait();
//   console.log("Spinner active status set to false");
// });

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

task("spin2", "Spin the wheel 2").setAction(async (taskArgs, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  console.log("Spinning the wheel... 2");

  // sign 값을 먼저 만들어서 broadcast 하는 방식
  const signer = await ethers.provider.getSigner();
  const address = await signer.getAddress();

  // Get current nonce for the address
  const nonce = await spinner.userSpinCount(address);

  // Create signature for the spin
  const domain = {
    name: "Spinner",
    version: "1",
    chainId: (await ethers.provider.getNetwork()).chainId,
    verifyingContract: spinner.address,
  };

  const types = {
    Spin: [
      { name: "user", type: "address" },
      { name: "nonce", type: "uint256" },
    ],
  };

  const value = {
    user: address,
    nonce: nonce,
  };

  const signature = await signer.signTypedData(domain, types, value);

  // Split signature into r,s,v components
  const sig = ethers.Signature.from(signature);

  // Call spin2 with signature
  const tx = await spinner.spin(sig.v, sig.r, sig.s, { gasLimit: 1000000 });
  const receipt = await tx.wait();

  const spinResultEvent = receipt.logs.find(
    (log: any) => log.fragment.name === "SpinResult"
  );

  console.log("Spin result:", spinResultEvent);

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

// spin 10 times per 1 block
task("spin-10", "Spin the wheel 10 times").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  for (let i = 0; i < 10; i++) {
    console.log(`Spinning the wheel ${i + 1} of 10...`);
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
  }
});

task("deposit-kaia", "Deposit kaia").setAction(async (_, hre) => {
  // 38.625797993729492145 KAIA
  // 49.83940253 KAIA
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  const tx = await spinner.depositKaia({ value: ethers.parseEther("1") });
  await tx.wait();
  console.log("Kaia deposited successfully");
});

task("get-fee-relayer", "Get fee relayer").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { spinner } = await getContracts(ethers);

  const feeRelayer = await spinner.feeRelayer();
  console.log("Fee relayer:", feeRelayer);
});

task("get-last-recharge-block", "Get last recharge block")
  .addParam("address", "Address to get last recharge block for")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { spinner } = await getContracts(ethers);

    const address = taskArgs.address;

    const lastRechargeBlock = await spinner.getLastRechargeBlock(address);
    console.log("Last recharge block:", lastRechargeBlock);
  });
