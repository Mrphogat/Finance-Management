import React from "react";
 import { useDispatch } from "react-redux";
 import { addToCart } from "../redux/CartAction";
 const products= [
    {id:1,name: "Iphone,price:50000"},
    { id:2,name:"Bag, price:100"},
    {id:3,name: "Mouse, price:200"},
    {id:4, name: "pen, price:300"},
    {id:5,name: "Charas, price:20"}
 ]
 const Productlist=()=>{
    const dispatch=useDispatch();
    return(
        <div>
            <h2>Products</h2>
        {
            products.map((products)=>(
                <li key={products.id}><span> {products.name}-{products.price}</span>
                <button onClick={()=>dispatch(addToCart(products))}>Add to cart</button>
                </li>

            ))
        }
        </div>
    )
}
export default Productlist;