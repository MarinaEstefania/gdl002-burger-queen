import React, { Component } from "react";
import firebase from "./Firebase/firebase";
import Ticket from "./Ticket";
import "./style/style.css";

class Waitress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuButtons: [],
      order: [],
      morning: "morningMenu",
      dinner: "dinnerMenu",
      menuSelected: "morningMenu"
    };
    // this.submitItem = this.submitItem.bind(this);
  }

  chooseMenu = menu => {
    if (menu == "morningMenu") {
      this.setState(
        {
          menuSelected: "morningMenu"
        },
        () => {
          const dbRef = firebase.database().ref();
          const menuRef = dbRef.child(this.state.menuSelected);
          menuRef.on("value", snap => {
            this.setState({
              menuButtons: snap.val()
            });
          });
        }
      );
    } else {
      this.setState(
        {
          menuSelected: "dinnerMenu"
        },
        () => {
          const dbRef = firebase.database().ref();
          const menuRef = dbRef.child(this.state.menuSelected);
          menuRef.on("value", snap => {
            this.setState({
              menuButtons: snap.val()
            });
          });
        }
      );
    }
  };

  componentDidMount() {
    const dbRef = firebase.database().ref();
    const menuRef = dbRef.child("morningMenu");
    menuRef.on("value", snap => {
      this.setState({
        menuButtons: snap.val()
      });
    });
  }

  submitItem = (item, price, img, id) => {
    const newItem = {
      item: item,
      price: price,
      img: img,
      id: id,
      amount: 0
    };
    this.setState({
      order: [...this.state.order, newItem]
    });

    this.state.order.forEach(i => {
      if (newItem.id == i.id) {
        newItem.amount = i.amount + 1;
      }
    });

    let orderIndex = this.state.order.findIndex(i => {
      return i.id == newItem.id;
    });

    if (orderIndex > -1) {
      this.setState({
        order: [
          ...this.state.order.slice(0, orderIndex),
          ...this.state.order.slice(orderIndex + 1, this.state.order.length),
          newItem
        ]
      });
    }
  };

  deleteItem = value => {
    let orderIndex = this.state.order.findIndex(item => {
      return item.id === value;
    });
    if (orderIndex > -1) {
      this.setState({
        order: [
          ...this.state.order.slice(0, orderIndex),
          ...this.state.order.slice(orderIndex + 1, this.state.order.length)
        ]
      });
    }
  };

  eraseOrder = () => {
    // console.log('EnteringToEraseOrder')
    this.setState({
      order: []
    });
  };

  render() {
    const menuBtn = this.state.menuButtons.map(menuItem => {
      return (
        <button
          type="button"
          className="btn btn-lg btn-primary btn-item"
          key={menuItem.id}
          onClick={() => {
            this.submitItem(
              menuItem.item,
              menuItem.price,
              menuItem.img,
              menuItem.id
            );
          }}
          type="submit"
        >
          {menuItem.item}
          <img className="img" alt={menuItem.item} src={menuItem.img} />
        </button>
      );
    });

    return (
      <section className="waitress row">
        <div className="menues-section">
          <button
            type="button"
            className="btn btn-warning btn-lg choose-menu-btn"
            onClick={() => this.chooseMenu(this.state.morning)}
          >
            Menu Desayunos
          </button>

          <button
            type="button"
            className="btn btn-warning btn-lg choose-menu-btn"
            onClick={() => this.chooseMenu(this.state.dinner)}
          >
            Menu Comidas
          </button>
        </div>

        <section className="menuBtns-and-ticket row">
          <section className="menu-buttons col-sm-12 col-md-7 alert alert-dismissible alert-secondary">
            {menuBtn}
          </section>
          <section className="ticket col-sm-12 col-md-5">
            <Ticket
              eraseOrder={this.eraseOrder}
              order={this.state.order}
              deleteItem={this.deleteItem}
            />
          </section>
        </section>
      </section>
    );
  }
}

export default Waitress;
