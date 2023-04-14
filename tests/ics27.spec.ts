import { LCDClient } from "@terra-money/feather.js";
import { ICS27 } from "../src/modules/ibc";
import { MAINNET } from "../src/config";

// Mock the LCDClient class
jest.mock("@terra-money/feather.js");

describe("ICS27", () => {
  let ics27: ICS27;
  let lcdClient: LCDClient;

  beforeEach(() => {
    // Initialize the mocked LCDClient and ICS27 instances
    lcdClient = new LCDClient(MAINNET);
    ics27 = new ICS27(lcdClient);
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  it("should transfer token", async () => {
    // Given
    const recipientAddress = "terra1...";
    const amount = 123456;

    // When
    const result = await ics27.transferTokens(recipientAddress, amount);

    // Then
    expect(result).toBe(
      `Success message ${recipientAddress}, ${amount}, ${lcdClient}`
    );
  });
});
