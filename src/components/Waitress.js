import React, { Component } from 'react';
import './style.css'
import firebase from './Firebase/firebase';
/* import ButtonFood from '-./ButtonFood' */
import Ticket from './Ticket'
import MorningMenu from './MorningMenu';



class Waitress extends Component {
    constructor() {
        super();
        this.state = {
            menuButtons: [],
            order: [],
            morning: 'morningMenu',
            dinner: 'dinnerMenu',
            menuSelected: 'morningMenu'
        }
        this.submit = this.submit.bind(this);
    }

    chooseMenu = (menu) => {
        if (menu == 'morningMenu') {
            this.setState({
                menuSelected: 'morningMenu'
            })
            const dbRef = firebase.database().ref();
            const menuRef = dbRef.child(this.state.menuSelected);
            menuRef.on('value', snap => {
                this.setState({
                    menuButtons: snap.val()
                })
            });
        }
        else {
            this.setState({
                menuSelected: 'dinnerMenu'
            })
            const dbRef = firebase.database().ref();
            const menuRef = dbRef.child(this.state.menuSelected);
            menuRef.on('value', snap => {
                this.setState({
                    menuButtons: snap.val()
                })
            });
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
        const menuBtn = this.state.menuButtons.map(menuItem => {
            return (
                <button
                    key={menuItem.id}
                    onClick={() => { this.submit(menuItem.item, menuItem.price); }}
                    type="submit">
                    {menuItem.item} WA
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
                <button onClick={() => this.chooseMenu(this.state.morning)}>Menu de Dia WAI</button>
                <button onClick={() => this.chooseMenu(this.state.dinner)}>Menu de CenaWAI</button>
                <div>{menuBtn}</div>

                {/*    <MorningMenu
                     menuSelected = {this.state.menuSelected}
                     menuButtons= {this.state.menuButtons}
                     order= {this.state.order}
                     morning= {this.state.morning}
                     dinner= {this.state.dinner}/> */}
                <Ticket order={this.state.order} />
            </div>
        )
    }
}

export default Waitress;
