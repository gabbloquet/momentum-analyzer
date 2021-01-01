import React from 'react';
import AssetsSelector from "../containers/AssetsSelector";
import AssetsAnalyzer from "../containers/AssetsAnalyzer";
import Topbar from '../containers/Topbar';
import './Homepage.scss';

function Homepage() {
    return (
        <div className="App">
            <Topbar />
            <section className='body'>
                <h2>Stratégie & Tickers</h2>
                <AssetsSelector />

                <h2>Analyse</h2>
                <AssetsAnalyzer />
                <p>Attention, il ne s'agit pas de conseils d'achats. Cet outil te permet d'avoir une lecture rapide des momentums.</p>

            </section>
        </div>
    );
}

export default Homepage;
