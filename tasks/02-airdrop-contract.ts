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

task("get-airdrop-contracts", "Get airdrop contracts").setAction(
  async (_, hre) => {
    const { ethers } = hre;
    const { airdropFactory, airdrop, tokenContract } = await getContracts(
      ethers
    );

    console.log(`AirdropFactory: ${airdropFactory.target}`);
    console.log(`AirdropContract: ${airdrop.target}`);
    console.log(`TokenContract: ${tokenContract.target}`);
  }
);

task("deploy-airdrop-contract", "Deploys and interacts with Airdrop contract")
  .addParam("endminutes", "Minutes from now for end timestamp")
  .addParam("tgepercent", "The tge percent")
  .addParam("vestingcount", "The vesting count")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { endminutes, tgepercent, vestingcount } = taskArgs;

    const now = new Date();

    const { airdropFactory } = await getContracts(ethers);

    const startTimestamp = Math.floor(now.getTime() / 1000);
    const endTimestamp = Math.floor(
      new Date().setMinutes(now.getMinutes() + Number(endminutes)) / 1000
    );

    const createdAirdrop = await airdropFactory.createAirdrop(
      airdropToken,
      startTimestamp,
      endTimestamp,
      Number(tgepercent),
      Number(vestingcount)
    );

    console.log(`Airdrop contract created`);
  });

task(
  "update-airdrop-end-timestamp",
  "Updates the end timestamp of an airdrop contract"
)
  .addParam("endminutes", "Minutes from now for end timestamp")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { endminutes } = taskArgs;

    const now = new Date();

    const { airdrop } = await getContracts(ethers);

    const newEndTimestamp = Math.floor(
      new Date().setMinutes(now.getMinutes() + Number(endminutes)) / 1000
    );

    const updateEndTimestampResult = await airdrop.updateEndTimestamp(
      newEndTimestamp
    );
    console.log(
      `Update end timestamp result: ${updateEndTimestampResult.hash}`
    );
  });

// 컨트랙트 내의 남은 모든 Token을 Deployer에게 전송(클레임기간 중간에도 회수 되므로 조심해서 사용)
task("collect-airdrop-token", "Collects the airdrop token").setAction(
  async (_, hre) => {
    const { ethers } = hre;
    const { airdrop } = await getContracts(ethers);

    const collectAirdropTokenResult = await airdrop.collect();
    console.log(
      `Collect airdrop token result: ${collectAirdropTokenResult.hash}`
    );
  }
);

task("get-airdrop-infos", "Gets the airdrop info").setAction(async (_, hre) => {
  const { ethers } = hre;
  const { airdrop } = await getContracts(ethers);

  console.log(`Airdrop address: ${airdrop.target}`);

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
});

task(
  "get-airdrop-fully-claimed-accounts",
  "Gets the airdrop fully claimed accounts"
).setAction(async (_, hre) => {
  const { ethers } = hre;
  const { airdrop } = await getContracts(ethers);

  console.log("\nGet fully claimed accounts");
  const fullyClaimedAccounts =
    (await airdrop.getFullyClaimedAccounts()) as unknown as AirdropData[];

  if (fullyClaimedAccounts.length === 0) {
    console.log("No fully claimed accounts");
    return;
  }

  fullyClaimedAccounts.forEach((data, index) => {
    console.log(`Account ${index + 1}: ${data}`);
  });
});
