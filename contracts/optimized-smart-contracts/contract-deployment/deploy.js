const { ethers } = require("hardhat");

async function main() {
    // Deploy Genesis contract
    const GenesisContract = await ethers.getContractFactory("GenesisContract");
    const genesis = await GenesisContract.deploy();
    console.log("Genesis Contract deployed to:", genesis.address);

    // Deploy NeuroFluxNode contract
    const NeuroFluxNode = await ethers.getContractFactory("NeuroFluxNode");
    const neurofluxNode = await NeuroFluxNode.deploy();
    console.log("NeuroFlux Node Contract deployed to:", neurofluxNode.address);

    // Deploy Consensus contract
    const Consensus = await ethers.getContractFactory("Consensus");
    const consensus = await Consensus.deploy();
    console.log("Consensus Contract deployed to:", consensus.address);

    // Deploy ResourceManagement contract
    const ResourceManagement = await ethers.getContractFactory("ResourceManagement");
    const resourceManagement = await ResourceManagement.deploy();
    console.log("Resource Management Contract deployed to:", resourceManagement.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
