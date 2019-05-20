import React, { Component } from 'react';
import './style.css'
import { database } from './Firebase/firebase';

const writeOrder = () => {
    window.location.href = "https://google.com";
};

class ButtonFood extends Component {
    constructor() {
        super();
        this.state = {
            mMenu: ''
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
    }
    render() {
        if (Array.isArray(this.state.mMenu)) {
            return (
                <section> {
                    this.state.mMenu.map(menuItem => 
                    <button 
                    key={menuItem.id}
                    >
                    {menuItem.item}
                    </button>)
                } </section>
            )
        }
        return (
            "loading"
        )
    }
}

export default ButtonFood;
