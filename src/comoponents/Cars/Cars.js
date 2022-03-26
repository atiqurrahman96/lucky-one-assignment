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
            <div className='main-paragraph-container'>
                <div className='paragraph-container-1'>
                    <h1>How does React work?</h1>
                    <p> React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.We see react woks many ways such as Declarative way and also Component - Based. Declarative react makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. It also works as per component ways , by using component we can render our task with very easily by dividing our projects work  many components. By using components we can pass rich data very easily from one component to another component and also we can receive those data through props.    </p>
                </div>
                <div className='paragraph-container-2'>
                    <h1>Distinguish the difference between Props Vs State?</h1>
                    <h3>
                        I am trying to mention some differences between Props vs State. they are given below:
                    </h3>
                    <p>1:Props are read-only. On the other hand,state changes can be asynchronous.
                        2:props are unchangeable. But states are changeable.
                        3: Props can be accessed by the child component but states not.
                        4: Props are used to communicate between components .But states can be used for rendering dynamic changes with the component.
                        5:States can be used for rendering dynamic changes with the component.But state can not.
                    </p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cars;