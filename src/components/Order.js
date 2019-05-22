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
                    this.state.order.map(orderItem =>
                        <ul key={orderItem.full_name} className="list-group">
                            <li className="list-group-item"><span >1</span>{orderItem.full_name}  <button>x</button></li>
                        </ul>
                    )} </section>
            )
        }
        return (
            'Cargando Orden ...'
        )
    }
}

export default ButtonFood;
