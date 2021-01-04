import React, {useState} from 'react';
import NumberedCard from "../../components/NumberedCard";
import TickerAnalyseForm from "../../containers/TickerAnalyse/TickerAnalyseForm";
import TickerAnalyseVisualisation from "../../containers/TickerAnalyse/TickerAnalyseVisualisation";

const TickerAnalyse = () => {
  const [analyse, setAnalyse] = useState();

  return (
    <section className='content'>
      <NumberedCard number={1}>
        <TickerAnalyseForm setAnalyse={setAnalyse}/>
      </NumberedCard>
      { analyse ? <TickerAnalyseVisualisation analyse={analyse}/> : <></> }
    </section>
  );
};

export default TickerAnalyse;
