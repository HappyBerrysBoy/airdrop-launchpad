import { ethers } from "hardhat";

interface AirdropInfo {
  address: string;
  token: string;
  startTimestamp: number;
  endTimestamp: number;
  tgePercent: number;
  vestingCount: number;
}

interface AirdropData {
  address: string;
  amount: number;
  claimedAmount: number;
  claimIdex: number;
}

// export const airdropFactoryAddress = "0xF69624838086527E3ecD5138e7f9E8A7e6ac6Ff9"; // precision 1e12
export const airdropFactoryAddress =
  "0x7e752461666a3124D2A08B204AE521040D85CbE6"; // precision 1e18

async function main() {
  // Deployer account info
  const deployer = await ethers.getSigner(
    process.env.AIRDROP_CLAIM_TEST_ACCOUNT1!
  );
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  console.log(
    `Account balance: ${ethers.formatEther(
      await deployer.provider.getBalance(deployer.address)
    )}`
  );

  /**
   * Deploy AirdropToken contract
   */
  // const deployAirdropFactory = await ethers.deployContract("AirdropFactory");
  // console.log(`AirdropFactory address: ${deployAirdropFactory.target}`);

  /**
   * Load airdrop factory contract
   */
  const airdropFactory = await ethers.getContractAt(
    "AirdropFactory",
    airdropFactoryAddress
  );
  console.log(`AirdropFactory address: ${airdropFactory.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
