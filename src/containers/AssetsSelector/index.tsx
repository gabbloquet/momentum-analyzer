import React from 'react';
import NumberedCard from '../../components/NumberedCard';
import {STRATEGY} from "./AssetsSelector.service";
import './AssetsSelector.style.scss'

const AssetsSelector = () => {
    return (
        <form className="assets-selector">
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
        </form>
    );
}

export default AssetsSelector;
