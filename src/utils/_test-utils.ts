import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'

// Hardhat
export const LocalhostProvider = new JsonRpcProvider('http://127.0.0.1:8545/')

// Hardhat Account #0
export const SignerAccount0 = new Wallet(
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  LocalhostProvider
)