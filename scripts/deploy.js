const { ethers, upgrades } = require("hardhat");

async function main() {
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await upgrades.deployProxy(NFT, []);
  await nft.waitForDeployment();
  console.log("NFT deployed to:", nft.target);
  var implementationAddress = await upgrades.erc1967.getImplementationAddress(
    nft.targetxw
  );
  console.log(`NFT Impl Address: ${implementationAddress}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });