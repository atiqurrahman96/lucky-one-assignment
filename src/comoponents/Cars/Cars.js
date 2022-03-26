import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Cars.css'
const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    const chooseToCart = (car) => {
        console.log(car, 'hi bro')
    }
    return (
        <div className='main-cars-container'>
            <div className='cars-container'>

                {
                    cars.map(car => <Car car={car} key={car.id} chooseToCart={chooseToCart}></Car>)
                }
            </div>
            <div className='summary-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Cars;