import React, {Component} from 'react';
import firebase from 'firebase';

class Pruebasfirebase extends Component{
    constructor (){
        super()
        this.state = {
            speed: 'prueba firbease'
        }
    }
       componentDidMount(){
           //READ
        const dbRef = firebase.database().ref();
        const speedRef = dbRef.child('morningMenu');
        speedRef.on('value', snap =>{
            this.setState({
                speed: snap.val()
            })
        });

        //CREATE
        const dbRefOrder = firebase.database().ref();
        const orderRef = dbRefOrder.child('pruebasFirebase');
        orderRef.set([
            
                {"dinnerMenu" : [ {
                  "id" : "hamSim",
                  "img" : "https://sifu.unileversolutions.com/image/es-MX/recipe-topvisual/2/1260-709/hamburguesa-clasica-50425188.jpg",
                  "item" : "Hamburguesa Simple",
                  "price" : 10
                }, {
                  "id" : "hamDob",
                  "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPGR7LlhS7WscHDIu4WiRDcq5cBTgNfHT5Pwe1s9M0Inz4Ozvaw",
                  "item" : "Hamburguesa Doble",
                  "price" : 15
                }, {
                  "id" : "papas",
                  "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fries_2.jpg/1200px-Fries_2.jpg",
                  "item" : "Papas Fritas",
                  "price" : 5
                }, {
                  "id" : "cebolla",
                  "img" : "https://static.guiainfantil.com/pictures/recetas2/44000/44822-4-aros-de-cebolla-rebozados-receta-casera-para-ninos.jpg",
                  "item" : "Aros de Cebolla",
                  "price" : 15
                }, {
                  "id" : "agua500",
                  "img" : "https://super.walmart.com.mx/images/product-images/img_large/00750179164998L.jpg",
                  "item" : "Agua 500 ml",
                  "price" : 5
                }, {
                  "id" : "agua700",
                  "img" : "https://www.chedraui.com.mx/medias/758104100422-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8NDc3NjB8aW1hZ2UvanBlZ3xoZWMvaDkyLzkyMzI5NzY1MTEwMDYuanBnfGE2NTQ5MGZhYmQzOWE0MDc4ZDk1MGQxZGMwMGMyMGQ1ZDg0NDYzOTU1ZGMyZTg0MjFmNmM5MjY4ZmE3MTQ1YjE",
                  "item" : "Agua 750 ml",
                  "price" : 7
                }, {
                  "id" : "bebida500",
                  "img" : "https://super.walmart.com.mx/images/product-images/img_large/00000007500980L.jpg",
                  "item" : "Bebida/Gaseosa 500ml",
                  "price" : 7
                }, {
                  "id" : "bebida750",
                  "img" : "http://4.imimg.com/data4/UK/MS/GLADMIN-2/coca-cola-cold-drink-500x500.jpg",
                  "item" : "Bebida/Gaseosa 750ml",
                  "price" : 10
                } ]},{
                "morningMenu" : [ {
                  "id" : "cafe",
                  "img" : "http://us.coffee/assets/img/taza.png",
                  "item" : "Café Americano",
                  "price" : 5
                }, {
                  "id" : "cafeleche",
                  "img" : "https://img2.freepng.es/20171216/161/cup-coffee-png-5a34b7187c6386.5299433215134041845095.jpg",
                  "item" : "Café con leche",
                  "price" : 7
                }, {
                  "id" : "sandwich",
                  "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocK_G9r8jPwMTeZ0hWMsiqkJISYvBOt54767OMLTvdlKuzgcfsA",
                  "item" : "Sandwich de jamón y queso",
                  "price" : 10
                }, {
                  "id" : "jugo",
                  "img" : "http://www.1001consejos.com/wp-content/uploads/2014/10/vaso-de-zumo-de-durazno.png",
                  "item" : "Jugo de frutas natural",
                  "price" : 7
                } ]
            }
              
              
       ]);
    }

    render(){
        if (Array.isArray(this.state.speed)) {
            return(
                <div >
                    <h1>{this.state.speed.map(menuItem => <p>{menuItem.item}</p>)}</h1>
                  </div>
            )
        }
        return "Loading..";

    }
}

export default Pruebasfirebase;