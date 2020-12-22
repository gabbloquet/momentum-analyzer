import {combineReducers} from '@reduxjs/toolkit'
import strategyReducer from "./slices/strategySlice";

const rootReducer = combineReducers({
    strategy: strategyReducer
})

export default rootReducer;
