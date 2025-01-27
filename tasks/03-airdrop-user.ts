import { task } from "hardhat/config";
import { getContract } from "./utils";
import {
  airdropAddress,
  airdropFactoryAddress,
  airdropToken,
} from "./constants";

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

async function getContracts(ethers: any) {
  const airdropFactory = await getContract(
    "AirdropFactory",
    airdropFactoryAddress,
    ethers
  );
  const airdrop = await getContract("Airdrop", airdropAddress, ethers);
  const tokenContract = await getContract("IERC20", airdropToken, ethers);

  return { airdropFactory, airdrop, tokenContract };
}

async function getUserPrivateKey(receiver: string) {
  let privateKey = "";
  if (receiver === process.env.AIRDROP_CLAIM_TEST_ACCOUNT1) {
    privateKey = process.env.AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY1!;
  } else if (receiver === process.env.AIRDROP_CLAIM_TEST_ACCOUNT2) {
    privateKey = process.env.AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY2!;
  } else if (receiver === process.env.AIRDROP_CLAIM_TEST_ACCOUNT3) {
    privateKey = process.env.AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY3!;
  } else if (receiver === process.env.AIRDROP_CLAIM_TEST_ACCOUNT4) {
    privateKey = process.env.AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY4!;
  } else {
    throw new Error("No private key found for receiver address");
  }

  return privateKey;
}

task("get-user-airdrop-info", "Get user airdrop info")
  .addParam("receiver", "Airdrop receiver address")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { receiver } = taskArgs;
    const { airdrop } = await getContracts(ethers);

    const airdropInfo = await airdrop.getAirdropDataByAddress(receiver);
    console.log(`AirdropInfo: ${airdropInfo}`);
    console.log();
    console.log("Get claimable amount");
    const claimableAmount = await airdrop.getClaimableAmount(receiver);
    console.log(`Claimable amount: ${ethers.formatEther(claimableAmount)}`);
    console.log();
    console.log("get total airdrop amount");
    const totalAirdropAmount = await airdrop.totalAirdropAmount();
    console.log(
      `total airdrop amount: ${ethers.formatEther(totalAirdropAmount)}`
    );
    console.log();
    const vestingTerm = await airdrop.vestingTerm();
    console.log(`vestingTerm: ${vestingTerm}`);
  });

task("airdrop-user-claim", "Claim airdrop")
  .addParam("receiver", "Airdrop receiver address")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { receiver } = taskArgs;
    const { airdrop } = await getContracts(ethers);

    // Get private key from env based on receiver address
    const privateKey = await getUserPrivateKey(receiver);
    const wallet = new ethers.Wallet(privateKey, ethers.provider);
    const claimResult = await airdrop.connect(wallet).claim();
    console.log(`Claim airdrop result: ${claimResult.hash}`, claimResult);
  });

task("add-airdrop-data", "Add airdrop data")
  .addParam("receiver", "Airdrop receiver address")
  .addParam("amount", "Airdrop amount")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { receiver, amount } = taskArgs;

    const { airdrop } = await getContracts(ethers);
    const result = await airdrop.insertAirdropData(
      receiver,
      ethers.parseEther(amount)
    );
    console.log(`Add airdrop user result: ${result.hash}`, result);
  });

// 배열로 parameter 받는법
// --receivers "0x123,0x456,0x789"
// --amounts "100,200,300"
// 위와 같은 형태로 받고, split(",") 해서 사용
task("batch-add-airdrop-datas", "Batch add airdrop data")
  .addParam("receivers", "Airdrop receiver address")
  .addParam("amounts", "Airdrop amount")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { receivers, amounts } = taskArgs;

    const { airdrop } = await getContracts(ethers);
    const receiversArray = receivers.split(",");
    const amountsArray = amounts.split(",");
    const result = await airdrop.batchInsertAirdropData(
      receiversArray,
      amountsArray
    );
    console.log(`Batch add airdrop user result: ${result.hash}`, result);
  });
