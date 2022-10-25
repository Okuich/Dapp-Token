const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  // fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")

  // deploy contract
  const token = await Token.deploy('Dapp University', 'DAPP', '1000000')
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
