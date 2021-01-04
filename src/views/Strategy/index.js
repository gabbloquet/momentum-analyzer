import React from 'react';
import AssetsSelector from "../../containers/AssetsSelector";
import AssetsAnalyzer from "../../containers/AssetsAnalyzer";
import Footer from '../../containers/Footer';
import './Strategy.scss';

function Strategy() {
    return (
        <div className="App">
            <section className='body'>
                <h2>Stratégie & Tickers</h2>
                <AssetsSelector />

                <h2>Analyse</h2>
                <AssetsAnalyzer />
            </section>
            <Footer />
        </div>
    );
}

export default Strategy;
