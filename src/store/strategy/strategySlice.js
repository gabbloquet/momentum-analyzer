import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./strategySlice.service";
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
    addAssetAnalyse(state, action) {
      return {...state, analyse: [ ...state.analyse, {...action.payload}], status: STATUS.DONE}
    },
    setAnalyseLoading(state) {
      return {...state, status: STATUS.LOADING}
    },
    setPreconisation(state, action) {
      return {...state, preconisation: action.payload}
    }
  }
})

export const {
  addSelection,
  changeSelectedStrategy,
  addAssetAnalyse,
  setAnalyseLoading,
  setPreconisation
} = userStrategySlice.actions;
export default userStrategySlice.reducer;
