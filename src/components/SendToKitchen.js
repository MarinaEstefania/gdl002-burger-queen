import React, { Component } from 'react';
import firebase from './Firebase/firebase';

class SendToKitchen extends Component {
    constructor(props) {
        super(props);
        this.sendOrder = this.sendOrder.bind(this)
    }

    sendOrder() {
        const dbRefOrder = firebase.database().ref();
        const orderRef = dbRefOrder.child('order');
        orderRef.push([
            {
                orden: this.props.SendToKitchen,
              /*   date: new Date().getTime()  */
            }
        ]);
    }
    render() {
        return (
            <div>
                <button  type="button" className="btn btn-warning btn-send-kitchen"
                 onClick={this.sendOrder}>
                     Enviar a Cocina
                </button>
            </div>

        )
    }
}


export default SendToKitchen