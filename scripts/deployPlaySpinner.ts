import { ethers } from "hardhat";

async function main() {
  // CONSTANTS
  const TOTAL_SEGMENTS = 8;

  // Deployer account info
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  console.log(
    `Account balance: ${ethers.formatEther(
      await deployer.provider.getBalance(deployer.address)
    )}`
  );

  // Deploy Spinner contract
  const Spinner = await ethers.getContractFactory("Spinner");
  const spinner = await Spinner.deploy(TOTAL_SEGMENTS);
  await spinner.waitForDeployment();

  console.log(`Spinner deployed to: ${spinner.target}`);

  //   // Initialize segments with amounts
  //   const MAX_PROBABILITY = 10000000;
  //   const segments = [0, 1, 2, 3, 4, 5, 6, 7];
  //   const amounts = [10, 100, 1000, 10000, 10000, 0, 0, 0]; // 1 token per segment
  //   const probabilities = [
  //     100000, 400000, 1000000, 2000000, 3000000, 4500000, 7000000, 10000000,
  //   ]; // 100% probability per segment

  //   const tx = await spinner.setSegmentAmounts(segments, amounts, probabilities);
  //   await tx.wait();
  //   console.log("Segment amounts initialized");

  //   // Activate spinner
  //   const activateTx = await spinner.setActive(true);
  //   await activateTx.wait();
  //   console.log("Spinner activated");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
