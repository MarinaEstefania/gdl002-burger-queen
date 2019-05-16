import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navbar'
import ButtonFood from './components/ButtonFood'
import Order from './components/Order'
import { morningMenu } from './morningMenu.json';

const App = () => {
  return (
    <div>
      <Navigation title="Desayuno" />
      <section className='optionsSection'>
        <section className='food-optionSection'>
          <ButtonFood className='btn-info' alt={morningMenu.item} />
        </section>
        <section className='order-section'>
          <ul className="list-group">
            <li className="list-group-item">
              <Order/>
              <Order/>
            </li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default App;
