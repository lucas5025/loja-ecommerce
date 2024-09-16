import React from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import ExclusiveSection from "../components/ExclusiveSection";
import Avaliacao from "../components/Avaliacao";

export default  function HomePage({
  products,
  addProductToCard

   }){
    return (
     <>
   <Header/>
  
 <div className="page-inner-content">
  <div className="section-title">
    <h3>Produtos Selecionados</h3>
    <div className="underline"></div>
  </div>
   <div className="main-content">
    <ProductsList 
    addProductToCard ={addProductToCard}
    products={products}/>
   </div>
  </div>
 
  <ExclusiveSection />
  <Avaliacao />
     </>
 );   
}