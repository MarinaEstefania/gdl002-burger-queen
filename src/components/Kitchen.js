import React, { Component } from 'react';
import firebase from './Firebase/firebase';
import './style/style.css';

class Kitchen extends Component {
    constructor() {
        super();
        this.state = {
            order: '',

        }
    }

    componentDidMount() {
        function snapshotToArray(snapshot) {
            var returnArr = [];

            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item.key = childSnapshot.key;

                returnArr.push(item);
            });

            return returnArr;
        };

        const dbRefOrder = firebase.database().ref();
        const orderRef = dbRefOrder.child('order');
        orderRef.on('value', snap => {
            const OrdersLikeArray = snapshotToArray(snap)
            this.setState({
                order: OrdersLikeArray
            })
        });
    }

    delete(key) {
        const dbRefOrder = firebase.database().ref();
        const orderRef = dbRefOrder.child('order').child(key);
        orderRef.remove()
    }

    render() {
   
        if (Array.isArray(this.state.order)) {

            /*        this.state.order.map(item=>{
            
                    console.log(item.key)}) */
            return (
                <section className="row "> {
                    this.state.order.map((orders, i) =>
                        <div className="card text-white bg-primary mb-3 kitchen-order" >
                            <div className="card-header">  <h5 class="card-title">Orden no. {i+1}</h5> <h6>{orders[0].date}</h6> mesero: <h6>{orders[0].waitressName}</h6></div>
                            <div class="card-body">
                            {orders[0].orden.map((items, i) =>

                                <h5 className="card-text"> {items.item}
                                </h5>)
                            }
                            <button className="btn-terminado btn btn-secondary"
                                onClick={() => this.delete(orders.key)}>
                                ¡Orden Lista!
                        </button></div>
                        </div>)
                } </section>
            )
        }
        return (
            'Loading...'
        )
    }
}

export default Kitchen;