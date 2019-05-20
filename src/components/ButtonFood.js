import React, { Component } from 'react';
import './style.css'
import { database } from './Firebase/firebase';



class ButtonFood extends Component {
    constructor() {
        super();
        this.state = {
            mMenu: '',
            order: ''
        }
    }


    componentDidMount() {
        const dbRef = database.ref();
        const mMenuRef = dbRef.child('morningMenu');
        mMenuRef.on('value', snap => {
            this.setState({
                mMenu: snap.val()
            })
        });

        const dbRefOrder = database.ref();
        const orderRef = dbRefOrder.child('order');
        orderRef.on('value', snap => {
            this.setState({
                order: snap.val()
            })
        });

    }


    writeOrder = () => {
        console.log('hol');
    };

    render() {
        if (Array.isArray(this.state.mMenu)) {
            return (
                <section> {
                    this.state.mMenu.map(menuItem => 
                    <button 
                    key={menuItem.id}
                    onClick={this.writeOrder}
                    >
                        {menuItem.item}
                    </button>)
                } </section>                
            )
        }
        return (
            "Loading..."
        )
    }
}

export default ButtonFood;
