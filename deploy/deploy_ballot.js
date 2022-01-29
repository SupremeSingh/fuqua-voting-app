const fs = require('fs')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    log("----------------------------------------------------")

    const BallotContract = await ethers.getContractFactory("Ballot")
    const ballotContract = await BallotContract.deploy()
    await ballotContract.deployed()

    log(`You have deployed the contract to ${ballotContract.address}`)

    log(`Verify with:\n npx hardhat verify --network ropsten ${ballotContract.address}`)

}

module.exports.tags = ['all', 'svg']