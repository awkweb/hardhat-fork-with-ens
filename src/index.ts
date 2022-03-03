import { default as hre } from 'hardhat'
import { HardhatEthersHelpers } from '@nomiclabs/hardhat-ethers/src/types'
import { ethers as ethersLib } from 'ethers'


type HardhatRuntimeEnvironment = typeof hre & {
  ethers: typeof ethersLib & HardhatEthersHelpers
}
const ethers = (<HardhatRuntimeEnvironment>hre).ethers

// Hardhat ethers provider no worky
const provider = ethers.provider

// Regular ethers provider worky
// const provider = new ethersLib.providers.AlchemyProvider(
//   ethers.provider.network,
//   'wEsKScvVDMT5I71vL4oqc7zrTcnAOPa-'
// )

;(async () => {
  try {
    const address = '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
    console.log(`Using address ${address.slice(0, 6)}…${address.slice(38, 42)}`)
    console.log("Fetching balance…")
    const balanceRes = await provider.getBalance(address)
    console.log(balanceRes)
    console.log("Fetching ENS name…")
    const ensRes = await provider.lookupAddress(address)
    console.log(ensRes)
  } catch (error) {
    console.log(`Error: ${(<Error>error).message}`)
  }
})()
