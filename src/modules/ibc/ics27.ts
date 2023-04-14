import { LCDClient } from "@terra-money/feather.js";

/**
 * ICS27 - Token Transfer / Interchain Accounts
 *
 * ICS27 defines the interface for interchain token transfers.
 * Below are example use cases for ICS27.
 */

export class ICS27 {
  private lcdClient: LCDClient;

  constructor(lcdClient: LCDClient) {
    this.lcdClient = lcdClient;
  }

  async transferTokens(recipientAddress: string, amount: number) {
    // Implementation for performing transfers of ICS20 tokens
    console.log(recipientAddress, amount, this.lcdClient);
    return "Success message";
  }
}
