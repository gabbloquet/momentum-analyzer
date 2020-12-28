import {combineReducers} from '@reduxjs/toolkit'
import userStrategyReducer from "./slices/strategySlice";

const rootReducer = combineReducers({
    userStrategy: userStrategyReducer
})

export default rootReducer;
