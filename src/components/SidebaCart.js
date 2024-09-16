import { faArrowUpShortWide, faChevronCircleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function SidebarCart({
  setShowSidebarCart,
  showSidebarCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
  addToCartTotal
}) {
 
    return ( 
  <aside className={`sidebar-cart ${showSidebarCart && "show"}`} >

  <div className="top">
    <h3>Seu Carrinho</h3> 
    <button onClick={()=> setShowSidebarCart(false)} >
        <FontAwesomeIcon icon={faXmark} />
    </button>
  </div>

  <div className="sidebar-products-list">
   {selectedProducts.map((Product) => (
    <SidebarProduct key={Product.id} {...Product}
     removeProductFromCart = {removeProductFromCart}
     addToCartTotal = {addToCartTotal} />
   ))}
  </div>

  
    {cartTotal ===0 ? (
   <i> Seu carrinho está vazio</i>
 ) : (
  <>
  <div className="total-container">
    <b>Subtotal dos produtos:</b> <b>{cartTotal}</b>
  </div>

  <Link to="/cart/checkout" className="btn-icon">
      <span>Pagar agora</span>
       <FontAwesomeIcon icon={faChevronCircleRight} />
     </Link>
  </>
 )} 
      </aside>
    );
}