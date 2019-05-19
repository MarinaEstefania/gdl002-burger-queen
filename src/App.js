import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navbar'
import ButtonFood from './components/ButtonFood'
import Order from './components/Order'
import { morningMenu } from './morningMenu.json';
import Pruebasfirebase from './components/pruebasfirebase';

class App extends Component{
  
  render () {
    return (
    <div>
      <Navigation title="Desayuno" />
      <section className='optionsSection'>

        <section className='food-optionSection'>
          <ButtonFood className='btn-info'/>
        </section>

        <section className='order-section'>
          <ul className="list-group">
            <li className="list-group-item">
              <Order/>
              <Pruebasfirebase/>
            </li>
          </ul>
        </section>

      </section>
    </div>

    )
  }
}


export default App;
