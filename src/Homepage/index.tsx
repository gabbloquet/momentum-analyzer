import React from 'react';
import AssetsSelector from "../containers/AssetsSelector";
import AssetsAnalyzer from "../containers/AssetsAnalyzer";
import './Homepage.scss';

function Homepage() {
    return (
        <div className="App">
            <header>
                <div className="logo-and-title">
                    <img  alt='TKL Academy' src='https://www.tklacademy.com/assets/images/logo.png'/>
                    <h1>TKL DMA</h1>
                </div>
                <div className="description">
                    <p><i>L'outil qui va t'aider à constuire ta liberté financière</i></p>
                </div>
            </header>
            <section>
                <h2>Les éléments de ma stratégies</h2>
                <AssetsSelector />

                <h2>Analyse des assets</h2>
                <AssetsAnalyzer />
            </section>
        </div>
    );
}

export default Homepage;
