import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navbar'
import ButtonFood from './components/ButtonFood'



const App = () => {
  return (
    <div>
      <Navigation title="Desayuno" />
      <section className='orderSection'>
        <section className='food-optionSection'>
          <ButtonFood className='btn-info ' title="Café Americano" />
          <ButtonFood className='btn-info ' title="Café con Leche" />
          <ButtonFood className='btn-info ' title="Jugo de frutas natural" />
          <ButtonFood className='btn-primary ' title="Sandwich de jamón y queso" />
        </section>
        <section>
          segunda seccion
        </section>
      </section>
    </div>
  )
}

export default App;
