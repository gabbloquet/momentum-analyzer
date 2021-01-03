import React from 'react';
import {useSelector} from "react-redux";
import {useIntl} from "react-intl";
import './DmaReportViewer.style.scss'
import Spinner from "../../../../components/Spinner";

const DmaReportViewer = () => {
  const intl = useIntl();
  const analyse = useSelector(state => state.userStrategy.analyse)

  return (
    <div className='dma-report-viewer'>
      <table>
        <thead>
        <tr>
          <th>Asset</th>
          <th>Ticker selectionné</th>
          <th>Performance sur 6 mois</th>
          <th>Performance sur 3 mois</th>
          <th>Performance sur 1 mois</th>
          <th>Moyenne</th>
        </tr>
        </thead>
        <tbody>
        { analyse && analyse.map(assetElements => {
          return <tr>
            <td>{intl.formatMessage({id: "ASSETS." + assetElements.asset})}</td>
            <td>{assetElements.ticker}</td>
            <td>{assetElements[1].toFixed(2)} %</td>
            <td>{assetElements[3].toFixed(2)} %</td>
            <td>{assetElements[6].toFixed(2)} %</td>
            <td>{assetElements.avg.toFixed(2)} %</td>
          </tr>
        })}
        </tbody>
      </table>
      <h3>Préconisation d'achat : {analyse.choice ? <p>{analyse.choice}</p> : <Spinner />}</h3>
    </div>
  );
};

export default DmaReportViewer;
