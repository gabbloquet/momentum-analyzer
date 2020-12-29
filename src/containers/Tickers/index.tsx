import React from 'react';
import './Tickers.style.scss'
import {useDispatch} from "react-redux";
import { deleteTicker } from '../../store/slices/strategySlice';

interface TickerProps {
    values: String[]
}

const Tickers = ({values}: TickerProps) => {
    const dispatch = useDispatch();

    return (
        <ul className="tickers">
            {values.map((ticker: String) => {
                return <li key={'TICKER_' + ticker}>
                    {ticker}
                    <button onClick={() => dispatch(deleteTicker(ticker))}>Delete</button>
                </li>
            })}
        </ul>
    );
}

export default Tickers;