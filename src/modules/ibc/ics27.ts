import { MsgDelegate, Msg, Coin, LCDClient } from "@terra-money/feather.js";

// Define the MsgExecute structure
export interface MsgExecute {
  sender: string;
  interchainAccount: string;
  msgs: Msg[];
}

export class ICS27 {
  private lcdClient: LCDClient;

  constructor(lcdClient: LCDClient) {
    this.lcdClient = lcdClient;
    console.log(this.lcdClient);
  }

  async transferTokens(recipientAddress: string, amount: number) {
    // Implementation for performing transfers of ICS20 tokens
    console.log(`${recipientAddress} ${amount}`);
    return amount;
  }

  // Function to create MsgExecute
  createMsgExecute(
    sender: string,
    interchainAccount: string,
    msgs: Msg[]
  ): MsgExecute {
    return {
      sender,
      interchainAccount,
      msgs,
    };
  }

  // Function to encode MsgExecute
  encodeMsgExecute() {
    // Encoding logic for MsgExecute
  }

  // Function to decode MsgExecute
  decodeMsgExecute() {
    // Decoding logic for MsgExecute
  }

  createInterchainDelegationMessage(
    sender: string,
    interchainAccount: string,
    validatorAddress: string,
    amount: number,
    denom: string
  ): MsgExecute {
    const msgDelegate = new MsgDelegate(
      interchainAccount,
      validatorAddress,
      new Coin(denom, amount.toString())
    );

    return this.createMsgExecute(sender, interchainAccount, [msgDelegate]);
  }
}
