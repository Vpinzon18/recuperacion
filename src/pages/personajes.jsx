import React from "react";
import '../pages/personajes.css'
import Hook from "../hooks/hook";
import Button from 'react-bootstrap/Button';



const Personajes = () => {
    const { datos, pagina, Paginasig} = Hook('https://rickandmortyapi.com/api/character');

  return (
    <div className="principal">
        <div className="personajes">
            {datos.map(personaje => (
                <div className="carta" key={personaje.id}>
                    <img src={personaje.image} alt=""></img>
                    <div className="Informacion">
                        
                        <h2>{personaje.name}</h2>
                        <p>Estado{personaje.status}</p>
                        <p>Estado{personaje.status}</p>
                        <p>Especie{personaje.species}</p>
                        <p>Genero{personaje.type}</p>
                        <p>Genero{personaje.gender}</p>
                       
                    </div>
                </div>

            ))}
        </div>
        <div className="paginacion">
        <Button variant="outline-success" onClick={() => Paginasig('atras')}><h2>atras</h2></Button>{' '}
        <h2 className="nombrepagina">Pagina {pagina}</h2>
        <Button variant="outline-success" onClick={() => Paginasig('siguiente')}><h2>siguiente</h2></Button>{' '}
        </div>
        
      
    </div>
  )
}


export default Personajes;