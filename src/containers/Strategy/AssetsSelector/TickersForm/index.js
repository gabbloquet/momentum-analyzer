import React from "react";
import {Strategies} from "../../../../store/strategy/strategySlice.service";
import {useIntl} from "react-intl";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {addSelection, setAnalyseLoading} from "../../../../store/strategy/strategySlice";
import {loadDMAAnalyse} from "../../../../services/domain/analyse";
import './TickersForm.style.scss'

const TickersForm = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const userStrategy = useSelector(state => state.userStrategy)

    const handleAddTicker = (event) => {
      dispatch(addSelection(event))
      dispatch(setAnalyseLoading());
      dispatch(loadDMAAnalyse());
    }

    return (
        <form className='tickers-form' onSubmit={handleSubmit(handleAddTicker)}>
            <h3>J'ajoute mes tickers en fonction de ma stratégie</h3>
            <div className="tickers">
                {Strategies.get(userStrategy.strategy + '')?.map(asset => {
                    return <div key={userStrategy.strategy + asset}>
                        <p>{intl.formatMessage({id: "ASSETS." + asset})}</p>
                        <input type="text" name={asset + ''} placeholder='TICKER' ref={register({ required: true })}/>
                    </div>
                })}
            </div>
          <div className='buttons'>
            <button type='submit'>Valider</button>
            <details>
              <summary>Je ne connais pas de ticker</summary>
              US Stocks : SPY | QQQ | IWM <br/>
              Ex-US Stocks : SCZ <br/>
              Long term bonds : TLT <br/>
              Tips : TIP
            </details>
          </div>
        </form>
    )
}

export default TickersForm;
