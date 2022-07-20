import { useEffect, useState } from "react";
import CarDog from "./components/CardDog";

const Card = () => {
  const [ dogName, setDogName ] = useState([]);
  const [ dogs, setDogs ] = useState([]);

  useEffect(() => {
    const getNameDogs = async () => {
        const data = await fetch('https://dog.ceo/api/breeds/list/all');
        const json = await data.json();
        setDogName(json.message);
    };

    getNameDogs();
  }, []);

  useEffect(() => {
    const randomDogs = Math.floor((Math.random() * 96) + 1);
    const onlyFiveDogs = Object.entries(dogName).slice(randomDogs, randomDogs + 5);
    onlyFiveDogs.map(el => setDogs(currentList => [...currentList, el[0]]));
  }, [dogName]);
    
  return (
    <div className="Card">
      <div className="card-show-name">
        <h3>Olá {localStorage.getItem('name')}!</h3>
      </div>

      <div className="card-container">
        {
          dogs.map((el, index) =>  <CarDog name={el} key={index}/>)
        }
      </div>
    </div>
  );
}

export default Card;
