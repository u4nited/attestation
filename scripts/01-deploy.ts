import {ethers, upgrades} from 'hardhat'

async function main() {
    const Factory = await ethers.getContractFactory('FirstAttestation')
    const instance = await Factory.deploy()
    const contract = await instance.waitForDeployment()
    console.log(await contract.getAddress())
}

void main()
