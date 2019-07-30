import React, { Component } from 'react';
import SendToKitchen from './SendToKitchen'
import Total from './Total'


class Ticket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waitressName: ''
        }
    }
    putWaitressName = (event) => {
        event.preventDefault()

        //console.log(event.target.waitressNameInput)
        let value = event.target.value
        this.setState({
            waitressName: value
        })
    }
    render() {
        const waitressName = this.state.waitressName
      //  console.log(waitressName)
        const newOrder = this.props.order
        const newTicket =
            newOrder.map(order =>

                <table className="list-group">
                    <tr className="list-group-item d-flex justify-content-between align-items-center">
                       <td className="badge badge-primary badge-pill order-amount"> {order.amount+1}</td>
                       <td className="td-item">{order.item}</td> 
                        <td className="order-price badge badge-secundary badge-pill"> ${order.price}.00</td>
                        <td className="order-delete" ><button type="button" class="btn btn-primary btn-sm btn-danger"
                            onClick={() => this.props.deleteItem(order.id)}>X</button></td>
                    </tr>
                </table>)
        return (
            <div >
                <form>
                    <p href="#" className="list-group-item list-group-item-action active">
                        Mesero:
                        <input className="name" type='text'
                            placeholder='Nombre'
                            waitressNameInput={waitressName}
                            onChange={this.putWaitressName} />
                    </p>

                </form>
                {newTicket}
                <Total order={this.props.order} />
                <SendToKitchen
                    SendToKitchen={this.props.order}
                    waitressName={waitressName}
                    eraseOrder={this.props.eraseOrder} />
            </div>

        )
    }

}


export default Ticket