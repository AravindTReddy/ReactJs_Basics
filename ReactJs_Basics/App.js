import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Product from "./components/Product"
import Products from "./ProductList"


function App(){
    
    const products = Products.map(function(product){
        return(
            <Product key={product.id} name={product.name} img={product.img} price={product.price} description={product.description}  />
        )
    })
    
    return (
    <div>
    <Header />
    <MainContent />
    <div>{products}</div>
    <Footer />
    </div>
    )
}

export default App