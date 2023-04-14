import { LCDClient } from "@terra-money/feather.js";
import { ICS20 } from "../src/modules/ibc";
import { MAINNET } from "../src/config";

// Mock the LCDClient class
jest.mock("@terra-money/feather.js");

describe("ICS20", () => {
  let ics20: ICS20;
  let lcdClient: LCDClient;

  beforeEach(() => {
    // Initialize the mocked LCDClient and ICS20 instances
    lcdClient = new LCDClient(MAINNET);
    ics20 = new ICS20(lcdClient);
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  it("should query block info", async () => {
    // Given
    const chainId = "phoenix-1";
    const mockBlockHeight = "123456";

    // Mock the lcdClient.tendermint.blockInfo() method to return a mocked block height
    lcdClient.tendermint.blockInfo = jest.fn().mockResolvedValue({
      block: {
        header: {
          height: mockBlockHeight,
        },
      },
    });

    // When
    const result = await ics20.queryBlockInfo(chainId);

    // Then
    expect(lcdClient.tendermint.blockInfo).toHaveBeenCalledWith(chainId);
    expect(result).toBe(mockBlockHeight);
  });
});
