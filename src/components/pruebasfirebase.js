import React, {Component} from 'react';
import firebase from 'firebase';
import {database} from './Firebase/firebase';

class Pruebasfirebase extends Component{
    constructor (){
        super()
        const dbRef = database.ref();
        const speedRef = dbRef.child('speed');
        console.log(speedRef)
        this.state = {
            speed: 'prueba firbease'
        }
    }
/*       componentDidMount(){
        this.database.on('value', snap =>{
            this.setStat({
                speed: snap.val()
            })
        });
    }   */

    render(){
        return(
            <div >
                <h1>{this.state.speed}</h1>
              </div>
        )
    }
}

export default Pruebasfirebase;