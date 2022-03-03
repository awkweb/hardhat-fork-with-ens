## hardhat-fork-with-ens

When using [Mainnet Forking](https://hardhat.org/hardhat-network/guides/mainnet-forking.html) with Hardhat, [ethers.js](https://ethers.org/) ENS-related methods fail (i.e. `lookupAddress`).

Run the following to get see the error:

```
pnpm i
pnpm dev
```

Or npm:

```
npm i
npm dev
```

Check out `src/index.ts` to switch between Hardhat ethers and plain Alchemy providers.

```
Using address 0xA0Cf…251e
Fetching balance…
BigNumber { value: "1403416862768458662" }
Fetching ENS name…
Error: network does not support ENS (operation="ENS", network="unknown", code=UNSUPPORTED_OPERATION, version=providers/5.5.3)
```
