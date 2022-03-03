import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      forking: {
        url: 'https://eth-mainnet.alchemyapi.io/v2/wEsKScvVDMT5I71vL4oqc7zrTcnAOPa-',
        blockNumber: 14297676,
      },
    },
  },
}

export default config

