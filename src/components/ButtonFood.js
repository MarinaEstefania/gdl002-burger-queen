import React from 'react';


const ButtonFood = (props) => {
    return (
        <div>
           <button
                key={menuItem.id}
                onClick={props.action}
                type="submit">
                    {menuItem.item}
                    {/* <img src={menuItem.img}></img> */}
                </button>
        </div>
    )
}

export default ButtonFood