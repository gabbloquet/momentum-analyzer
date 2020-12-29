import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState, UserStrategy} from "./strategySlice.service";

const userStrategySlice = createSlice({
    name: 'UserStrategy',
    initialState: initialState as UserStrategy,
    reducers: {
        addTicker(state, action: PayloadAction<String>) {
            return {...state, tickers: [...state.tickers, action.payload]}
        },
        deleteTicker(state, action: PayloadAction<String>) {
            let tickersTmp = [...state.tickers];
            const tickers = tickersTmp.filter(tic => tic !== action.payload);
            return {...state, tickers }
        }
    }
})

export const {
    addTicker,
    deleteTicker
} = userStrategySlice.actions;
export default userStrategySlice.reducer;
