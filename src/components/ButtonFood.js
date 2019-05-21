import React, { Component } from 'react';
import './style.css'
import Order from './Order'
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

    }

    componentWillMount () {
        const dbRefOrder = database.ref();
        const orderRef = dbRefOrder.child('Order');
        orderRef.set([
            {
             date_of_birth: "JunDSe 23, 1912",
             full_name: ":3 Alan SSSa´pdsla´pdTuSDSSDring"
           },
            {
             date_of_birth: "December 9, 1906",
             full_name: "Grace Hopper"
           }
       ]);

    }


    writeOrder = () => {
        console.log(this.state.order);
    };

    render() {
        if (Array.isArray(this.state.mMenu)) {
            
            return (
                <section> {
                    this.state.mMenu.map((menuItem, i) => 
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

export default ButtonFood;
