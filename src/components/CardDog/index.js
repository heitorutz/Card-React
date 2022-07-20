import React from 'react'

const CarDog = ({ name }) => {

    const randomNumber = Math.floor((Math.random() * 10) + 1);

  return (
    <div>
        <h1>{name} { randomNumber } </h1>
    </div>
  )
}

export default CarDog;

