const { task } = require("hardhat/config");
const { getAccount } = require("./helpers");


task("check-balance", "Prints out the balance of your account").setAction(async function (taskArguments, hre) {
    const account = getAccount();
    console.log(`Account balance for ${account.address}: ${await account.getBalance()}`);
});

task("deploy", "Deploys the NFT contract").setAction(async function (taskArguments, hre) {
    // Fetch the compiled contract using ethers.js
    const nftContractFactory = await hre.ethers.getContractFactory("NFT", getAccount());
    // calling deploy() will return an async Promise that we can await on 
    const nft = await nftContractFactory.deploy();
    console.log(`Contract deployed to address: ${nft.address}`);
});