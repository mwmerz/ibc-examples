import { LCDClient } from "@terra-money/feather.js";

/**
 * ICS20 - Token Definition
 *
 * ICS20 defines the interface for a fungible token on the interchain.
 * Below are example use cases for ICS20.
 */

export class ICS20 {
  private lcdClient: LCDClient;

  constructor(lcdClient: LCDClient) {
    this.lcdClient = lcdClient;
  }

  async queryBlockInfo(chainId: string) {
    // Implementation for querying IBC client state
    return (await this.lcdClient.tendermint.blockInfo(chainId)).block.header
      .height;
  }
}
