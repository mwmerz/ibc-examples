import { ICS27, MsgExecute } from "../src/modules/ibc/ics27";
import { MsgDelegate, Msg, Coin, LCDClient } from "@terra-money/feather.js";

describe("ICS-27 Interchain Accounts", () => {
  // Mock LCDClient for ICS27 class
  const lcdClientMock = new LCDClient({
    "phoenix-1": {
      lcd: "https://mock-url",
      chainID: "mockChainID",
      gasPrices: "1",
      gasAdjustment: "1",
      prefix: "terra",
    },
  });

  it("transfers tokens", async () => {
    const ics27 = new ICS27(lcdClientMock);
    const recipientAddress = "terra1...";
    const amount = 1000;

    const result = await ics27.transferTokens(recipientAddress, amount);

    expect(result).toContain(recipientAddress);
    expect(result).toContain(amount);
    expect(result).toContain(lcdClientMock);
  });

  it("creates a MsgExecute", () => {
    const ics27 = new ICS27(lcdClientMock);
    const sender = "terra1...";
    const interchainAccount = "osmo...";
    const msgs: Msg[] = [
      new MsgDelegate("osmo...", "osmovaloper1...", new Coin("1000", "uosmo")),
    ];

    const msgExecute: MsgExecute = ics27.createMsgExecute(
      sender,
      interchainAccount,
      msgs
    );

    expect(msgExecute.sender).toBe(sender);
    expect(msgExecute.interchainAccount).toBe(interchainAccount);
    expect(msgExecute.msgs).toEqual(msgs);
  });

  it("creates an interchain delegation message", () => {
    const ics27 = new ICS27(lcdClientMock);
    const sender = "terra1...";
    const interchainAccount = "osmo...";
    const validatorAddress = "terravaloper1...";
    const amount = 1000;
    const denom = "uosmo";

    const msgExecute: MsgExecute = ics27.createInterchainDelegationMessage(
      sender,
      interchainAccount,
      validatorAddress,
      amount,
      denom
    );

    expect(msgExecute.sender).toBe(sender);
    expect(msgExecute.interchainAccount).toBe(interchainAccount);
    expect(msgExecute.msgs.length).toBe(1);

    const msgDelegate: MsgDelegate = msgExecute.msgs[0] as MsgDelegate;
    expect(msgDelegate.delegator_address).toBe(interchainAccount);
    expect(msgDelegate.validator_address).toBe(validatorAddress);
    expect(msgDelegate.amount).toEqual(new Coin(amount.toString(), denom));
  });

  // Add tests for encodeMsgExecute and decodeMsgExecute when their implementations are ready
});
