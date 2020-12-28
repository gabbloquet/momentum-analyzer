import React from 'react';
import './Tickers.style.scss'

interface TickerProps {
    values: String[]
}

const Tickers = ({values}: TickerProps) => {
    return (
        <ul className="tickers">
            {values.map((ticker: String) => {
                return <li key={'TICKER_' + ticker}>{ticker}</li>
            })}
        </ul>
    );
}

export default Tickers;
