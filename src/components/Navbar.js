import React, { useState } from "react";
import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,} from "react-router-dom";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

export default function Navbar({setShowSidebarCart ,
  selectedProducts}) {
  const [show, setShow] = useState(false);
    return(
    
    <div className="nav">
    <div className="inner-content">
      <h1 className="logo">
     DEV<span>STORE</span>
      </h1>
      <nav className={`${show &&"show"}`}>
             <ul>
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/produtos">Produtos</Link>
               </li>
               <li>
                 <Link to="/sobre">Sobre</Link>
               </li>
               <li>
                 <Link to="/contato">Contato</Link>
               </li>
             </ul>
           </nav>
           <div className="navs-icon-container">
             <div className="search-input-container">
               <input type="search"
               placeholder="procurar"/>
               <FontAwesomeIcon icon={faSearch} />
             </div>
             <button className="shopping-cart"
             onClick={()=>setShowSidebarCart(true)} >
               <FontAwesomeIcon icon={faShoppingCart} />
               <div className="products-count">{selectedProducts.length}</div>
             </button>
             <button className="menu-button" onClick={() => setShow(!show)}>
               <FontAwesomeIcon icon={faBars} />
             </button>
           </div>
           
           </div>
     </div>
    )
}
