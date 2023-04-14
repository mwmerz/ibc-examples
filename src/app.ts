import { ICS20, ICS27 } from "./modules/ibc";
import { MAINNET } from "./config/chain_configs";
import { LCDClient, MnemonicKey } from "@terra-money/feather.js";
import { Logger } from "./utils/logger";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();
const { MNEMONIC } = process.env;
console.log(MNEMONIC);

// Initialize wallet
const mk = new MnemonicKey({
  mnemonic: MNEMONIC || "",
});

(async () => {
  // Initialize the logger
  const logger = new Logger();

  try {
    // Initialize clients
    const lcd = new LCDClient(MAINNET);
    // const wallet = lcd.wallet(mk);

    // Initialize IBC module
    // ICS20 - Token Definition
    const ics20 = new ICS20(lcd);

    // ICS27 - Token Transfer / Interchain Accounts
    const ics27 = new ICS27(lcd);

    // Query IBC for ICS20 token definition
    const blockHeight = await ics20.queryBlockInfo("phoenix-1");
    logger.log(`Block Height: ${JSON.stringify(blockHeight, null, 2)}`);
    logger.logObject("Block Height: ", blockHeight);

    const userAddress = mk.accAddress("osmo");
    logger.log(`User Address: ${userAddress}`);

    const tokenTransfer = await ics27.transferTokens("osmo", 1000000);
    logger.log(`Token Transfer: ${JSON.stringify(tokenTransfer, null, 2)}`);

    // Transfer ICS20 tokens
  } catch (error: unknown) {
    logger.error(`Error: ${error}`);
  }
})();
