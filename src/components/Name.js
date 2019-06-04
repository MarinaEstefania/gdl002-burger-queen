import React, { Component } from 'react';
import './style/style.css';
import './style/personalStyle.css';

class Name extends Component {
    constructor(props){
        super(props)
        this.state={
            fullName: ""
        }
    }
    submitName = (event) =>{
        event.preventDefault()
    }

    inputCange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.targer.value
        })
    }

    render() {
            const {fullName} = this.state
        return (
            <div className="inicio" >
                <h3>Bienvenid@,</h3>
                <h5>Ingresa tu nombre</h5>
                <p>{fullName} </p>
                <form onSubmit={this.submitName}>
                    <input type="text" className=" inputName" placeholder="Nombre" name='fullName' onChange={this.inputCange}></input>
                    <button type="button" className="btn btn-primary">Enviar</button>
                    {/*  <img src={this.img}/> */}
                </form>
            </div>
        )
    }
}

export default Name;