import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from './Firebase/firebase';
import Ticket from './Ticket'
class MorningMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menuButtons:this.props.menuButtons,
            order: this.props.order,
            morning: this.props.morning,
            dinner: this.props.dinner,
            menuSelected: this.props.menuSelected
        }
       this.submit = this.submit.bind(this);
    }
    chooseMenu = (menu)=>{
        if (menu== 'morningMenu'){
          this.setState({
            menuSelected: 'morningMenu'
        })}
        else{
            this.setState({
                menuSelected: 'dinnerMenu'
            })
        } 
       // console.log(this.state.morning)
    }
    componentWillMount() {
        
        const dbRef = firebase.database().ref();
        const menuRef = dbRef.child(this.state.menuSelected);
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
    render(){
        const menuBtn = this.state.menuButtons.map(menuItem => {
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
        return(
            <div >
                 <button onClick={()=>this.chooseMenu(this.state.morning)}>Menu de Dia</button>
                <button onClick={()=>this.chooseMenu(this.state.dinner)}>Menu de Cena</button>
                
                <div>{menuBtn}</div>
                <Ticket order={this.state.order}/>
              </div>
        )
    }
}

export default MorningMenu;