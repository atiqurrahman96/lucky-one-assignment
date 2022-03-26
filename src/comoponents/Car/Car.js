import React from 'react';
import './Car.css'
const Car = (props) => {
    console.log(props.car)
    const { picture, id } = props.car;

    return (
        <div>
            <div img className='img-container'>
                <img src={picture} alt="" />
            </div>
            <div>
                <p>Id:{id}</p>
            </div>
        </div>
    );
};

export default Car;