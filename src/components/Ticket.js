import React, { Component } from 'react';
import SendToKitchen from './SendToKitchen'


class Ticket extends Component {
    render(props) {
            const newOrder = {...props}
            const newTicket = 
            this.props.order.map(order =>
            
            <ul className="list-group">
                <li className="list-group-item">
                    <span>1</span>
                    {order.item}   
                    ${order.price}
                    <button>x</button>
                    <button>+</button>
                    <button>-</button>
                </li>
            </ul>)
        return (
            <div>
                {newTicket}
                <SendToKitchen order={newOrder}/>
            </div>

        )
    }

}


export default Ticket