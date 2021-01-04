import React from 'react';
import './Tickers.style.scss'

const Tickers = ({values}) => {
    // const dispatch = useDispatch();

    return (
        <ul className="tickers">
            {values.map((ticker) => {
                return <li key={'TICKER_' + ticker}>
                    {ticker}
                    {/*<button onClick={() => dispatch(deleteTicker(ticker))}>Delete</button>*/}
                </li>
            })}
        </ul>
    );
}

export default Tickers;
