import React from 'react';
import {useSelector} from "react-redux";

const DmaReportViewer = () => {

  const analyse = useSelector(state => state.userStrategy.analyse)

  return (
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
          <td>{assetElements.asset}</td>
          <td>{assetElements.ticker}</td>
          <td>{assetElements[1]}</td>
          <td>{assetElements[3]}</td>
          <td>{assetElements[6]}</td>
          <td>{assetElements.avg}</td>
        </tr>
      })}
      </tbody>
    </table>
  );
};

export default DmaReportViewer;
