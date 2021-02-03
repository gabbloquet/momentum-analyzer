import React from 'react';
import AssetsSelector from "../../containers/Strategy/AssetsSelector";
import AssetsAnalyzer from "../../containers/Strategy/AssetsAnalyzer";
import Footer from '../../containers/Footer';

function Strategy() {
    return (
        <>
            <section className='content'>
                <h2>Stratégie & Tickers</h2>
                <AssetsSelector />

                <h2>Analyse</h2>
                <AssetsAnalyzer />
            </section>
            <Footer />
        </>
    );
}

export default Strategy;
