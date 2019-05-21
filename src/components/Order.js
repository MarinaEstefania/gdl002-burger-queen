import React, { Component } from 'react';
import './style.css'
import { database } from './Firebase/firebase';



class ButtonFood extends Component {
    constructor() {
        super();
        this.state = {
            order: ''
        }
    }


    componentDidMount() {
        const dbRefOrder = database.ref();
        const orderRef = dbRefOrder.child('Order');
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
                    this.state.order.map((orderItem,i) => 
                    <p
                    key={i}                   
                    >   
                        {orderItem.full_name}, {orderItem.date_of_birth}
                    </p>)
                } </section>                
            )
        }
        return (
          'Loading...'
        )
    }
}

export default ButtonFood;
