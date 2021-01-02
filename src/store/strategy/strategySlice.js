import {createSlice} from "@reduxjs/toolkit";
import {getAnalyseForDMA, initialState, STRATEGY_TYPE} from "./strategySlice.service";

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
            let analyse;
            if(state.strategy === STRATEGY_TYPE.DMA)
                analyse = getAnalyseForDMA(state);
            return {...state, analyse};
            // state.tickers.forEach( ticker => {
            //     getMarketData(ticker);
            // })
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
    loadAnalyse
} = userStrategySlice.actions;
export default userStrategySlice.reducer;
