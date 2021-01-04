import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useIntl} from "react-intl";
import {loadDmaPreconisation} from "../../../../services/domain/analyse";
import Spinner from "../../../../components/Spinner";
import './DmaReportViewer.style.scss'

const DmaReportViewer = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const userStrategy = useSelector(state => state.userStrategy)

  useEffect(() => {
    if(userStrategy.analyse.length === Object.keys(userStrategy.tickers).length)
      dispatch(loadDmaPreconisation(userStrategy.analyse));
  }, [userStrategy.analyse, dispatch, userStrategy.tickers, userStrategy.tickers.length])

  return (
    <div className='dma-report-viewer'>
      <table>
        <thead>
        <tr>
          <th>Asset</th>
          <th>Ticker selectionné</th>
          <th>Performance sur 1 mois</th>
          <th>Performance sur 3 mois</th>
          <th>Performance sur 6 mois</th>
          <th>Moyenne</th>
        </tr>
        </thead>
        <tbody>
        { userStrategy.analyse && userStrategy.analyse.map(assetElements => {
          return <tr key={assetElements.asset}>
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
      <h3>Préconisation d'achat :
        {userStrategy.preconisation
          ? <p>{intl.formatMessage({id: "ASSETS." + userStrategy.preconisation.asset})} ({userStrategy.preconisation.ticker})</p>
          : <Spinner />
        }
      </h3>
    </div>
  );
};

export default DmaReportViewer;
