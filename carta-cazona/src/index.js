import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Menu from "./components/categories/Menu";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Postres from "./components/categories/Postres";
import Cervezas from "./components/categories/Cervezas";
import BebidasSinAlcohol from "./components/categories/BebidasSinAlcohol";
import Vinos from "./components/categories/Vinos";
import Tragos from "./components/categories/Tragos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      <Route path="postres" element={<Postres />} />
      <Route path="cervezas" element={<Cervezas />} />
      <Route path="bebidasSinAlcohol" element={<BebidasSinAlcohol />} />
      <Route path="vinos" element={<Vinos />} />
      <Route path="tragos" element={<Tragos />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
