import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadAnalyse } from '../../store/strategy/strategySlice';
import {isAnEmptyObject} from "../../utils/functions";

const AssetsAnalyzer = () => {
    const dispatch = useDispatch();
    const analyse = useSelector(state => state.userStrategy.analyse);
    const tickers = useSelector(state => state.userStrategy.tickers);

    return (
        <div className="assets-analyzer">
            {isAnEmptyObject(tickers) ? (
                <p>Veuillez selectionner une stratégie et saisir les tickers.</p>
            ) : isAnEmptyObject(analyse) ? (
                <button onClick={() => dispatch(loadAnalyse())}>Lancer l'analyse</button>
            ) : (
                <p>Cliquez sur le boutton pour lancer l'analyse</p>
            )}
        </div>
    );
}

export default AssetsAnalyzer;
