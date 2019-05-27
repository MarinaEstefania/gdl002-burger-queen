import React, { Component } from 'react';
import './style.css'
import firebase from './Firebase/firebase';
import Ticket from './Ticket'


class Waitress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuButtons: [],
            order: [],
            morning: 'morningMenu',
            dinner: 'dinnerMenu',
            menuSelected: 'morningMenu'
        }
        this.submitItem = this.submitItem.bind(this);
    }

    chooseMenu = (menu) => {
        if (menu == 'morningMenu') {
            this.setState({
                menuSelected: 'morningMenu'
            }, () => {
                const dbRef = firebase.database().ref();
                const menuRef = dbRef.child(this.state.menuSelected);
                menuRef.on('value', snap => {
                    this.setState({
                        menuButtons: snap.val()
                    })
                });
            })

        }
        else {
            this.setState({
                menuSelected: 'dinnerMenu'
            }, () => {
                const dbRef = firebase.database().ref();
                const menuRef = dbRef.child(this.state.menuSelected);
                menuRef.on('value', snap => {
                    this.setState({
                        menuButtons: snap.val()
                    })
                });
            })

        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        const menuRef = dbRef.child('morningMenu');
        menuRef.on('value', snap => {
            this.setState({
                menuButtons: snap.val()
            })
        });
    }

    submitItem(item, price, img, id) {
        const newItem = {
            item: item,
            price: price,
            img: img,
            id: id
        }
        this.setState({
            order: [...this.state.order, newItem]
        })
    }

    deleteItem = value => {
        let orderIndex = this.state.order.findIndex(item => {
            return item.id === value
        })
        if (orderIndex > -1) {
            this.setState({
                order: [...this.state.order.slice(0, orderIndex), ...this.state.order.slice(orderIndex + 1, this.state.order.length)]
            })
        }
    }

    render() {
        const menuBtn = this.state.menuButtons.map(menuItem => {
            return (
                <button
                    key={menuItem.id}
                    onClick={() => { this.submitItem(menuItem.item, menuItem.price, menuItem.img, menuItem.id); }}
                    type="submit">
                    {menuItem.item} WA
                    {/* <img src={menuItem.img}></img> */}
                </button>
            )
        });

        return (
            <div>
                <section className="choose-menu">
                    <button onClick={() => this.chooseMenu(this.state.morning)}>Menu de Dia WAI</button>
                    <button onClick={() => this.chooseMenu(this.state.dinner)}>Menu de Cena WAI</button>
                </section>
                <section className="menu-buttons">
                    {menuBtn}
                </section>
                <section className="ticket"></section>
                <Ticket
                    order={this.state.order}
                    deleteItem={this.deleteItem} />
            </div>
        )
    }
}

export default Waitress;
