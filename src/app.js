console.log('Hello world!');

import init from "cardashift-lucid-contracts";
import config from "./config.js"

async function connect() {
    init(
        config.url, // blockfrost testnet url
        config.apiKey, // blockfrost testnet apikey
        "nami")
        .then(({ claimFunds, fundsAvailable}) => {
          const epData = {
            // native1
            addr_test1wplllmmv66873lu9fxvralrddql5pxqg9ws8wvy4tz7gquqnyhmwk: [{
              nativeScript: {
                unlockTime: 61302000,
                pkh: "404b36ba72b1e6602d33ad069ef25d8b65757c8d728e02aa1a280cd8"
              },
              asset: { currencySymbol: "", tokenName: "" },
            }],
            // native2
            addr_test1wr4s67h09peh3ssrx95l5k5rlfzw4ez4x2hlsuf6m4pwukc87xd44: [{
              nativeScript: {
                unlockTime: 61310000,
                pkh: "404b36ba72b1e6602d33ad069ef25d8b65757c8d728e02aa1a280cd8"
              },
              asset: { currencySymbol: "", tokenName: "" },
            }]
          }
          fundsAvailable(epData).then(console.log);
        })
}