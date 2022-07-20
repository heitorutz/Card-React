import React from 'react'

const CarDog = ({ name, image, index }) => {

    const randomNumber = Math.floor((Math.random() * 10) + 1);

  return (
    <div className='card-dog'>
        <h1 className='card-dog-name'>{name} { randomNumber } </h1>
        
        <img className='card-dog-image' src={image[index]} alt={name}/>
    </div>
  )
}

export default CarDog;

