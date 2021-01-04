import React from "react";
import {Strategies} from "../../../../store/strategy/strategySlice.service";
import {useIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {addSelection} from "../../../../store/strategy/strategySlice";
import './TickersForm.style.scss'

const TickersForm = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const userStrategy = useSelector(state => state.userStrategy)

    const handleAddTicker = (event) => {
        dispatch(addSelection(event));
    }
    return (
        <form className='tickers-form' onSubmit={handleSubmit(handleAddTicker)}>
            <h3>J'ajoute mes tickers en fonction de ma stratégie</h3>
            <div className="tickers">
                {Strategies.get(userStrategy.strategy + '')?.map(asset => {
                    return <div key={asset}>
                        <p>{intl.formatMessage({id: "ASSETS." + asset})}</p>
                        <input type="text" name={asset + ''} placeholder='SPY' ref={register({ required: true })}/>
                    </div>
                })}
            </div>
            <button type='submit'>Valider</button>
        </form>
    )
}

export default TickersForm;
