import React from 'react';
import {useDispatch} from "react-redux";
import { loadAnalyse } from '../../store/strategy/strategySlice';

const AssetsAnalyzer = () => {
    const dispatch = useDispatch();
    return (
        <div className="assets-analyzer">
            <button onClick={() => dispatch(loadAnalyse())}>Lancer l'analyse</button>
        </div>
    );
}

export default AssetsAnalyzer;
