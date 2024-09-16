import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";




export default  function Product({id,image, name,rate,price,addProductToCard}){
    return(
    <div className="product">
    <img src={image} alt={name} />
    <p className="name">{name}</p>
    <p className="rate">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
    <p className="price"> R$: {price}</p>
    
    <div className="buttons">
    <button onClick={()=> addProductToCard(id)} className="btn-icon add-to-cart-btn">
        <span>Adicioanr ao carrinho</span>
        <FontAwesomeIcon icon={faCartShopping} />
    </button>
    </div>
    </div>
    );
}