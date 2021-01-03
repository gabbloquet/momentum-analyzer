import React from 'react';
import {useSelector} from "react-redux";
import {useIntl} from "react-intl";
import './DmaReportViewer.style.scss'

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
            <td>{assetElements[1]}</td>
            <td>{assetElements[3]}</td>
            <td>{assetElements[6]}</td>
            <td>{assetElements.avg}</td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  );
};

export default DmaReportViewer;
