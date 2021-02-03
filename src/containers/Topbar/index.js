import React from "react";
import {Link} from "react-router-dom";
import './Topbar.style.scss'

function Topbar() {
  return (
    <header>
      <div className="logo-and-title">
        <Link to="/">
          <img  alt='Bourse Academy' src='https://us.allianzgi.com/-/media/allianzgi/na/us/images/1920x980-momentum-driven-investing-hero.jpg?w=1152&hash=555965964A7131396E7A5885525C8D39'/>
        </Link>
        <h1>Momentum Analyzer</h1>
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
