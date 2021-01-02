export const getPerformance = (marketData) => {
  return marketData && (marketData.data[1].close/marketData.data[marketData.data.length - 1].open - 1) * 100
}
