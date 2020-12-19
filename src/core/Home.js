import React from "react";
import imgGirlMoonlight from "../img/girl-moonlight.jpg";

export default function Home() {
  return (
    <div className="body__home">
      <nav>
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a href="#" className="nav__menu-item nav__menu-item--logo">
              animetomanga
            </a>
          </li>
          <li className="nav__menu-item">
            <a href="#" className="nav__menu-item--link">
              Lists
            </a>
          </li>
          <li className="nav__menu-item">
            <a href="#" className="nav__menu-item--link">
              Reviews
            </a>
          </li>
          <li className="nav__menu-item">
            <input
              className="nav__menu-item--search-input"
              placeholder="Type and hit Enter"
            />
            <a href="#" className="nav__menu-item--search-link">
              <i className="fas fa-search fa-sm"></i>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="section-posts">
          <div className="card">
            <a href="lists/mustSeeAnimeByGenre" className="card__link">
              <img src={imgGirlMoonlight} alt="Poster" className="card__img" />
            </a>
            <h3 className="h3 card__text">
              20 anime for beginners by genre. You cannot go wrong with these!
            </h3>
          </div>

          <div className="card">
            <a href="" className="card__link">
              <img src={imgGirlMoonlight} alt="Poster" className="card__img" />
            </a>
            <h3 className="h3 card__text">
              20 anime for beginners by genre. You cannot go wrong with these!
            </h3>
          </div>

          <div className="card">
            <a href="" className="card__link">
              <img src={imgGirlMoonlight} alt="Poster" className="card__img" />
            </a>
            <h3 className="h3 card__text">
              20 anime for beginners by genre. You cannot go wrong with these!
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}
