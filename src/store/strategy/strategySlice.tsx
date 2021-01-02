import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState, Strategies, UserStrategy} from "./strategySlice.service";

const userStrategySlice = createSlice({
    name: 'UserStrategy',
    initialState: initialState as UserStrategy,
    reducers: {
        changeSelectedStrategy(state, action: PayloadAction<String>) {
            return {...state, strategy: action.payload}
        },
        addSelection(state, action: PayloadAction<Object>) {
            return {...state, tickers: {...action.payload}}
        },
        loadAnalyse(state) {
            let tickersPerformance;
            Strategies.get(state.strategy + '')?.forEach((assetToCheck: string) => {
                console.log('ASSET : ', assetToCheck)
                console.log('ASSET : ', state.tickers[assetToCheck])
            })
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
