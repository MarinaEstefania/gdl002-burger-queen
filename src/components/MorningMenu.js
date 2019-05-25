import React, { Component } from 'react';
import './style.css'
import firebase from './Firebase/firebase';
/* import ButtonFood from '-./ButtonFood' */
import Ticket from './Ticket'
import SendToKitchen from './SendToKitchen'


class MorningMenu extends Component {
    constructor() {
        super();
        this.state = {
            mMenu: [],
            order: []
        }
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        const mMenuRef = dbRef.child('morningMenu');
        mMenuRef.on('value', snap => {
            this.setState({
                mMenu: snap.val()
            })
        });
    }

    submit(item, price) {
        const newItem = {
            item: item,
            price: price
        }
        this.setState({
            order: [...this.state.order, newItem]
        })
    }
    
    render() {
        console.log(this.state.order)
        const mMenuBtn = this.state.mMenu.map(menuItem => {
            return (
                <button
                key={menuItem.id}
                onClick={() => {this.submit(menuItem.item, menuItem.price);}}
                type="submit">
                    {menuItem.item}
                    {/* <img src={menuItem.img}></img> */}
                </button>
            )
        });
        return (
            <div>
               {/*  <ButtonFood
                key= {menuItem.id}
                action={() => {this.submit(menuItem.item, menuItem.price);}}>
                
                </ButtonFood> */}
                <div>{mMenuBtn}</div>
                 <Ticket order={this.state.order}></Ticket>
            </div>
        )
    }
}

export default MorningMenu;
