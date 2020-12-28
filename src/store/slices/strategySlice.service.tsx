export enum STRATEGY { PAPA_BEAR, DMA, MAMA_BEAR, RP }

export interface UserStrategy {
    strategy: STRATEGY,
    tickers: String[]
}

export const initialState = {
    strategy: STRATEGY.DMA,
    tickers: []
}

export interface UserStrategyState {
    userStrategy: UserStrategy
}
