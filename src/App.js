import React, {Fragment, useState} from 'react';
import HarryPotterCard from "./components/HarryPotterCard";
import personajes from './components/hp-characters.json'

import AgregarPersonaje from "./components/AgregarPersonaje";



function App() {

  const [personajes, guardarPersonajes]=useState([]);

  //Funcion que tome los personajes actuales y agregue el nuevo
  const crearPersonaje = personaje =>{
    guardarPersonajes([
      ...personajes,
      personaje
    ]);
  }

  return (
	  <Fragment>
	<div style={{}}>
		<h1>Harry Potter</h1>
		<h2>Selecciona tu filtro</h2>
		<button className="btn btn-outline-primary btn-lg">Estudiantes</button>&nbsp;

		<button className="btn btn-outline-primary btn-lg"> Staff</button>
		<br /> <br />
		<div className="container">   
		<div className="card-group">

		<div className="card text-center border-info"s>
			<div className="card-body circulo"> 

			</div>
      </div>          

      <div className="card text-center border-info">
        <div className="card-body">
          <h4 className="card-title">Vivo/Estudiante</h4>
		  <br/ > <br/>
		  Cumpleaños:
		  <br/>
		  Genero:
		  <br/>
		  Color de Ojos:
		  <br/>
		  Color de Pelo:
		  <br/>

         
        </div>
      </div>             

    </div>
  </div>   
	</div>
	</Fragment>
	
  );
}

export default App;