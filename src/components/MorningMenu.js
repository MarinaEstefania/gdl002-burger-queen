import React, { Component } from 'react';
import './style.css'
import { database } from './Firebase/firebase';



class MorningMenu extends Component {
    constructor() {
        super();
        this.state = {
            mMenu: '',
            order: []
        }
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        const dbRef = database.ref();
        const mMenuRef = dbRef.child('morningMenu');
        mMenuRef.on('value', snap => {
            this.setState({
                mMenu: snap.val()
            })
        });

        /* const dbRefOrder = database.ref();
        const orderRef = dbRefOrder.child('order');
        orderRef.set([
            {
             date_of_birth: "JunDSe 23, 1912",
             full_name: "44444"
           },
            {
             date_of_birth: "December 9, 1906",
             full_name: "77777"
           }
       ]);*/
    }

    submit(item, price) {
        console.log(item, price)

        const newItem = {
            item: item,
            price: price
        }
        this.setState({
            order: [...this.state.order, newItem]
        })
    }


    render() {
        if (Array.isArray(this.state.mMenu)) {

            return (
                <section> {
                    
                    this.state.mMenu.map(menuItem =>
                        <button
                            
                            key={menuItem.id}
                            onClick={() => {
                                this.submit(menuItem.item, menuItem.price);
                            }} type="submit" >
                            <p>     {this.state.order.map(order =>
                                <div>{order.item}</div>)}</p>
                            {menuItem.item}    {/* <img src={menuItem.img}></img> */}
                        </button>)

                } </section>
            )
        }
        return (
            'Loading...'
        )
    }
}

export default MorningMenu;
