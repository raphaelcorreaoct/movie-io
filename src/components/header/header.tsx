import React from "react";
import "./header.scss";
import { CgSearch } from "react-icons/cg";

export default function header() {
  return (
    <header>
      <div className="wrapper">
        <div className="wrap-flex">
          <div className="logo">
            <a href="#">Movies.io</a>
          </div>
          <nav>
            <menu>
              <a href="#">Home</a>
              <a href="#">Movies</a>
              <a href="#">Animes</a>
            </menu>
          </nav>

          <form className="search">
            <button className="flex-center ">
              <CgSearch color="#fff" />
            </button>
            <input type="text" placeholder="Search" />
          </form>

          <div className="login-button flex-center">
            <button className="base-button link-button">Sign in</button>
            <button className="base-button primary-button">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}
