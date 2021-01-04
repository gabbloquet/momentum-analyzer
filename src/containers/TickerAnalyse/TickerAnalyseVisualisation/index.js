import React from 'react';
import './TickerAnalyseVisualisation.style.scss'

const TickerAnalyseVisualisation = ({analyse}) => {
  return (
    <div className='ticker-analyse-visualisation'>
      <h3>Résultats</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Ticker</th>
            <th>Ouverture</th>
            <th>Fermeture</th>
            <th>Valeur haute</th>
            <th>Valeur basse</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{new Date(analyse.first.date).toDateString()}</td>
            <td>{analyse.first.symbol}</td>
            <td>{analyse.first.open}</td>
            <td>{analyse.first.close}</td>
            <td>{analyse.first.high}</td>
            <td>{analyse.first.low}</td>
            <td>{analyse.first.volume}</td>
          </tr>
          <tr>
            <td>{new Date(analyse.last.date).toDateString()}</td>
            <td>{analyse.last.symbol}</td>
            <td>{analyse.last.open}</td>
            <td>{analyse.last.close}</td>
            <td>{analyse.last.high}</td>
            <td>{analyse.last.low}</td>
            <td>{analyse.last.volume}</td>
          </tr>
        </tbody>
      </table>
      <h4>Performance : {analyse.performance.toFixed(2)} %</h4>
    </div>
  );
};

export default TickerAnalyseVisualisation;
