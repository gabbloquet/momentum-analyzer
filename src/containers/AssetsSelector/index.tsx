import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import NumberedCard from '../../components/NumberedCard';
import {addSelection, changeSelectedStrategy} from "../../store/slices/strategySlice";
import {Strategies, STRATEGY_TYPE, UserStrategyState} from "../../store/slices/strategySlice.service";
import './AssetsSelector.style.scss'
import {getTranslation} from "../../utils/translation";

const AssetsSelector = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const userStrategy = useSelector((state: UserStrategyState) => state.userStrategy)

    const handleAddTicker = (event:  Map<string, string>) => {
        console.log(event)
        dispatch(addSelection(event));
    }

    const handleStrategyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeSelectedStrategy(event.target.value))
    }

    return (
        <div className="assets-selector">
            <NumberedCard number={1}>
                <label>
                    Je selectionne ma stratégie
                    <select name='stategy' value={userStrategy.strategy + ''} onChange={(e) => handleStrategyChange(e)}>
                        <option value={STRATEGY_TYPE.DMA}>{STRATEGY_TYPE.DMA}</option>
                        <option value={STRATEGY_TYPE.PAPA_BEAR}>{STRATEGY_TYPE.PAPA_BEAR}</option>
                        <option value={STRATEGY_TYPE.MAMA_BEAR}>{STRATEGY_TYPE.MAMA_BEAR}</option>
                        <option value={STRATEGY_TYPE.RP}>{STRATEGY_TYPE.RP}</option>
                    </select>
                </label>
            </NumberedCard>

            <NumberedCard number={2}>
                <form onSubmit={handleSubmit(handleAddTicker)}>
                    <label htmlFor='ticker'>
                        J'ajoute mes tickers
                        {Strategies.get(userStrategy.strategy + '')?.map(asset => {
                            return <div key={asset}>
                                <p>{getTranslation("ASSETS." + asset)}</p>
                                <input type="text" name={asset + ''} placeholder='SPY' ref={register({ required: true })}/>
                            </div>
                        })}
                    </label>
                    <button type='submit'>Valider</button>
                </form>
            </NumberedCard>

            {/*<Tickers values={userStrategy.tickers}/>*/}
        </div>
    );
}

export default AssetsSelector;
