import React from "react";
import HarryPotterCard from "./HarryPotterCard";
import characters from './hp-characters.json';



function HarryPotterCards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
       {characters.map(({name, gender, yearOfBirth, eyeColour, hairColour, image}) =>(
         <div className="col-md-4" key={name}>
          <HarryPotterCard Genero={gender} Cumpleaños={yearOfBirth} Ojos de color={eyeColour} Color de Pelo={hairColour}  />
          </div>
       ))}
      </div>
    </div>
  );
}

export default HarryPotterCards;