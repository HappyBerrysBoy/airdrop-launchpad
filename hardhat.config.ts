import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
// import "@nomiclabs/hardhat-ethers";
// import "@nomiclabs/hardhat-etherscan";
// import "@nomiclabs/hardhat-waffle";
// import "@openzeppelin/hardhat-upgrades";
// import "@typechain/hardhat";
// import "hardhat-abi-exporter";
// import "hardhat-contract-sizer";
// import "solidity-coverage";
// import "solidity-docgen";

require("dotenv").config();
require("./tasks/01-airdrop-factory");
require("./tasks/02-airdrop-contract");
require("./tasks/03-airdrop-user");
require("./tasks/04-play-spinner");

const {
  ETHERSCAN_KEY,
  DEPLOYER_PRIVATE_KEY,
  AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY1,
  AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY2,
  AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY3,
  AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY4,
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.17",
      },
      {
        version: "0.8.24",
      },
    ],
  },
  networks: {
    kairos: {
      chainId: 1001,
      url: "https://rpc.ankr.com/klaytn_testnet",
      // url: "https://public-en-kairos.node.kaia.io",
      gasPrice: 25000000000,
      accounts:
        DEPLOYER_PRIVATE_KEY !== undefined
          ? [
              DEPLOYER_PRIVATE_KEY,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY1!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY2!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY3!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY4!,
            ]
          : [],
    },
    cypress: {
      chainId: 8217,
      url: "https://public-en-cypress.klaytn.net",
      gasPrice: 250000000000,
      accounts:
        DEPLOYER_PRIVATE_KEY !== undefined
          ? [
              DEPLOYER_PRIVATE_KEY,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY1!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY2!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY3!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY4!,
            ]
          : [],
    },
    endurance: {
      url: "http://20.197.13.207:8545",
      chainId: 648,
      accounts:
        DEPLOYER_PRIVATE_KEY !== undefined
          ? [
              DEPLOYER_PRIVATE_KEY,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY1!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY2!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY3!,
              AIRDROP_CLAIM_TEST_ACCOUNT_PRIVATE_KEY4!,
            ]
          : [],
    },
  },
  etherscan: {
    apiKey: {
      baobab: ETHERSCAN_KEY !== undefined ? ETHERSCAN_KEY : "",
      cypress: ETHERSCAN_KEY !== undefined ? ETHERSCAN_KEY : "",
    },
    customChains: [
      {
        network: "kairos",
        chainId: 1001,
        urls: {
          apiURL: "https://api-kairos.klaytnscope.com/api",
          browserURL: "https://kairos.klaytnscope.com",
        },
      },
      {
        network: "cypress",
        chainId: 8217,
        urls: {
          apiURL: "https://api-cypress.klaytnscope.com/api",
          browserURL: "https://klaytnscope.com",
        },
      },
      {
        network: "endurance",
        chainId: 648,
        urls: {
          apiURL: "https://explorer-endurance.fusionist.io/api",
          browserURL: "https://explorer-endurance.fusionist.io",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
