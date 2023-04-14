export type NetworkName = string;
export type ChainID = string;
export type InterchainNetworks = Record<
  NetworkName,
  Record<ChainID, InterchainNetwork>
>;

export interface InterchainNetwork {
  chainID: ChainID;
  lcd: string;
  gasAdjustment: number;
  gasPrices: Record<string, number>;
  prefix: string;
  baseAsset: string;
  name: string;
  icon: string;
  coinType: "118" | "330";
  ibc?: {
    toTerra: string;
    fromTerra: string;
    ics?: {
      contract: string;
      toTerra: string;
      fromTerra: string;
    };
    icsFromTerra?: {
      contract: string;
      toTerra: string;
      fromTerra: string;
    };
  };
  version?: string;
  isClassic?: boolean;
  explorer: {
    address?: string;
    tx?: string;
    validator?: string;
    block?: string;
  };
  tokens: string | null;
}

export interface TerraNetwork {
  name: NetworkName;
  chainID: string;
  lcd: string;
  api?: string;
}

export type CustomNetworks = Record<NetworkName, CustomNetwork>;

export interface CustomNetwork extends TerraNetwork {
  preconfigure?: boolean;
}
