import {createSlice} from "@reduxjs/toolkit";
import {getAnalyseForDMA, initialState, STRATEGY_TYPE} from "./strategySlice.service";
import {STATUS} from "../../utils/status";

const userStrategySlice = createSlice({
  name: 'UserStrategy',
  initialState: initialState,
  reducers: {
    changeSelectedStrategy(state, action) {
      return {...state, strategy: action.payload}
    },
    addSelection(state, action) {
      return {...state, tickers: {...action.payload}}
    },
    loadAnalyse(state) {
      if(state.strategy === STRATEGY_TYPE.DMA) {
        const analyse = getAnalyseForDMA(state);
        return {...state, analyse};
      } else {
        return {...state, analyse: STATUS.ERROR};
      }
      // state.tickers.forEach( ticker => {
      //     getMarketData(ticker);
      // })
    },
    setAnalyseLoading(state) {
      return {...state, analyse: STATUS.LOADING}
    }
    // deleteTicker(state, action: PayloadAction<String>) {
    //     let tickersTmp = {...state.tickers};
    //     const tickers = tickersTmp.filter(tic => tic !== action.payload);
    //     return {...state, tickers }
    // }
  }
})

export const {
  addSelection,
  changeSelectedStrategy,
  loadAnalyse,
  setAnalyseLoading
} = userStrategySlice.actions;
export default userStrategySlice.reducer;
