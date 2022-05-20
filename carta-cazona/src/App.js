import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Inicio from "./components/Inicio";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="holder">
        <Inicio />
      </div>
    </div>
  );
}

export default App;
