import React, { Component } from 'react';
import firebase from './Firebase/firebase';
import Ticket from './Ticket'
import './style/style.css';

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
                <button type="button" class="btn btn-lg btn-primary btn-item col-4"
                    key={menuItem.id}
                    onClick={() => { this.submitItem(menuItem.item, menuItem.price, menuItem.img, menuItem.id); }}
                    type="submit">
                    {menuItem.item}
                    <img className="img" alt={menuItem.item} src={menuItem.img} />
                </button>
            )
        });

        return (
            <div className="waitress row">

               
                <section className="morningMenu">
                    <button type="button" class="btn btn-warning btn-lg btn-block choose-menu-btn"
                        onClick={() => this.chooseMenu(this.state.morning)}>
                        Menu Desayunos
                    </button>
                </section>
                <section className="dinnerMenu">
                    <button type="button" class="btn btn-warning btn-lg btn-block choose-menu-btn"
                        onClick={() => this.chooseMenu(this.state.dinner)}>
                        Menu Comidas
                    </button>
                </section>

                <div className="menuBtns-and-ticket row">
                    <section className="menu-buttons col-5 row alert alert-dismissible alert-secondary">
                        {menuBtn}
                    </section>
                    <section className="ticket col-5 ">
                        <Ticket 
                            order={this.state.order}
                            deleteItem={this.deleteItem} />
                    </section>
                </div>
            </div>
        )
    }
}

export default Waitress;