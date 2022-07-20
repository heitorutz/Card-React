import React from 'react'

const CarDog = ({ name }) => {

    const randomNumber = Math.floor((Math.random() * 10) + 1);

  return (
    <div className='card-dog'>
        <h1 className='card-dog-name'>{name} { randomNumber } </h1>
    </div>
  )
}

export default CarDog;

