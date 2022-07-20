import { useEffect, useState } from "react";
import { renderDogs } from "./functions/getImageDog";
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
    renderDogs(dogName, setDogImages, setDogs);
  }, [dogName]);

    
  return (
    <div className="Card">
      <div className="card-show-name">
        <h3>Olá {localStorage.getItem('name')}!</h3>
      </div>

      <div className="card-container">
        {
          dogs.map((el, index) => <CarDog key={index} image={dogImages} index={index}/>)
        }
      </div>

      <div className='buttons'>
          <button type="button">ADICIONAR MAIS CARTAS</button>
          <button type="button">EMBARALHAR CARTAS</button>
      </div>
    </div>
  );
}

export default Card;
