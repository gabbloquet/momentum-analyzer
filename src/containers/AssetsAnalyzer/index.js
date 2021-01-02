import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAnalyseLoading} from '../../store/strategy/strategySlice';
import {isAnEmptyObject} from "../../utils/functions";
import {STATUS} from "../../utils/status";
import Spinner from "../../components/Spinner";
import AnalyseViewer from "./AnalyseViewer";
import {getAnalyseForDMA} from "../../services/domain/analyse";

const AssetsAnalyzer = () => {
    const dispatch = useDispatch();
    const userStrategy = useSelector(state => state.userStrategy);

    const handleLaunchAnalyse = () => {
      dispatch(setAnalyseLoading());
      dispatch(getAnalyseForDMA(userStrategy));
    }

    return (
        <div className="assets-analyzer">
            {isAnEmptyObject(userStrategy.tickers) ? (
                <p>Veuillez selectionner une stratégie et saisir les tickers.</p>
            ) : isAnEmptyObject(userStrategy.analyse) ? (
                <button onClick={() => handleLaunchAnalyse()}>Lancer l'analyse</button>
            ) : (
              <>
                { userStrategy.analyse === STATUS.LOADING ? (
                  <Spinner />
                ) : userStrategy.analyse === STATUS.ERROR ? (
                  <p>Désolé nous ne prennons pas encore en compte cette stratégie ou une erreur a été rencontrée.</p>
                ) : (
                  <AnalyseViewer />
                )}
              </>
            )}
        </div>
    );
}

export default AssetsAnalyzer;
