import React, { Component } from 'react';
import SendToKitchen from './SendToKitchen'
import DeleteTicketItem from './DeleteTicketItem'
import Total from './Total'


class Ticket extends Component {

    /* delete = (del) => {
        console.log(del)
        console.log(this.props.order)
        this.setState([])
    } */
 
    render() {
      const newOrder = this.props.order
        const newTicket =
            newOrder.map(order =>
                
                <ul className="list-group">
                    <li className="list-group-item">
                        <span>1</span>
                        {order.item}
                        ${order.price}
                        <button onClick={() => this.props.handleSort(order.id)}>Eliminar</button>
                    </li>
                </ul>)
        return (
            <div>
                {newTicket}
          {/*       <Total order = {this.props.order}/> */}
                <SendToKitchen SendToKitchen={this.props.order} />
            </div>

        )
    }

}


export default Ticket