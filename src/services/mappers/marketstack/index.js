export const getPerformance = (marketData) => {
  return marketData && (marketData[1].close/marketData[marketData.length - 1].open - 1) * 100
}
