const hre = require("hardhat");

async function main() {
  console.log("Deploying EduPlatform to BSC...");

  const EduPlatform = await hre.ethers.getContractFactory("EduPlatform");
  const edu = await EduPlatform.deploy();
  await edu.waitForDeployment();

  const address = await edu.getAddress();
  console.log(`EduPlatform deployed to: ${address}`);
  console.log("Save this address for frontend configuration!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
