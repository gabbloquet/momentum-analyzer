import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum STRATEGY { PAPA_BEAR, DMA, MAMA_BEAR, RP }

interface UserStrategy {
    strategy: STRATEGY,
    tickers: String[]
}

const initialState = {
    strategy: STRATEGY.DMA,
    tickers: []
}

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
