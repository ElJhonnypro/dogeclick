import React, { useState } from 'react';
import './App.css';
import botonImage from './images/boton.png';

function App() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const mensajes = ["¡Muy bien!", "¡Felicidades!", "¡VAMOS A OTRO NIVEL!", "¡Sigue así!"];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    return mensajes[randomIndex];
  };

  const darclasealaimg = () => {
    // Obtenemos la referencia al elemento de imagen por su clase
    const imgElement = document.querySelector('.botondoge');
  
    // Verificamos si el elemento de imagen existe
    if (imgElement) {
      // Agregamos una clase al elemento de imagen
      imgElement.classList.add('verde');
      
      // Eliminamos la clase después de 1 segundo
      setTimeout(() => {
        imgElement.classList.remove('verde');
      }, 250);
    } else {
      console.error('Elemento de imagen no encontrado');
    }
  };

  const handleClick = () => {
    setCount(count + 1);

    // Verificar si el recuento es un múltiplo de 25 para aumentar el nivel
    if ((count + 1) % 25 === 0) {
      setLevel(level + 1);
      setMensaje(getRandomMessage());
      darclasealaimg(); // Llamar a la función para dar clase a la imagen
    }
  };

  return (
    <div className='app'>
      <h2 className='mensajelevel'>{mensaje}</h2>

      <img onClick={handleClick} className='botondoge' src={botonImage} alt="Button Image" />
      <h1>Contador: {count} | Nivel: {level}</h1>
    </div>
  );
}

export default App;
