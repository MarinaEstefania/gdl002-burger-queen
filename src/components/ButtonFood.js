import React, {Component} from 'react';
import './style.css'
import {todo} from '../todo.json';

console.log(todo);

class ButtonFood extends Component{
    constructor(){
        super();
        this.state = {
            titulo: 'tareas',
            ntareas: 10
        }
    }
    render(){
        return(
            <div >
                <button className= {`btn button-food ${this.props.className}`}>
                    {this.props.title} {this.state.ntareas}
                </button>
              </div>
        )
    }
}

export default ButtonFood;
