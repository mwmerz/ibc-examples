import { ICS27 } from "../src/modules/ibc";
import { MAINNET } from "../src/config";
import { LCDClient } from "@terra-money/feather.js";

// Mock the LCDClient class
jest.mock("@terra-money/feather.js");

// Mock the console.log function to suppress logs during testing
global.console = { log: jest.fn() } as unknown as Console;

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

  it("should transfer tokens", async () => {
    // Given
    const recipientAddress = "terra1...";
    const amount = 100;

    // When
    const result = await ics27.transferTokens(recipientAddress, amount);

    // Then
    expect(console.log).toHaveBeenCalledWith(
      recipientAddress,
      amount,
      lcdClient
    );
    expect(result).toBe("Success message");
  });
});
