import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadAnalyse, setAnalyseLoading} from '../../store/strategy/strategySlice';
import {isAnEmptyObject} from "../../utils/functions";
import {STATUS} from "../../utils/status";
import Spinner from "../../components/Spinner";
import AnalyseViewer from "./AnalyseViewer";

const AssetsAnalyzer = () => {
    const dispatch = useDispatch();
    const analyse = useSelector(state => state.userStrategy.analyse);
    const tickers = useSelector(state => state.userStrategy.tickers);

    const handleLaunchAnalyse = () => {
      dispatch(setAnalyseLoading());
      dispatch(loadAnalyse());
    }

    return (
        <div className="assets-analyzer">
            {isAnEmptyObject(tickers) ? (
                <p>Veuillez selectionner une stratégie et saisir les tickers.</p>
            ) : isAnEmptyObject(analyse) ? (
                <button onClick={() => handleLaunchAnalyse()}>Lancer l'analyse</button>
            ) : (
              <>
                { analyse === STATUS.LOADING ? (
                  <Spinner />
                ) : analyse === STATUS.ERROR ? (
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
