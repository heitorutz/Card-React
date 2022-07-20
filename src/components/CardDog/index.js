import React, { useEffect } from 'react';
import Loading from '../../utils/loading.gif';

const CarDog = ({ name, image, index }) => {

    const randomNumber = Math.floor((Math.random() * 10) + 1);

    useEffect(() => {
        const loading = document.querySelector('.card-dog-loading');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 3000);
    }, []);

  return (
    <div className='card-dog'>
        <h1 className='card-dog-name'>{name} { randomNumber } </h1>
        
        
        <img className='card-dog-loading' src={Loading} alt="loading"/>
        
        <img className='card-dog-image' src={image[index]} alt={name}/>
    </div>
  )
}

export default CarDog;

