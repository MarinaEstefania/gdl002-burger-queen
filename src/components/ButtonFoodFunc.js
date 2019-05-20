import React from 'react';



const ButtonFoodFunc = (props) => {
    return (
        <div>
            <button
            key={props.key}
            onClick={props.action}>
             {props.item}
             <p>
                 imagen.png{/* <img src={props.img}/> */}
             </p>
            </button>
{/*             <button 
            key={[i]}  
            className={`btn button-food ${props.className}`} >
                {morningMenu.item} :D
                <p>{morningMenu.price}</p> 
                <p><img className="imgItem" src={morningMenu.img} alt={props.alt} /></p>
            </button> */}
        </div>
    )
}

export default ButtonFoodFunc