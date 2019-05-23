import React, {Component} from 'react';
import firebase from 'firebase';
import {database} from './Firebase/firebase';

class Pruebasfirebase extends Component{
    constructor (){
        super()
        this.state = {
            speed: 'prueba firbease'
        }
    }
       componentDidMount(){
        const dbRef = database.ref();
        const speedRef = dbRef.child('morningMenu');
        speedRef.on('value', snap =>{
            this.setState({
                speed: snap.val()
            })
        });
    }

    render(){
        if (Array.isArray(this.state.speed)) {
            return(
                <div >
                    <h1>{this.state.speed.map(menuItem => <p>{menuItem.item}</p>)}</h1>
                  </div>
            )
        }
        return "Loading..";

    }
}

export default Pruebasfirebase;