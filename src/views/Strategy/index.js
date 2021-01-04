import React from 'react';
import AssetsSelector from "../../containers/AssetsSelector";
import AssetsAnalyzer from "../../containers/AssetsAnalyzer";
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
