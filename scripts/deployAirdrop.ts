import { ethers } from "hardhat";
import { airdropFactoryAddress } from "./deployAirdropFactory";

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

// export const airdropToken = "0xb40839b871627D230269E103EA034A1FF3F374fD"; // hs3 decimals 8
// export const airdropToken = "0x9419d69Fea3Cad13c95c6dd62ef5E36f62486f12"; // HSW decimals 18
export const airdropToken = "0x5D0a0E44e4c8d7D95029898ecD503557bf35D626"; // HSW2 decimals 18
// export const airdropAddress = "0xAC6995553318Dc01fb6D7759fE8Eb5e584820Fff";
export const airdropAddress = "0x216e959a74f0482ea76b30da777cb730534f85de";

async function main() {
  // CONSTANTS
  const now = new Date();

  const tokenContract = await ethers.getContractAt("IERC20", airdropToken);
  console.log(`Token contract: ${tokenContract.target}`);

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
   * Load airdrop factory contract
   */
  const airdropFactory = await ethers.getContractAt(
    "AirdropFactory",
    airdropFactoryAddress
  );
  console.log(`AirdropFactory address: ${airdropFactory.target}`);

  /**
   * Get all airdrop info
   */
  const allAirdropInfo = await airdropFactory.getAllAirdrops();
  console.log(`Get All airdrop master info: ${allAirdropInfo}`);

  // /**
  //  * Get airdrop info
  //  */
  // console.log(`========== AirdropInfo ==========`);

  // const airdropInfo = await airdropFactory.getAirdropByAddress(airdropAddress);
  // console.log(`AirdropInfo: ${airdropInfo}`);

  // /**
  //  * Load airdrop contract
  //  */
  const airdrop = await ethers.getContractAt("Airdrop", airdropAddress);
  console.log(`Airdrop address: ${airdrop.target}`);

  /**
   * write contract 호출시 여기 아래부터 주석
   */

  const airdropData = await airdrop.getAllAirdropData();
  console.log(`Airdrop All Data: ${airdropData}`);

  const isAirdropStarted = await airdrop.isStarted();
  console.log(`Airdrop started: ${isAirdropStarted}`);

  const isAirdropEnded = await airdrop.isEnded();
  console.log(`Airdrop ended: ${isAirdropEnded}`);

  const airdropStart = await airdrop.startTimestamp();
  console.log(
    `Airdrop start: ${new Date(
      Number(airdropStart) * 1000
    ).toLocaleString()}(${airdropStart})`
  );

  const airdropEnd = await airdrop.endTimestamp();
  console.log(
    `Airdrop end: ${new Date(
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
  fullyClaimedAccounts.forEach((data, index) => {
    console.log(`Account ${index + 1}: ${data}`);
  });

  console.log("++++++++++++++++ Write Contract +++++++++++++++++");

  /**
   * Create a new airdrop(Contract를 airdropFactory에 등록)
   */

  const startTimestamp = Math.floor(now.getTime() / 1000);
  const endTimestamp = Math.floor(
    new Date().setMinutes(now.getMinutes() + 20000) / 1000
  );

  const createdAirdrop = await airdropFactory.createAirdrop(
    airdropToken,
    startTimestamp,
    endTimestamp,
    10,
    10
  );

  console.log(`Airdrop contract created }`);
  console.log(createdAirdrop);

  /**
   * updateEndTimestamp
   */
  const newEndTimestamp = Math.floor(
    new Date().setMinutes(now.getMinutes() + 12) / 1000
  );
  console.log(`New end timestamp: ${newEndTimestamp}`);
  const updateEndTimestampResult = await airdrop.updateEndTimestamp(
    newEndTimestamp
  );
  console.log(`Update end timestamp result: ${updateEndTimestampResult.hash}`);

  /**
   * Collect airdrop token
   */
  // const collectAirdropTokenResult = await airdrop.collect();
  // console.log(
  //   `Collect airdrop token result: ${collectAirdropTokenResult.hash}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
