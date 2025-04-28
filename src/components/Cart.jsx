import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartAction";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Cart ( {cart.length} )</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}><span>{item.name}</span>-<span>{item.price}</span>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                Remove this item from cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
