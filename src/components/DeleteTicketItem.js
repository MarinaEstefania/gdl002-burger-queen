import React, { Component } from 'react';
import SendToKitchen from './SendToKitchen'


class Ticket extends Component {
 
    render(props) {
        
           
        return (
            <div>
                <button   onClick={this.props.deletefunction()}>Eliminar</button>
              
            </div>

        )
    }

}


export default Ticket