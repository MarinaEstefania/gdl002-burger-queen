import React, {Component} from 'react';
/* import firebase from 'firebase';
import {database} from './Firebase/firebase'; */

class Order extends Component{
  
    state = {
            order: [1]
    }
    

    newOrder =()=> {
this.setState ( {
    order: '2'
})
    }


    render(){
        return(
            <div >
                
                <h1>Order</h1>
                <button onClick={this.newOrder}
                >+
                </button>
                <p>{this.state.order}</p>
                <button>-</button>
              </div>
        )
    }
}


export default Order;