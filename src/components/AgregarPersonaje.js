import React, {Fragment, useState} from 'react';

const AgregarPersonaje = ({crearPersonaje}) => {

    //Crear State de personajes
    const[personaje, actualizarPersonaje]= useState({
        nombre: '',
        cumpleaos: '',
        ojos:'',
        pelo:'',
        genero:'',
        posicion:'',
    });

    const [error, actualizarError] = useState(false)

     

    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        // console.log('escribiendo...');
        actualizarPersonaje({
            ...personaje,
            [e.target.name] : e.target.value
        })
    }

    //Extraer los valores 
    const { nombre, cumpleaos, ojos, pelo, genero, posicion} = personaje;

    //Cuando el usuario presiona agregar personaje
    const submitPersonaje = e =>{
        e.preventDefault();

        //Validar
        if(nombre.trim() === '' || cumpleaos.trim() === '' || ojos.trim() === ''){
            actualizarError(true);
            return;
        }

        //Eliminar el mensaje previo
        actualizarError(false);

        //Crear la personaje
        crearPersonaje(personaje);

        //Reiniciar el form
        actualizarPersonaje({
           nombre: '',
           cumpleaos: '',
           ojos:'',
           pelo:'',
           genero:'',
           posicion:'',    
        })
    }

    return ( 
        <Fragment>
            <h2>Agregar Personaje</h2>

            {error? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitPersonaje}
            >
                <label>NOMBRE</label>
                <br />
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={nombre}
                />
                <br /> <br />
                
                <label>CUMPLEAÑOS</label>
                <br />
                <input
                    type="text"
                    name="cumpleaos"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={cumpleaos}
                />
                <br /> <br/>

                <label>COLOR DE OJOS</label>
                <br />
                <input
                    type="text"
                    name="ojos"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={ojos}
                />
                <br /><br />

                <label>COLOR DE PELO</label>
                <br />
                <input
                    type="text"
                    name="pelo"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={pelo}
                />
                <br /><br />

                <label>GENERO</label>
                <br />
                <input
                    type="radio"
                    value="Mujer"
                    name="genero"
                    className="u-full-width"
                    onChange={actualizarState}
                    
                /> Mujer &nbsp;
                  <input
                    type="radio"
                    value="Hombre"
                    name="genero"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={genero}
                />Hombre
                <br />

                <label>POSICION</label>
                <br />
               <input
                    type="radio"
                    value="estudiante"
                    name="posicion"
                    onChange={actualizarState}
                    
                />Estudiante &nbsp;

                 <input
                    type="radio"
                    value="staff"
                    name="posicion"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={posicion}
                />Staff
                <br/><br/>
                

               <button
                    type="submit"
                    className="center btn btn-secondary btn-lg"
               >GUARDAR</button>
                
            </form>
        </Fragment>
     );
}
 
export default AgregarPersonaje;
