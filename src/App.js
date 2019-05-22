import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar'
import MorningMenu from './components/MorningMenu'
import DinnerMenu from './components/DinnerMenu'
import Order from './components/Order'

class App extends Component {
  state = {

  }

  render() {

    return (
      <Router>
        <div>
          <Route path="/" component={Navigation} />
          <Route path="/MenuDesayuno" exact strict component={MorningMenu} />
          <Route path="/MenuComida" exact strict component={DinnerMenu} />
          <Route path="/MenuDesayuno" exact strict component={Order} />
          <Route path="/MenuComida" exact strict component={Order} />

        </div>
      </Router>
    )
  }
}


export default App;
