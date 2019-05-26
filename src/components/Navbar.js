import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div >
                 <nav>
                <button ><Link  to="Meseros">Meseros</Link></button>{/* 
                <button  ><Link  to="MenuComida">Comidas</Link></button> */}
                <button  ><Link  to="Cocina">Cocina</Link></button>
                </nav>
              </div>
        )
    }
}

export default Navigation;