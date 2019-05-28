import React, { Component } from 'react';
import SendToKitchen from './SendToKitchen'
import Total from './Total'


class Ticket extends Component {

    render() {
        const newOrder = this.props.order
        const newTicket =
            newOrder.map(order =>

                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {/* <span>1 </span> */}
                        <span  class="badge badge-primary badge-pill"> ${order.price}.00</span>
                        {order.item}
                        <button type="button" class="btn btn-primary btn-sm btn-danger"
                            onClick={() => this.props.deleteItem(order.id)}>X</button>
                    </li>
                </ul>)
        return (
            <div >
                <a href="#" className="list-group-item list-group-item-action active">
                    Mesero: Carlos </a>
                {newTicket}
                <Total order={this.props.order} />
                <SendToKitchen SendToKitchen={this.props.order} />
            </div>

        )
    }

}


export default Ticket