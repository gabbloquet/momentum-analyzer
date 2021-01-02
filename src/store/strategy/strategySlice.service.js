export const STRATEGY_TYPE = {
  DMA: "DMA",
  PAPA_BEAR: "Papa bear",
  MAMA_BEAR: "Mama bear",
  RP: "RP"
}

export const ASSET_TYPE = {
  COMMODIITES: "COMMODIITES",
  REAL_ESTATE: "REAL_ESTATE",
  GOLD: "GOLD",
  US_STOCKS: "US_STOCKS",
  EX_US_STOCKS: "EX_US_STOCKS",
  LARGE_CAP_STOCKS: "LARGE_CAP_STOCKS",
  LARGE_CAP_VALUES_STOCKS: "LARGE_CAP_VALUES_STOCKS",
  LARGE_CAP_GROWTH_STOCKS: "LARGE_CAP_GROWTH_STOCKS",
  SMALL_CAP_STOCKS: "SMALL_CAP_STOCKS",
  SMALL_CAP_VALUES_STOCKS: "SMALL_CAP_VALUES_STOCKS",
  SMALL_CAP_GROWTH_STOCKS: "SMALL_CAP_GROWTH_STOCKS",
  DEVELOPED_MARKETS_STOCKS: "DEVELOPED_MARKETS_STOCKS",
  EMERGING_MARKETS_STOCKS: "EMERGING_MARKETS_STOCKS",
  LONG_TERM_BONDS: "LONG_TERM_BONDS",
  LONG_TERM_BONDS_EXTENDED: "LONG_TERM_BONDS_EXTENDED",
  MID_TERM_BONDS: "MID_TERM_BONDS",
  SHORT_TERM_BONDS: "SHORT_TERM_BONDS",
  CORPORATE_BONDS: "CORPORATE_BONDS",
  HIGH_YIELD_BONDS: "HIGH_YIELD_BONDS",
  TIPS: "TIPS"
}

export const Strategies = new Map([
  [STRATEGY_TYPE.DMA , [
    ASSET_TYPE.US_STOCKS,
    ASSET_TYPE.EX_US_STOCKS,
    ASSET_TYPE.LONG_TERM_BONDS,
    ASSET_TYPE.TIPS,
  ]],
  [STRATEGY_TYPE.PAPA_BEAR, [
    ASSET_TYPE.COMMODIITES,
    ASSET_TYPE.REAL_ESTATE,
    ASSET_TYPE.GOLD,
    ASSET_TYPE.LARGE_CAP_VALUES_STOCKS,
    ASSET_TYPE.LARGE_CAP_GROWTH_STOCKS,
    ASSET_TYPE.SMALL_CAP_VALUES_STOCKS,
    ASSET_TYPE.SMALL_CAP_GROWTH_STOCKS,
    ASSET_TYPE.DEVELOPED_MARKETS_STOCKS,
    ASSET_TYPE.EMERGING_MARKETS_STOCKS,
    ASSET_TYPE.LONG_TERM_BONDS,
    ASSET_TYPE.LONG_TERM_BONDS_EXTENDED,
    ASSET_TYPE.MID_TERM_BONDS,
    ASSET_TYPE.CORPORATE_BONDS
  ]],
  [STRATEGY_TYPE.MAMA_BEAR , [
    ASSET_TYPE.LARGE_CAP_STOCKS,
    ASSET_TYPE.SMALL_CAP_STOCKS,
    ASSET_TYPE.DEVELOPED_MARKETS_STOCKS,
    ASSET_TYPE.REAL_ESTATE,
    ASSET_TYPE.COMMODIITES,
    ASSET_TYPE.GOLD,
    ASSET_TYPE.LONG_TERM_BONDS,
    ASSET_TYPE.SHORT_TERM_BONDS,
    ASSET_TYPE.EMERGING_MARKETS_STOCKS,
  ]],
  [STRATEGY_TYPE.RP , [
    ASSET_TYPE.US_STOCKS,
    ASSET_TYPE.US_STOCKS,
    ASSET_TYPE.US_STOCKS,
    ASSET_TYPE.US_STOCKS,
    ASSET_TYPE.LONG_TERM_BONDS,
    ASSET_TYPE.HIGH_YIELD_BONDS,
  ]]
]);

export const initialState = {
  strategy: STRATEGY_TYPE.DMA,
  tickers: {},
  analyse: {}
}
