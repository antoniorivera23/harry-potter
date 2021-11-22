import React, {Fragment, useState} from 'react';

    return ( 

             
     const[personaje, actualizarPersonaje]= useState({
        nombre: '',
        cumpleaos: '',
        ojos:'',
        pelo:'',
        sintomas:''
    });

       //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        // console.log('escribiendo...');
        actualizarPersonaje({
            ...personaje,
            [e.target.name] : e.target.value
        })
    }
        <Fragment>
            <h2>Agrega un Personaje</h2>

            {error? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitPersonaje}
            >
                <label>NOMBRE</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={nombre}
                />

                <label>CUMPLEAÑOS</label>
                <input
                    type="text"
                    name="cumpleaos"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={cunpleaños}
                />

                <r>COLOR DE OJOS</label>
                <input
                    type="text"
                    name="ojos"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={ojos}
                />

                <label>COLOR DE PELO</label>
                <input
                    type="text"
                    name="pelo"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={pelo}
                />

              <option value="" disabled>
                              GENERO
                            </option>
                            <option value="mujer">Mujer</option>
                            <option value="hombre">Años</option>
                          </select>

                 <option value="" disabled>
                              POSICION
                            </option>
                            <option value="estudiante">Estudiante</option>
                            <option value="staff">Staff</option>
                          </select>
               <button
                    type="submit"
                    className="u-full-width button-primary"
               >GUARDAR</button>
                
            </form>
        </Fragment>
     );
}
 
export default AgregarPersonaje;