import React from 'react';
import { handleJSONResponse } from '../../utils/fetch';

const AssetsAnalyzer = () => {

    const handleClick = () => {
        fetch("http://api.marketstack.com/v1/eod?access_key=9764b11480123a4971883a8c88a8132f&symbols=SCZ&date_from=2020-12-01&date_to=2020-12-12", {
            "method": "GET"
        })
        .then(handleJSONResponse)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div className="assets-analyzer">
            <button onClick={() => handleClick()}>Charger la data</button>
        </div>
    );
}

export default AssetsAnalyzer;
