import React, { useState } from 'react';
import './App.css';
import Image from './images/boton.png';

function App() {
  const [count, setCount] = useState(0); 
  const [level, setLevel] = useState(0); // Añadí estado para el nivel
  const [mensaje, setMensaje] = useState("");
  const mensajes = ["Muy bien!", "Felicidades", "VAMOS OTRO NIVEL!"];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    return mensajes[randomIndex];
  };

  const handleClick = () => {
    setCount(count + 1); 

    // Verificar si el recuento es un múltiplo de 25 para aumentar el nivel
    if ((count + 1) % 25 === 0) {
      setLevel(level + 1);
      setMensaje(getRandomMessage());
    }
  };
  
  return (
    <div className='app'>
      <h2 className='mensajelevel'>{mensaje}</h2>
      
      <img onClick={handleClick} className='botondoge' src={Image} alt="Button Image" /> {/* Corrected onClick attribute */}
      <h1>Count: {count} Level: {level}</h1> 
    </div>
  );
}

export default App;
