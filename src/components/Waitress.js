import React, { Component } from 'react';
import './style.css'
import firebase from './Firebase/firebase';
import Ticket from './Ticket'
import MorningMenu from './MorningMenu';

class Waitress extends Component {
    constructor(props) {
        super(props);
        var handleSort = this.handleSort.bind(this)
        this.state = {
            menuButtons: [],
            order: [],
            morning: 'morningMenu',
            dinner: 'dinnerMenu',
            menuSelected: 'morningMenu'
        }
        this.submitItem = this.submitItem.bind(this);
        this.handleSort = this.handleSort.bind(this)
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

    handleSort = value => event => {
        console.log(value)
      //  this.setState({idItemToEliminate:value})
        let array = this.state.order.find(item=>{
            return item.id ==value
        })
/*         array.id.filter(id =>{
            return  id!== value
        }) */
        console.log('item para eliminar' + array)
        const newOrder = this.state.order
        newOrder.forEach(function(i){
            console.log( i)
            var index = newOrder.indexOf(array);
            newOrder.splice(index, 1)
            console.log(newOrder)
        })
        
        console.log('orden antes de eliminar' + newOrder)
        var index = newOrder.indexOf(array);
        console.log('index ' + index)
        console.log('orden despues de .splice' + newOrder.splice(index, 1))
        
        if (index > -1) {
            this.setState({
                order: [newOrder.splice(index, 1)]
            }) 
         }
         
         
    /*     console.log(value)
        //  this.setState({idItemToEliminate:value})
          let array = this.state.order.map(item=>{
              
              return item.id !==value
          })
  /*         array.id.filter(id =>{
              return  id!== value
          }) */
         // console.log(array) */
  
    }

    render() {
        const handleSort = this.handleSort
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
                handleSort={handleSort.bind(this)}/> 
            </div>
        )
    }
}

export default Waitress;
