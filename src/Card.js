import { useEffect, useState } from "react";

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
    const onlyFiveDogs = Object.entries(dogName).slice(0, 5);
    onlyFiveDogs.map(el => setDogs(currentList => [...currentList, el[0]]));
  }, [dogName]);
    
  return (
    <div className="Card">
      <div className="card-show-name">
        <h3>Olá {localStorage.getItem('name')}!</h3>
      </div>

      <div className="card-container">
        {
          dogs.map(el => <h1>{el}</h1>)
        }
      </div>
    </div>
  );
}

export default Card;
