import { task } from "hardhat/config";
import { airdropFactoryAddress } from "./constants";
import { getContract } from "./utils";

async function getContracts(ethers: any) {
  const airdropFactory = await getContract(
    "AirdropFactory",
    airdropFactoryAddress,
    ethers
  );

  return { airdropFactory };
}

task(
  "get-airdrop-factory-info",
  "Gets the airdrop factory contracts"
).setAction(async (_, hre) => {
  const { ethers } = hre;
  const { airdropFactory } = await getContracts(ethers);
  console.log(`AirdropFactory address: ${airdropFactory.target}`);
});

task(
  "get-airdrop-factory-contracts",
  "Gets the airdrop factory info"
).setAction(async (_, hre) => {
  const { ethers } = hre;
  const { airdropFactory } = await getContracts(ethers);

  const allAirdropInfo = await airdropFactory.getAllAirdrops();
  console.log(`Get All airdrop master info: ${allAirdropInfo}`);
});

task("deploy-airdrop-factory", "Deploys the AirdropFactory contract").setAction(
  async (_, hre) => {
    return hre.ethers
      .getContractFactory("AirdropFactory")
      .then((contractFactory) => contractFactory.deploy())
      .then((result) => {
        process.stdout.write(
          `AirdropFactory contract address: ${result.target}`
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
);

// import { task } from "hardhat/config";
// import { ethers } from "hardhat";

// // Define interfaces if needed
// interface AirdropInfo {
//   address: string;
//   token: string;
//   startTimestamp: number;
//   endTimestamp: number;
//   tgePercent: number;
//   vestingCount: number;
// }

// interface AirdropData {
//   address: string;
//   amount: number;
//   claimedAmount: number;
//   claimIdex: number;
// }

// // Define the airdrop factory address
// export const airdropFactoryAddress =
//   "0x7e752461666a3124D2A08B204AE521040D85CbE6"; // precision 1e18

// task("deployAirdropFactory", "Deploys the AirdropFactory contract").setAction(
//   async (taskArgs, hre) => {
//     const { ethers } = hre;

//     // Deployer account info
//     const deployer = await ethers.getSigner(
//       process.env.AIRDROP_CLAIM_TEST_ACCOUNT1!
//     );
//     console.log(`Deploying contracts with the account: ${deployer.address}`);
//     console.log(
//       `Account balance: ${ethers.formatEther(
//         await deployer.provider.getBalance(deployer.address)
//       )}`
//     );

//     /**
//      * Deploy AirdropToken contract
//      */
//     const deployAirdropFactory = await ethers.deployContract("AirdropFactory");
//     console.log(`AirdropFactory address: ${deployAirdropFactory.target}`);

//     /**
//      * Load airdrop factory contract
//      */
//     const airdropFactory = await ethers.getContractAt(
//       "AirdropFactory",
//       airdropFactoryAddress
//     );
//     console.log(`AirdropFactory address: ${airdropFactory.target}`);
//   }
// );
