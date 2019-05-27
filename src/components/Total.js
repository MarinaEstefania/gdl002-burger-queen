import React, { Component } from 'react';


// stateful (class)
// stateless (arrow function)
class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        }
    }
    total(price) {
        console.log(price)
        return price

    }

    render() {
console.log('order: ' + this.props.order)
         this.props.order.map(item => {
             console.log('item: ' + item)
            console.log('item.price: ' + item.price)
           /* return ( this.total( item.price)) */
        });
        const totalAmount = this.total
        //console.log(this.props.order)
        
        const total = 'hola'
        return (
            <div>
                <h3 >Total: {this.state.totalCount} </h3>
            </div>

        )
    }

    
}


export default  Total