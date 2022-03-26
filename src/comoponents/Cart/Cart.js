import React from 'react';
import Details from '../Deatils/Details';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const add = () => {
        console.log('clicked');
    }
    return (
        <div className='cart-container'>
            <h1>Selected Car</h1>
            <p>Selected items:{cart.length}</p>
            {
                cart.map(item => <Details detail={item} key={item.a}></Details>)
            }
            <div>
                <button onClick={add}>Choose 1 For Me</button>
            </div>
        </div >
    );
};

export default Cart;