import React, { Component } from 'react';
import './style.css'
import ButtonFoodFunc from './ButtonFoodFunc'
import { morningMenu } from '../morningMenu.json';

const navigateToGoogle = () => {
    window.location.href = "https://google.com";
  };

class ButtonFood extends Component {
    constructor() {
        super();
        this.state= {
            morningMenu
        }
    }
    render() {
       const morningMenues = this.state.morningMenu.map((morningMenu, i) => {
            return (
                <div>
                    <ButtonFoodFunc 
                    action={navigateToGoogle}
                    key={i}
                    item={morningMenu.item}
                  /*   img={morningMenu.img} *//>
                </div>
            )
        })
        return (
            <div >
                {morningMenues}
            </div>
        )
    }
}

export default ButtonFood;
