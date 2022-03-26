import React from 'react';
import Details from '../Deatils/Details';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)

    return (
        <div className='cart-container'>
            <h1>Selected Car</h1>
            <p>Selected items:{cart.length}</p>
            {
                cart.map(item => <Details detail={item} key={item.id} ></Details>)
            }
        </div >
    );
};

export default Cart;