import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialStrategyState = {

}

const strategySlice = createSlice({
    name: 'strategy',
    initialState: initialStrategyState,
    reducers: {
        increment(state, action: PayloadAction<object>) {
            return {...state, ...action.payload}
        }
    }
})

export default strategySlice.reducer;
