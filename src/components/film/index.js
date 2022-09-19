import React from "react";
import { ListOfFilms } from "../data/ListOfFilms";
import "./film.css";
function Film() {
  return (
    <div className="container">
      {ListOfFilms.map((film, index) => (
        <div className="card" key={index}>
          <div className="item">
            <div className="avatarImg">
              <img src={film.image} alt={film.image} />
            </div>
            
          </div><div className="advisor" style={{ justifyContent: "flex-end" }}>
              <div className="profile">
                <span className="name">{film.title}</span>
                <div className='year'>
                  <span className="info">{film.year}</span>
                </div>
              </div>
            </div>
          <div>
            <div className="skills">
              <span className="info" key={index}>
                {film.nation}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Film;
