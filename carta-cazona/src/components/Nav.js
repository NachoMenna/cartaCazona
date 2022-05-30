import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <nav class="navbar fixed-top">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img
            src="images/cazona-logo.png"
            alt="logo-cazona"
            id="logo-cazona"
          />
        </Link>
        <div className="boton">
          <button
            class="navbar-toggler navbar-dark-disabled-color"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              CAZONA BAR | RESTO
            </h5>
            <button
              type="button"
              class="btn-close text-reset "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="boton-menu"
            />
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://g.page/cazonaresto?share">
                  Ubicación
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.instagram.com/cazonabarresto/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
