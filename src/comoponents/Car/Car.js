import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <div className='single-car-detail'>
                <p>Id:{id}</p>
                <p>Price:${strPrice}</p>
            </div>
            <div className='btn-container'>
                <div>
                    <button onClick={() => chooseToCart(props.car)} >Choose</button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </div>
            </div>

        </div>

    );
};

export default Car;