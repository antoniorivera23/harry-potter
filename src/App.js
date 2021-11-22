import React, {Fragment, useState} from 'react';
import Cards from "./components/Cards";


function App() {

  const [personajes, guardarPersonajes]=useState([]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearPersonaje = personaje =>{
    guardarPersonajes([
      ...personajes,
      personaje
    ]);
  }

  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;