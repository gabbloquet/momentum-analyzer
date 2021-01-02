import {getDateWithMonthAgo, sleep} from "../../../utils/functions";
import {getMarketData} from "../../apis/marketstack";
import {getPerformance} from "../../mappers/marketstack";
import {Strategies} from "../../../store/strategy/strategySlice.service";
import {addAssetAnalyse} from "../../../store/strategy/strategySlice";

const getTickerPerformance = async(ticker, date) => {
  let data = await getMarketData(ticker, date, new Date());
  return getPerformance(data);
}

export const getAnalyseForDMA = (userStrategy) => dispatch => {
  let analyse = [];

  const sixMonthAgo = getDateWithMonthAgo(new Date(), 6);
  const threeMonthAgo = getDateWithMonthAgo(new Date(),3);
  const aMonthAgo = getDateWithMonthAgo(new Date(),1);

  Strategies.get(userStrategy.strategy).forEach(async asset => {

    const ticker = userStrategy.tickers[asset];
    await sleep(2000);

    // let data = await getMarketData(ticker, sixMonthAgo, new Date());
    // const sixMonthAgoPerf = getPerformance(data);
    const sixMonthAgoPerf = getTickerPerformance(ticker, sixMonthAgo)
    await sleep(2000);

    // data = await getMarketData(ticker, threeMonthAgo, new Date())
    // const threeMonthAgoPerf = getPerformance(data);
    const threeMonthAgoPerf = getTickerPerformance(ticker, threeMonthAgo)
    await sleep(2000);

    // data = await getMarketData(ticker, aMonthAgo, new Date());
    // const aMonthAgoPerf = getPerformance(data);
    const aMonthAgoPerf = getTickerPerformance(ticker, aMonthAgo)
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

  return analyse;
}
