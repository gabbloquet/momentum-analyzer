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
        <TickerAnalyseVisualisation analyse={analyse}/>
      </NumberedCard>
    </section>
  );
};

export default TickerAnalyse;
