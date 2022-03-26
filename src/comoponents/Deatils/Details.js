import React from 'react';
import './Details.css'
const Details = (props) => {
    console.log(props.detail);
    const { strName, strImg } = props.detail;
    return (
        <div className='detail-container'>
            <div className='detail-img-container'>
                <img src={strImg} alt="" />
            </div>
            <div className='detail-name-container'>
                <p>Name:{strName}</p>
            </div>
        </div>
    );
};

export default Details;