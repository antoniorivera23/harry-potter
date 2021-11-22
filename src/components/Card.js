import React, {Fragment} from "react";


import "./card.css";

function Card() {
  return (
      <Fragment>
        
        <div>
            <h1>Harry Potter</h1>
        </div>
        <h2>Selecciona tu filtro</h2>
        
        <button>ESTUDIANTES</button>
        <button>STAFF</button>
        
      </Fragment>
   
  );
}

export default Card;