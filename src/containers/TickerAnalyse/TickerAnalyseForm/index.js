import React from 'react';
import {useForm} from "react-hook-form";
import {getMarketData} from "../../../services/apis/marketstack";
import './TickerAnalyseForm.style.scss'
import {getPerformance} from "../../../services/mappers/marketstack";

const TickerAnalyseForm = ({ setAnalyse }) => {
  const { register, handleSubmit } = useForm();

  const handleAddTicker = (event) => {
    getMarketData(event.ticker, new Date(event.date), new Date())
      .then(response => setAnalyse({
          first: response.data[response.data.length - 1],
          last: response.data[0],
          performance: getPerformance(response)
        }
      ));
  }

  return (
    <>
      <h3>J'insère les informations du ticker que je veux analyser</h3>
      <form className='ticker-analyse-form' onSubmit={handleSubmit(handleAddTicker)}>
        <label>
          Ticker
          <input type="text" name='ticker' placeholder='SPY' ref={register({ required: true })}/>
        </label>
        <label>
          Période de stats (Max 4ans)
          <input type="date" name='date' placeholder='SPY' ref={register({ required: true })}/>
        </label>
        <button type='submit'>Valider</button>
      </form>
    </>
  );
};

export default TickerAnalyseForm;
