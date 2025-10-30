import React from "react";
import "./home.css";

function HomePage() {
  return (
    <div className="navBar">
      
        <div className="left">
            <div id="navLogo">
                <img src="/Watchr_LOGO.png" alt="Watchr Logo" />
            </div>

            <div id="menu">
                <button id="dropbtn"><img src="/hamburger-icon.png"></img><span> Menu</span></button>
                <div id="dropdown-content">
                    <a href="/">Home</a>
                    <a href="/movies">Movies</a>
                    <a href="/watchlist" id="watchlistOption">Watchlist</a>
                </div>
            </div>
        </div>

        <div className="middle">
            <form id="searchBar" method="get" action="/movie.html">
                <input
                    type="search"
                    placeholder="Search Movies"
                    id="search-input"
                    name="q"
                />
            </form>
        </div>

        <div className="right">
            <div id="log">
                <button id="logBtn"><span>LOG </span><img src="/log-icon.png" ></img></button>
            </div>
            <div id="profile">
                
            </div>
        </div>

        
    </div>
  );
}
export default HomePage;
 
