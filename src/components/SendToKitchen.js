import React, { Component } from 'react';



class SendToKitchen extends Component {
    componentDidMount(){
        //READ
     const dbRef = firebase.database().ref();
     const speedRef = dbRef.child('order');
     speedRef.on('value', snap =>{
         this.setState({
             speed: snap.val()
         })
     });

     //CREATE
     const dbRefOrder = firebase.database().ref();
     const orderRef = dbRefOrder.child('order');
     orderRef.set([
         {
          date_of_birth: "JunDSe 23, 1912",
          full_name: "44444"
        },
         {
          date_of_birth: "December 9, 1906",
          full_name: "77777"
        }
    ]);
 }
    render() {
           
        return (
            <div>
                <button>Enviar a Cocina</button>
            </div>

        )
    }

}


export default SendToKitchen