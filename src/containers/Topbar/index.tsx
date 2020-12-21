import React from "react";

function Topbar() {
    return (
        <header>
            <div className="logo-and-title">
                <img  alt='TKL Academy' src='https://www.tklacademy.com/assets/images/logo.png'/>
                <h1>TKL DMA</h1>
            </div>
            <div className="description">
                <p><i>L'outil qui va t'aider à constuire ta liberté financière</i></p>
            </div>
        </header>
    );
}

export default Topbar;
