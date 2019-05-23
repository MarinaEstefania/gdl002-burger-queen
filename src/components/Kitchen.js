import React, { Component } from 'react';
import './style.css'
import firebase from './Firebase/firebase';



class Kitchen extends Component {
    constructor() {
        super();
        this.state = {
            order: ''
        }
    }

    componentDidMount() {
        const dbRefOrder = firebase.database().ref();
        const orderRef = dbRefOrder.child('order');
        orderRef.on('value', snap => {
            this.setState({
                order: snap.val()
            })
        });
    }

    render() {
        if (Array.isArray(this.state.order)) {
            
            return (
                <section> {
                    this.state.order.map((orderItem, i) => 
                    <p key={i}>
                        {orderItem.full_name}
                    </p>)
                } </section>                
            )
        }
        return (
          'Loading...'
        )
    }
}

export default Kitchen;