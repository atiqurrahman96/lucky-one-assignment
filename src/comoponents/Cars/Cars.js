import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'
const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='main-cars-container'>
            <div className='cars-container'>

                {
                    cars.map(car => <Car car={car} key={car.id}></Car>)
                }
            </div>
            <div>
                <h1>Selected Car</h1>
            </div>
        </div>
    );
};

export default Cars;