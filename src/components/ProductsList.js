import React from "react";
import Product from "./Product";



export default function ProductsList({products, addProductToCard}) {
    return <div className="product-list">
        {products.map(product => <Product {...product} addProductToCard = {addProductToCard}/>)}
    </div>;
}