import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DinnerMenu extends Component{
    
    render(){
        return(
            <div >
             Menu de Noche
              </div>
        )
    }
}

export default DinnerMenu;

/* 
import React, { Component } from 'react';
import './style.css'

import firebase from './Firebase/firebase';

class DinnerMenu extends Component {
    constructor() {
        super();
        this.state = {
            dinMenu: '',
            order: ''
        }
    }


    componentDidMount() {
        const dbRef = firebase.database().ref();
        const dinMenuRef = dbRef.child('dinnerMenu');
        dinMenuRef.on('value', snap => {
            this.setState({
                dinMenu: snap.val()
            })
        });


        
    }


    render() {
        if (Array.isArray(this.state.dinMenu)) {
            
            return (
                <section> {
                    this.state.dinMenu.map((menuItem, i) => 
                    <button 
                    className={i}
                    key={menuItem.id}
                    onClick={this.writeOrder}
                    >
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

export default DinnerMenu;
 */