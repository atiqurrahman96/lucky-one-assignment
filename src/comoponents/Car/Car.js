import React from 'react';
import './Car.css'
const Car = (props) => {
    // console.log(props.car)

    const { strImg, id, strPrice } = props.car;
    const { chooseToCart } = props;

    return (
        <div className='single-car-container'>
            <div className='img-container'>
                <img src={strImg} alt="" />
            </div>
            <div>
                <p>Id:{id}</p>
                <p>Price:${strPrice}</p>
            </div>
            <div className='btn-container'>
                <button onClick={() => chooseToCart(props.car)} >Choose</button>
            </div>
        </div>
    );
};

export default Car;