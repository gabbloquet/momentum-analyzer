import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import NumberedCard from '../../../components/NumberedCard';
import {changeSelectedStrategy} from "../../../store/strategy/strategySlice";
import {STRATEGY_TYPE} from "../../../store/strategy/strategySlice.service";
import TickersForm from './TickersForm';
import './AssetsSelector.style.scss'

const AssetsSelector = () => {
    const dispatch = useDispatch();
    const userStrategy = useSelector((state) => state.userStrategy)

    const handleStrategyChange = (event) => {
        dispatch(changeSelectedStrategy(event.target.value))
    }

    return (
        <div className="assets-selector">
            <NumberedCard number={1}>
                <h3>Je selectionne ma stratégie</h3>
                <select name='stategy' value={userStrategy.strategy + ''} onChange={(e) => handleStrategyChange(e)}>
                    <option value={STRATEGY_TYPE.DMA}>{STRATEGY_TYPE.DMA}</option>
                    <option value={STRATEGY_TYPE.PAPA_BEAR}>{STRATEGY_TYPE.PAPA_BEAR}</option>
                    <option value={STRATEGY_TYPE.MAMA_BEAR}>{STRATEGY_TYPE.MAMA_BEAR}</option>
                    <option value={STRATEGY_TYPE.RP}>{STRATEGY_TYPE.RP}</option>
                </select>
            </NumberedCard>

            <NumberedCard number={2}>
                <TickersForm />
            </NumberedCard>

            {/*<Tickers values={userStrategy.tickers}/>*/}
        </div>
    );
}

export default AssetsSelector;
