import { useEffect, useState } from "react";
import { renderDogs, renderOneDog } from "./functions/renderDog";
import CarDog from "./components/CardDog";

const Card = () => {
  const [ dogName, setDogName ] = useState([]);
  const [ dogs, setDogs ] = useState([]);
  const [ dogImages, setDogImages ] = useState([]);
  const [shuffle, setShuffle] = useState(0);

  const getNameDogs = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/list/all');
    const json = await data.json();
    setDogName(json.message);
  };
  useEffect(() => {
    getNameDogs();
  }, []);

  useEffect(() => {
    renderDogs(dogName, setDogImages, setDogs);
  }, [dogName]);

  const shuffleDogs = () => {
    const randomNumber = Math.floor((Math.random() * dogs.length));
      setShuffle(randomNumber);
  };

  return (
    <div className="Card">
      <div className="card-show-name">
        <h3>Olá {localStorage.getItem('name')}!</h3>
      </div>

      <div className="card-container">
        {
          dogs.map((el, index) => <CarDog key={index} image={dogImages} index={index} shuffle={shuffle} dogs={dogs}/>)
        }
      </div>

      <div className='buttons'>
          <button type="button" onClick={() => renderOneDog(dogName, setDogImages, setDogs)}>ADICIONAR MAIS CARTAS</button>
          <button type="button" id="shuffle" onClick={shuffleDogs}>EMBARALHAR CARTAS</button>
      </div>
    </div>
    
  );
}

export default Card;
