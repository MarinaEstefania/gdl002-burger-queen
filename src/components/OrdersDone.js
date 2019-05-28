import React,{ Component } from 'react';
import firebase from './Firebase/firebase';

class OrdersDone extends Component {
    constructor(props){
        super(props)
        this.state = {
            ordersAtKitchen: this.props.OrdersAtKitchen
    }
}
   /*   newState(){
        this.setState({
        
    });
}  */
    render(){
        console.log(this.state.ordersAtKitchen)
        return(
            <div>¡Terminado!</div>
        )
    }
}

export default OrdersDone