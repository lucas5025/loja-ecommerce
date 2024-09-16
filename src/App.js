import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/AboutPage";
import SidebarCart from "./components/SidebaCart";
import Contact from "./pages/ContactPage";

function App() {
  const[products,setProducts] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState ([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCartTotal = (value) => setCartTotal(cartTotal + value);


  useEffect(() => {
    fetch("/db.json")
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
  }, []);
 
  const addProductToCard = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];
   if (selectedProducts.includes(productToAdd)) return;
   setSelectedProducts(selectedProducts.concat(productToAdd));
   setCartTotal(cartTotal + productToAdd.price);
  };

 const removeProductFromCart = (id) => {
  const newSelectedProducts = selectedProducts.filter(
    (product) => product.id !== id
  ) 
  setSelectedProducts(newSelectedProducts)
 }
  return(
    <Router>
      <div className="App">
   <Navbar 
    selectedProducts = {selectedProducts}
    setShowSidebarCart = {setShowSidebarCart}/>

 <SidebarCart
  selectedProducts = {selectedProducts}
  setShowSidebarCart = {setShowSidebarCart}
  showSidebarCart = {showSidebarCart}
  cartTotal = {cartTotal}
  removeProductFromCart = {removeProductFromCart}
  addToCartTotal = {addToCartTotal}
  />

   <main>
    <Routes>
      <Route
       path="/"
        element={
        <HomePage
        addToCartTotal = {addToCartTotal}
        selectedProducts = {selectedProducts}
        addProductToCard = {addProductToCard}
        products={products}
        setShowSidebarCart = {setShowSidebarCart}
        showSidebarCart = {showSidebarCart}
        cartTotal = {cartTotal}
        removeProductFromCart = {removeProductFromCart}
        />} />
      <Route path="/produtos" element={<ProductsPage  products={products}
       addProductToCard = {addProductToCard}/>} />
   
      <Route path="/cart/checkout"
      element={<div className="checkout"> <h1>Em desenvolvimento ...</h1></div>}  />

        <Route path="/sobre" element ={<About/>}/>

      <Route path="/contato" element = {<Contact/>} />

      </Routes>
   </main>
     <Footer />
    </div>
    </Router>
 );
}
export default App;

