import './App.css';
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Inicio from './components/Inicio';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact component={Inicio} />
          <Route path="/menu" exact component={Menu} />
          {/* <Route path="/postres" exact component={Postres} /> */}
          {/* <Route path="/bebidasSinAlcohol" exact component={BebidasSinAlcohol} /> */}
          {/* <Route path="/cervezas" exact component={Cervezas} /> */}
          {/* <Route path="/vinos" exact component={Vinos} /> */}
          {/* <Route path="/tragos" exact component={Tragos} /> */}
        </Routes>
      </Router>
      <Nav />
      <div className="holder">

        <Inicio />
      </div>
    </div>
  );
}

export default App;
