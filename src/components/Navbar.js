import React, {Component} from 'react';


class Navigation extends Component{
    render(){
        return(
            <div >
                <nav className='navigation navbar navbar-dark bg-dark '>
                    <a href="#" className='text-white'>{this.props.title}</a>
                </nav>
              </div>
        )
    }
}

export default Navigation;