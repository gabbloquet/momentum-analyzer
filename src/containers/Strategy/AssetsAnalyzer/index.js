import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAnalyseLoading} from '../../store/strategy/strategySlice';
import {isAnEmptyObject} from "../../utils/functions";
import {STATUS} from "../../utils/status";
import Spinner from "../../components/Spinner";
import AnalyseViewer from "./AnalyseViewer";
import {loadDMAAnalyse} from "../../services/domain/analyse";

const AssetsAnalyzer = () => {
    const dispatch = useDispatch();
    const userStrategy = useSelector(state => state.userStrategy);

    const handleLaunchAnalyse = () => {
      dispatch(setAnalyseLoading());
      dispatch(loadDMAAnalyse(userStrategy));
    }

    return (
        <div className="assets-analyzer">
            {isAnEmptyObject(userStrategy.tickers) ? (
                <p>Veuillez selectionner une stratégie et saisir les tickers.</p>
            ) : isAnEmptyObject(userStrategy.analyse) && !userStrategy.status ? (
                <button onClick={() => handleLaunchAnalyse()}>Lancer l'analyse</button>
            ) : (
              <div className='max-width-center'>
                { userStrategy.status === STATUS.LOADING ? (
                  <Spinner />
                ) : userStrategy.status === STATUS.ERROR ? (
                  <p>Désolé nous ne prennons pas encore en compte cette stratégie ou une erreur a été rencontrée.</p>
                ) : (
                  <AnalyseViewer />
                )}
              </div>
            )}
        </div>
    );
}

export default AssetsAnalyzer;
