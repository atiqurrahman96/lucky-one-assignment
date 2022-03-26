import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Cars.css'
const Cars = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    const chooseToCart = (car) => {
        const newCart = [...cart, car];
        setCart(newCart);
    }
    return (
        <div className='main-cars-container'>
            <div className='cars-container'>

                {
                    cars.map(car => <Car car={car} key={car.id} chooseToCart={chooseToCart}></Car>)
                }
            </div>
            <div className='summary-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Cars;