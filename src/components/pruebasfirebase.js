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
           //READ
        const dbRef = firebase.database().ref();
        const speedRef = dbRef.child('morningMenu');
        speedRef.on('value', snap =>{
            this.setState({
                speed: snap.val()
            })
        });

        //CREATE
        const dbRefOrder = firebase.database().ref();
        const orderRef = dbRefOrder.child('pruebasFirebase');
        orderRef.set([
            {
             date_of_birth: "JunDSe 23, 1912",
             full_name: "44444"
           },
            {
             date_of_birth: "December 9, 1906",
             full_name: "77777"
           }
       ]);
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