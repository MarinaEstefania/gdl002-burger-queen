import React, { Component } from 'react';
import firebase from './Firebase/firebase';

// stateful (class)
// stateless (arrow function)
class SendToKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed:[]
        }
        this.sendOrder = this.sendOrder.bind(this)
    }


    sendOrder(){
        //READ
     const dbRef = firebase.database().ref();
     const speedRef = dbRef.child('morningMenu')
     speedRef.on('value', snap =>{
         this.setState({
             speed: snap.val()
         })
     });

     //CREATE
     const dbRefOrder = firebase.database().ref();
     const orderRef = dbRefOrder.child('order'); 
     orderRef.push([
         {
          orden: this.props.SendToKitchen,
          date: new Date()
        }
    ]);
 }
    render() {
        return (
            <div>
                <button onClick={this.sendOrder}>Enviar a Cocina</button>
            </div>

        )
    }

    
}


export default SendToKitchen