import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style/style.css';
import './style/personalStyle.css';

class Navigation extends Component{
    render(){
        return(
            <div>
                 <nav className="navbars navbar-expand-lg navbar-dark bg-primary">
                     
                   <ul className="navbar-nav">
                  {/*  <li className="nav-item"> 
                       <Link className="navbar-brand"  to="inicio">  Inicio | </Link>
                       </li> */}
                      <li className="nav-item"> 
                       <Link className="navbar-brand"  to="tomar-orden">Tomar orden | </Link>
                       </li>
                      <li className="nav-item"> 
                       <Link className="navbar-brand"  to="Cocina">Cocina |</Link>
                       </li>
                    </ul>
                </nav>
                
               
              </div>
        )
    }
}

export default Navigation;