import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const [ showButton, setShowButton ] = useState(false);
  const inputRef = useRef(null);

  const handleShowButton = () => {
    if (inputRef.current.value !== '' && inputRef.current.value.length > 3) {
      setShowButton(true);
    } else if (inputRef.current.value === '') {
      setShowButton(false);
    }
  };

  const saveName = () => {
      if (!inputRef.current.value) return;
      localStorage.setItem('name', inputRef.current.value);
  };

  return (
    <div className="Home">
        <div className="home-input">
          <h3>Insira o seu nome!</h3>
          <input type="text" ref={inputRef} onChange={handleShowButton}/>
        </div>

        {
          showButton && 
          <div className="home-button-ok">
            <Link to="/card">
                <button onClick={saveName}>PROSSEGUIR</button>
            </Link>
          </div>
        }
    </div>
  );
}

export default Home;
