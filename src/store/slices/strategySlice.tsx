import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState, UserStrategy} from "./strategySlice.service";

const userStrategySlice = createSlice({
    name: 'UserStrategy',
    initialState: initialState as UserStrategy,
    reducers: {
        addTicker(state, action: PayloadAction<String>) {
            return {...state, tickers: [...state.tickers, action.payload]}
        }
    }
})

export const {
    addTicker
} = userStrategySlice.actions;
export default userStrategySlice.reducer;
