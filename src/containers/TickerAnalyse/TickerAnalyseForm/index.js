import React from 'react';
import {useForm} from "react-hook-form";
import './TickerAnalyseForm.style.scss'

const TickerAnalyseForm = () => {
  const { register, handleSubmit } = useForm();

  const handleAddTicker = (event) => {
    console.log(event)
  }
  return (
    <>
      <h3>J'ajoute mes tickers en fonction de ma stratégie</h3>
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
