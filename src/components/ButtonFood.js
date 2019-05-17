import React, { Component } from 'react';
import './style.css'
import { morningMenu } from '../morningMenu.json';

const itemsAmountMorning = morningMenu.lenght;
console.log(itemsAmountMorning);

class ButtonFood extends Component {
    constructor() {
        super();
        this.state = {
            morningMenu
        }
    }
    render() {
       const morningMenues = this.state.morningMenu.map((morningMenu, i) => {
            return (
                <div>
                    <button key={[i]} className={`btn button-food ${this.props.className}`} >
                        {morningMenu.item}
                        {/* <p>{morningMenu.price}</p> */}
                        {/*   <p>{i}</p> */}
                        <p><img className="imgItem" src={morningMenu.img} alt={this.props.alt} /></p>
                    </button>
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
