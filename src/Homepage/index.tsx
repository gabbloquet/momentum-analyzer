import React from 'react';
import AssetsSelector from "../containers/AssetsSelector";
import AssetsAnalyzer from "../containers/AssetsAnalyzer";
import Topbar from '../containers/Topbar';
import './Homepage.scss';

function Homepage() {
    return (
        <div className="App">
            <Topbar />
            <section>
                <h2>Les éléments de ma stratégie</h2>
                <AssetsSelector />

                <h2>Analyse des assets</h2>
                <AssetsAnalyzer />
            </section>
        </div>
    );
}

export default Homepage;
