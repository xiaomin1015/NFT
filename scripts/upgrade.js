const { ethers, upgrades } = require("hardhat");
const PROXY = '0x78Ded93E5a40FDe6eb2a5123DC929F85E1614EC6';

async function main() {
  const NFTUpgradeableV2 = await ethers.getContractFactory("NFTUpgradeable");
  const NFT = await upgrades.upgradeProxy(PROXY, NFTUpgradeableV2);
  console.log("NFT upgraded");
}

main();