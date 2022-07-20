import { useEffect, useState } from "react";
import CarDog from "./components/CardDog";

const Card = () => {
  const [ dogName, setDogName ] = useState([]);
  const [ dogs, setDogs ] = useState([]);
  const [ dogImages, setDogImages ] = useState([]);

  useEffect(() => {
    const getNameDogs = async () => {
        const data = await fetch('https://dog.ceo/api/breeds/list/all');
        const json = await data.json();
        setDogName(json.message);
    };

    getNameDogs();
  }, []);

  useEffect(() => {
    const randomDogs = Math.floor((Math.random() * 80) + 1);

    const onlyFiveDogs = Object.entries(dogName).slice(randomDogs, randomDogs + 5);

    onlyFiveDogs.map(el => {
      const getImageDog = async () => {
        const imageDog = `https://dog.ceo/api/breed/${el[0]}/images`;
        const data = await fetch(imageDog);
        const json = await data.json();
        console.log(json.message[0]);
        setDogImages(currentImages => [...currentImages, json.message[0]]);
    };

      getImageDog();
      return setDogs(currentList => [...currentList, el[0]]);
    });
  }, [dogName]);

    
  return (
    <div className="Card">
      <div className="card-show-name">
        <h3>Olá {localStorage.getItem('name')}!</h3>
      </div>

      <div className="card-container">
        {
          dogs.map((el, index) => <CarDog name={el} key={index} image={dogImages} index={index}/>)
        }
      </div>
    </div>
  );
}

export default Card;
