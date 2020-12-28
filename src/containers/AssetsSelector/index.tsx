import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import NumberedCard from '../../components/NumberedCard';
import {addTicker} from "../../store/slices/strategySlice";
import {STRATEGY, UserStrategyState} from "../../store/slices/strategySlice.service";
import Tickers from "../Tickers";
import './AssetsSelector.style.scss'
import {clearForm} from "../../utils/functions";

const AssetsSelector = () => {
    const dispatch = useDispatch();
    const userStrategy = useSelector((state: UserStrategyState) => state.userStrategy)

    const handleAddTicker = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addTicker(event.currentTarget.ticker.value));
        clearForm();
    }

    return (
        <div className="assets-selector">
            <NumberedCard number={1}>
                <label>
                    Je selectionne ma stratégie
                    <select name='stategy' value={userStrategy.strategy}>
                        <option value={STRATEGY.DMA}>DMA</option>
                        <option value={STRATEGY.PAPA_BEAR}>Papa Bear</option>
                        <option value={STRATEGY.MAMA_BEAR}>Mama Bear</option>
                        <option value={STRATEGY.RP}>RP</option>
                    </select>
                </label>
            </NumberedCard>

            <NumberedCard number={2}>
                <form onSubmit={handleAddTicker}>
                    <label htmlFor='ticker'>
                        J'ajoute mes tickers
                        <input type="text" name='ticker' placeholder='Exemple: SPY'/>
                    </label>
                    <button type='submit'>Ajouter</button>
                </form>
            </NumberedCard>

            <Tickers values={userStrategy.tickers}/>
        </div>
    );
}

export default AssetsSelector;
