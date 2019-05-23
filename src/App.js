import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar'
import MorningMenu from './components/MorningMenu'
import DinnerMenu from './components/DinnerMenu'
/* import Order from './components/Order' */
import Kitchen from './components/Kitchen';
import Ticket from './components/Ticket';

class App extends Component {
  state = {

  }

  render() {

    return (
      <Router>
        <div>
          <h1>Burger Queen</h1>
          <Route path="/" component={Navigation} />
          <Route path="/MenuDesayuno" exact strict component={MorningMenu} />
          <Route path="/MenuComida" exact strict component={DinnerMenu} />
          <Route path="/Cocina" exact strict component={Kitchen} />
  {/*         <Route path="/MenuDesayuno" exact strict component={Ticket} />
          <Route path="/MenuComida" exact strict component={Ticket} /> */}

        </div>
      </Router>
    )
  }
}


export default App;
