const { ethers, upgrades } = require("hardhat");

async function main() {
    const NFTUpgradeable = await ethers.getContractFactory("NFTUpgradeable");
    console.log("Deploying NFT...");
    const nft = await upgrades.deployProxy(NFTUpgradeable,[], {
        initializer: "initialize",
    });
    await nft.deployed();
    console.log("NFT deployed to:", nft.address);
}

main();
