import React from "react";
import ProductsList from "../components/ProductsList";

export default function ProdutcsPage ({products, addProductToCard }){
  return (

  <div className="page-inner-content">
    <div className="section-title">
    <h3> Produtos Selecionados </h3>
    <div className="underline"></div>
  </div>

   <div className="main-content">
    <ProductsList products={products}  addProductToCard = {addProductToCard}/>
   </div>
  </div>

  ); 
}