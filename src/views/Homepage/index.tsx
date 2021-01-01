import React from 'react';
import AssetsSelector from "../../containers/AssetsSelector";
import AssetsAnalyzer from "../../containers/AssetsAnalyzer";
import Topbar from '../../containers/Topbar';
import Footer from '../../containers/Footer';
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
            </section>
            <Footer />
        </div>
    );
}

export default Homepage;
