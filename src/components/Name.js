import React, {Component} from 'react';
import './style/style.css';
import './style/personalStyle.css';

class Name extends Component{
    render(){
        return(
            <div className="inicio" >
                <h3>Bienvenid@,</h3>
                <h5>Ingresa tu nombre</h5>
              <input type="text" className=" inputName"  placeholder="Nombre"></input>
              <button type="button" className="btn btn-primary">Enviar</button>
              {/* <img src="./menuImages/logo.jpg"></img> */}
              </div>
        )
    }
}

export default Name;