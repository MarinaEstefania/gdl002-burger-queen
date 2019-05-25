import React, { Component } from 'react';
import SendToKitchen from './SendToKitchen'


class Ticket extends Component {
    render(props) {
            const newOrder = this.props.order
            console.log(newOrder)
            const newTicket = 
            newOrder.map(order =>
            
            <ul key={order.key} className="list-group">
                <li key={order.key} className="list-group-item">
                    <span key={order.key}>1</span>
                    {order.item}   
                    ${order.price}
                    <button key={order.key}>x</button>
                    <button key={order.key}>+</button>
                    <button key={order.key}>-</button>
                </li>
            </ul>)
           
        return (
            <div>
                { newTicket}
                <SendToKitchen SendToKitchen={this.props.order}/>
            </div>

        )
    }

}


export default Ticket