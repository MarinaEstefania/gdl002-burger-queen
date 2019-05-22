import React, { Component } from 'react';
import './style.css'
/* import Order from './Order' */
import { database } from './Firebase/firebase';




class DinnerMenu extends Component {
    constructor() {
        super();
        this.state = {
            dinMenu: '',
            order: ''
        }
    }


    componentDidMount() {
        const dbRef = database.ref();
        const dinMenuRef = dbRef.child('dinnerMenu');
        dinMenuRef.on('value', snap => {
            this.setState({
                dinMenu: snap.val()
            })
        });

    }

   /*  componentWillMount () {
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
 */

    writeOrder = () => {
        console.log('hola');
    };

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
