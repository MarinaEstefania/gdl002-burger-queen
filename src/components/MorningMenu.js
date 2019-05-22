import React, { Component } from 'react';
import './style.css'
/* import Order from './Order' */
import { database } from './Firebase/firebase';



class MorningMenu extends Component {
    constructor() {
        super();
        this.state = {
            mMenu: '',
            order: []
        }
    }

    addItem () {
        const {order} = this.state
        alert('hi')
        /* const {order} = this.state.order
        const newItem = "test";
        this.setState({
            order: [...this.state.order, newItem]
        })  */
    };


    componentDidMount() {
        const dbRef = database.ref();
        const mMenuRef = dbRef.child('morningMenu');
        mMenuRef.on('value', snap => {
            this.setState({
                mMenu: snap.val()
            })
        });
        
    }

   /*   componentWillMount () {
        const dbRefOrder = database.ref();
        const orderRef = dbRefOrder.child('Order');
        orderRef.set([
            {
             date_of_birth: "JunDSe 23, 1912",
             full_name: "comida"
           },
            {
             date_of_birth: "December 9, 1906",
             full_name: "bebida"
           }
       ]);

    }  */



    render() {
        if (Array.isArray(this.state.mMenu)) {
            
            return (
                <section> {
                    this.state.mMenu.map(menuItem => 
                    <button 
                    type="submit"
                    key={menuItem.id}
                    onClick={this.addItem}>
                        {menuItem.item}
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
