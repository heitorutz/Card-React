import { useEffect, useState } from "react";
import { renderDogs, renderOneDog } from "./functions/renderDog";
import CarDog from "./components/CardDog";


const Card = () => {
  const [ dogName, setDogName ] = useState([]);
  const [ dogs, setDogs ] = useState([]);
  const [ dogImages, setDogImages ] = useState([]);

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

  useEffect(() => {
    const dogsButton = document.querySelector('#add');

    if (dogs.length === 8) {
      dogsButton.style.pointerEvents = 'none';
    }
  }, [dogs]);

  const refreshPage = () => {
      window.location.reload()
  };

  return (
    <div className="Card">
      {
        localStorage.getItem('name') ? <div>
        <div className="card-show-name">
        <h3>Olá {localStorage.getItem('name')}!</h3>
      </div>

        
      <div className="card-container">
        {
          dogs.map((el, index) => <CarDog key={index} image={dogImages} index={index} />)
        }
      </div>
       

      <div className='buttons'>
          <button type="button" id="add" onClick={() => renderOneDog(dogName, setDogImages, setDogs)}>ADICIONAR MAIS CARTAS</button>
          <button type="button" id="shuffle" onClick={refreshPage}>EMBARALHAR CARTAS</button>
      </div>
      </div> : <h1 style={{ color: '#fff'}}>VOCÊ PRECISA COLOCAR O SEU NOME!</h1>
      }
        
    </div> 

  );
}

export default Card;
