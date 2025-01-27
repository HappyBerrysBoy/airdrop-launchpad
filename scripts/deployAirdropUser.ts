import { ethers } from "hardhat";
import { airdropFactoryAddress } from "./deployAirdropFactory";
import { airdropAddress, airdropToken } from "./deployAirdrop";

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

async function main() {
  // CONSTANTS
  const now = new Date();
  const airdropReceiver = "0x31b1dA5926A0159B0C369e6F15756E9C666011e7";
  // const airdropReceiver = process.env.AIRDROP_CLAIM_TEST_ACCOUNT1!;
  // const airdropReceiver = process.env.AIRDROP_CLAIM_TEST_ACCOUNT2!;
  // const airdropReceiver = process.env.AIRDROP_CLAIM_TEST_ACCOUNT3!;
  // const airdropReceiver = process.env.AIRDROP_CLAIM_TEST_ACCOUNT4!;

  const tokenContract = await ethers.getContractAt(
    "IERC20Metadata",
    airdropToken
  );
  console.log(`Token contract: ${tokenContract.target}`);

  // Deployer account info
  const deployer = await ethers.getSigner(airdropReceiver);
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  console.log(
    `Account balance: ${ethers.formatEther(
      await deployer.provider.getBalance(deployer.address)
    )}`
  );

  const airdropFactory = await ethers.getContractAt(
    "AirdropFactory",
    airdropFactoryAddress
  );
  console.log(`AirdropFactory address: ${airdropFactory.target}`);

  /**
   * Get all airdrop info
   */
  const allAirdropInfo = await airdropFactory.getAllAirdrops();
  console.log(`All airdrop info: ${allAirdropInfo}`);

  /**
   * Get airdrop info
   */
  console.log(`========== AirdropInfo ==========`);
  const airdropInfo = await airdropFactory.getAirdropByAddress(airdropAddress);
  console.log(`AirdropInfo: ${airdropInfo}`);

  /**
   * Load airdrop contract
   */
  const airdrop = await ethers.getContractAt("Airdrop", airdropAddress);
  console.log(`Airdrop address: ${airdrop.target}`);

  const airdropData = await airdrop.getAllAirdropData();
  console.log(`Airdrop All Data: ${airdropData}`);

  const isAirdropStarted = await airdrop.isStarted();
  const isAirdropEnded = await airdrop.isEnded();

  const airdropStart = await airdrop.startTimestamp();
  console.log(
    `Airdrop start: ${isAirdropStarted ? "true" : "false"} >> ${new Date(
      Number(airdropStart) * 1000
    ).toLocaleString()}(${airdropStart})`
  );

  const airdropEnd = await airdrop.endTimestamp();
  console.log(
    `Airdrop end: ${isAirdropEnded ? "true" : "false"} >> ${new Date(
      Number(airdropEnd) * 1000
    ).toLocaleString()}(${airdropEnd})`
  );

  const airdropTgePercent = await airdrop.tgePercent();
  console.log(`Airdrop tge percent: ${airdropTgePercent}`);

  const airdropVestingCount = await airdrop.vestingCount();
  console.log(`Airdrop vesting count: ${airdropVestingCount}`);

  const airdropVestingTerm = await airdrop.vestingTerm();
  console.log(`Airdrop vesting term: ${airdropVestingTerm}`);

  const airdropAddressLength = await airdrop.dataLength();
  console.log(`Airdrop address length: ${airdropAddressLength}`);

  const PRECISION = await airdrop.PRECISION();
  console.log(`Airdrop precision: ${PRECISION}`);

  /**
   * Get fully claimed accounts
   */
  console.log();
  console.log("Get fully claimed accounts");
  const fullyClaimedAccounts =
    (await airdrop.getFullyClaimedAccounts()) as unknown as AirdropData[];

  console.log(`Fully claimed accounts: ${fullyClaimedAccounts}`);

  fullyClaimedAccounts.forEach((data, index) => {
    console.log(`Account ${index + 1}: ${data}`);
  });

  // console.log(`========== Airdrop Data Details ==========`);

  /**
   * Get claimable amount
   */
  const airdropAddressData = await airdrop.getAirdropDataByAddress(
    airdropReceiver
  );
  console.log(`Airdrop data: ${airdropAddressData}`);

  console.log();
  console.log("Get claimable amount");
  const claimableAmount = await airdrop.getClaimableAmount(airdropReceiver);
  console.log(`Claimable amount: ${ethers.formatEther(claimableAmount)}`);

  /**
   * Get total airdrop amount
   */
  console.log();
  console.log("get total airdrop amount");
  const totalAirdropAmount = await airdrop.totalAirdropAmount();
  console.log(
    `total airdrop amount: ${ethers.formatEther(totalAirdropAmount)}`
  );

  const vestingTerm = await airdrop.vestingTerm();
  console.log(`vestingTerm: ${vestingTerm}`);

  /**
   * Get airdrop data
   */
  console.log();
  console.log("Get account airdrop data");
  const airdropDataDetail = await airdrop.airdropData(1);
  console.log(`Airdrop data: ${airdropDataDetail as unknown as AirdropData}`);

  /**
   * Get airdrop data length
   */
  console.log("Get airdrop data length");
  const airdropDataLength = await airdrop.dataLength();
  console.log(`Airdrop data length: ${airdropDataLength}`);

  /**
   * Get all airdrop data
   */
  // console.log("Get all airdrop data");
  // for (let i = 1; i <= airdropDataLength; i++) {
  //   const data = await airdrop.airdropData(i);
  //   console.log(`Airdrop ${i}: ${data}`);
  // }

  console.log("++++++++++++++++ Write Contract +++++++++++++++++");

  /**
   * Claim airdrop
   */
  // const airdropClaimTestAccount = await ethers.getSigner(airdropReceiver);
  // console.log(`Airdrop claim test account: ${airdropClaimTestAccount.address}`);

  // console.log();
  // console.log("start airdrop claim");
  // const claimResult = await airdrop.connect(airdropClaimTestAccount).claim();
  // console.log(`Claim airdrop result: ${claimResult.hash}`);

  /**
   * Insert airdrop data
   */
  // const result = await airdrop.insertAirdropData(
  //   airdropReceiver,
  //   ethers.parseEther("100")
  // );
  // console.log(`Insert airdrop data result: ${result.hash}`);

  /**
   * Batch insert airdrop data
   */
  // console.log();
  // console.log("Batch insert airdrop data");
  // const decimals = await tokenContract.decimals();
  // await airdrop.batchInsertAirdropData(
  //   [
  //     process.env.AIRDROP_CLAIM_TEST_ACCOUNT1!,
  //     process.env.AIRDROP_CLAIM_TEST_ACCOUNT2!,
  //     process.env.AIRDROP_CLAIM_TEST_ACCOUNT3!,
  //     process.env.AIRDROP_CLAIM_TEST_ACCOUNT4!,
  //     "0x31b1dA5926A0159B0C369e6F15756E9C666011e7",
  //   ],
  //   [
  //     ethers.parseUnits("300", decimals),
  //     ethers.parseUnits("200", decimals),
  //     ethers.parseUnits("100", decimals),
  //     ethers.parseUnits("100", decimals),
  //     ethers.parseUnits("5000", decimals),
  //   ]
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
