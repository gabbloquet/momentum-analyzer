import React from 'react';
import {STRATEGY} from "./AssetsSelector.service";

const AssetsSelector = () => {
    return (
        <form className="assets-selector">
            <label>
                1. Je selectionne ma stratégie
                <select name='stategy'>
                    <option value={STRATEGY.DMA}>DMA</option>
                    <option value={STRATEGY.PAPA_BEAR}>Papa Bear</option>
                    <option value={STRATEGY.MAMA_BEAR}>Mama Bear</option>
                </select>
            </label>
        </form>
    );
}

export default AssetsSelector;
