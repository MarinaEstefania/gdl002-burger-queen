import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar'
import Waitress from './components/Waitress'
import DinnerMenu from './components/DinnerMenu'
import Kitchen from './components/Kitchen';
import Pruebasfirebase from './components/pruebasfirebase';

class App extends Component {
  state = {

  }

  render() {

    return (
      <Router>
        <div>
          <h1>Burger Queen</h1>
          <Route path="/" component={Navigation} />
          <Route path="/Meseros" exact strict component={Waitress} />
          <Route path="/MenuComida" exact strict component={DinnerMenu} />
          <Route path="/Cocina" exact strict component={Kitchen} />
  {/*         <Route path="/MenuDesayuno" exact strict component={Ticket} />
          <Route path="/MenuComida" exact strict component={Ticket} /> */}
{/* <Pruebasfirebase></Pruebasfirebase> */}
        </div>
      </Router>
    )
  }
}


export default App;
