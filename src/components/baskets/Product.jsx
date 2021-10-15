import { useState } from "react";
import AddProduct from "./AddProduct";
import Basket from "./Basket";
const Product = () => {

    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState([]);

    const newProduct = ({target}) =>{
        setProductName(target.value);
    }

    const submitForm = (event) => {
        //prevent form submission on initial click
        event.preventDefault();
    }

    const handleAdd = () =>{
        //save productname into the array
        setProducts( products => [...products, productName])
    }

    return(
        <>
        
        <AddProduct newProduct={newProduct} submitHandler={submitForm} handleAdd={handleAdd}/>
        
        <Basket products={products}/>
        </>
        )
    ;
    //passing the newproduct function as a prop to the addprodct component
    //loop over the array in order to print it to screen, so we pass the products as a prop to the basket
}

export default Product;