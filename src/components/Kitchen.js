import React, { Component } from 'react';
import './style.css'
import firebase from './Firebase/firebase';



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
        
            snapshot.forEach(function(childSnapshot) {
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

    
    render() {
       //console.log(this.state.order)
        if (Array.isArray(this.state.order)) {
            
            return (
                <section> { 
                    this.state.order.map((orders, i) => 
                    <div class="card" > 
                        <h5 class="card-title">Orden no. {i}</h5>
                        {orders[0].orden.map((items, i) =>
                        <p> {items.item}</p>)
                        }
                        <button>¡Terminado!</button>
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