import React from "react";
import {Link} from "react-router-dom";
import './Topbar.style.scss'

function Topbar() {
  return (
    <header>
      <div className="logo-and-title">
        <Link to="/">
          <img  alt='TKL Academy' src='https://www.tklacademy.com/assets/images/logo.png'/>
        </Link>
        <h1>TKL DMA</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/"><b>Home</b></Link>
          </li>
          <li>
            <Link to="/research"><b>Ticker analyse</b></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
