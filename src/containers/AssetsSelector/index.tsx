import React from 'react';
import NumberedCard from '../../components/NumberedCard';
import { STRATEGY } from "./AssetsSelector.service";
import './AssetsSelector.style.scss'

const addTicker = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.ticker.value);
}

const AssetsSelector = () => {
    return (
        <div className="assets-selector">
            <NumberedCard number={1}>
                <label>
                    Je selectionne ma stratégie
                    <select name='stategy'>
                        <option value={STRATEGY.DMA}>DMA</option>
                        <option value={STRATEGY.PAPA_BEAR}>Papa Bear</option>
                        <option value={STRATEGY.MAMA_BEAR}>Mama Bear</option>
                    </select>
                </label>
            </NumberedCard>

            <NumberedCard number={2}>
                <form onSubmit={addTicker}>
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
