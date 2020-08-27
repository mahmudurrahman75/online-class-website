import React from 'react';
import './Cart.css';
import courses from '../../fakeData/data';

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart);

    const total = cart.reduce((total,crs) => total + crs.price,0);

    return (
        <div className="cart">
            <h1>Courses Order Summary</h1>
            <p>Courses Count: {cart.length}</p>
            {/* <p>Course Price: {total}</p> */}
            <p>Total Price: {total}</p>
            <button className="btn">Purchase Courses</button>
        </div>
    );
};

export default Cart;