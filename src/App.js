import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import Waitress from "./components/Waitress";
import Kitchen from "./components/Kitchen";
import Name from "./components/Name";
/* import Pruebasfirebase from './components/pruebasfirebase'; */

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Navigation} />
          {/*         <Route path="/inicio" component={Name} /> */}
          <Route exact path="/tomar-orden" component={Waitress} />
          <Route path="/cocina" component={Kitchen} />
          {/* <Pruebasfirebase></Pruebasfirebase> */}
        </div>
      </Router>
    );
  }
}

export default App;
