import React from 'react';
import './Car.css'
const Car = (props) => {
    console.log(props.car)
    const { strImg, id } = props.car;

    return (
        <div>
            <div img className='img-container'>
                <img src={strImg} alt="" />
            </div>
            <div>
                <p>Id:{id}</p>
            </div>
        </div>
    );
};

export default Car;