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
            const array = snapshotToArray(snap)
            this.setState({
                order: array
            })
        });
    }

    
    render() {
       //console.log(this.state.order)
        if (Array.isArray(this.state.order)) {
            
            return (
                <section> { 
                    this.state.order.map((orderItem, i) => 
                    <div class="card" >
                        {orderItem[0].orden.map((iitem, i) =>
                        <p> {iitem.item}</p>)
                        }
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