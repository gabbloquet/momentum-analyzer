import {getDateWithMonthAgo, sleep} from "../../../utils/functions";
import {getMarketData} from "../../apis/marketstack";
import {getPerformance} from "../../mappers/marketstack";
import {ASSET_TYPE, Strategies} from "../../../store/strategy/strategySlice.service";
import {addAssetAnalyse, setPreconisation} from "../../../store/strategy/strategySlice";

const getTickerPerformance = async(ticker, date) => {
  let data = await getMarketData(ticker, date, new Date());
  return getPerformance(data);
}

export const loadDMAAnalyse = (userStrategy) => dispatch => {

  const sixMonthAgo = getDateWithMonthAgo(new Date(), 6);
  const threeMonthAgo = getDateWithMonthAgo(new Date(),3);
  const aMonthAgo = getDateWithMonthAgo(new Date(),1);

  Strategies.get(userStrategy.strategy).forEach(async asset => {

    const ticker = userStrategy.tickers[asset];
    await sleep(2000);

    const sixMonthAgoPerf = await getTickerPerformance(ticker, sixMonthAgo)
    await sleep(2000);

    const threeMonthAgoPerf = await getTickerPerformance(ticker, threeMonthAgo)
    await sleep(2000);

    const aMonthAgoPerf = await getTickerPerformance(ticker, aMonthAgo)
    await sleep(2000);

    const avg = (sixMonthAgoPerf + threeMonthAgoPerf + aMonthAgoPerf) / 3;

    dispatch(addAssetAnalyse({
      asset,
      ticker,
      avg,
      1: aMonthAgoPerf,
      3: threeMonthAgoPerf,
      6: sixMonthAgoPerf
    }))
  })
}

const getAssetWithAnalyse = (analyse, assetToFind) => {
  let assetWithInformations;
  analyse.forEach(assetAnalyse => assetAnalyse.asset === assetToFind ? assetWithInformations = assetAnalyse : null)
  return assetWithInformations;
}

export const loadDmaPreconisation = (analyse) => dispatch => {
  const us = getAssetWithAnalyse(analyse, ASSET_TYPE.US_STOCKS)
  const exUs = getAssetWithAnalyse(analyse, ASSET_TYPE.EX_US_STOCKS)
  const bond = getAssetWithAnalyse(analyse, ASSET_TYPE.LONG_TERM_BONDS)
  const tips = getAssetWithAnalyse(analyse, ASSET_TYPE.TIPS)

  let mostInterestingStockAsset = us.avg > exUs.avg ? us : exUs;
  let mostInterestingSafeAsset = bond.avg > tips.avg ? bond : tips;

  mostInterestingStockAsset.avg > 0
    ? dispatch(setPreconisation(mostInterestingStockAsset))
    : dispatch(setPreconisation(mostInterestingSafeAsset))
}
