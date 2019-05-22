import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div >
                 <nav>
                <button ><Link  to="MenuDesayuno">Desayunos</Link></button>
                <button  ><Link  to="MenuComida">Comidas</Link></button>
                </nav>
              </div>
        )
    }
}

export default Navigation;