import React, { Component } from "react";
import "./navigation.css";
export default class Navigation extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="headerLogo">FILMS</div>
          <div className="navbar">
            <nav>
              <ul className="nav-cont">
                <li>
                  <a className="active" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#review">Movies</a>
                </li>
                <li>
                  <a href="#booking">TV shows</a>
                </li>
                <li>
                  <a className="contact" href="#Contact">
                  Trending
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
