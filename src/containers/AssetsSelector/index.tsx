import React from 'react';
import NumberedCard from '../../components/NumberedCard';
import {addTicker, STRATEGY} from "../../store/slices/strategySlice";
import {useDispatch} from "react-redux";
import './AssetsSelector.style.scss'

const AssetsSelector = () => {
    const dispatch = useDispatch();

    const handleAddTicker = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addTicker(event.currentTarget.ticker.value));
    }

    return (
        <div className="assets-selector">
            <NumberedCard number={1}>
                <label>
                    Je selectionne ma stratégie
                    <select name='stategy'>
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
        </div>
    );
}

export default AssetsSelector;
