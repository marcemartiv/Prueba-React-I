import React, { useState, useEffect } from "react";
import Personajes from "./Personajes"

 let arrayOrdenar = [];

const MiApi = ({ nombrePersonaje }) => {

  const [personajes, setPersonajes] = useState([]); 
  
  useEffect(() => {
    consumirApi(nombrePersonaje);
    
  }, [nombrePersonaje]);


  const consumirApi = async (nombre) => {
  
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?&name=${nombre}&status=alive` );
      console.log(res)
     
      const datos = await res.json();

      arrayOrdenar = datos.results;

      setPersonajes(datos.results);

      console.log(datos.results)

    } catch (error) {
      console.log(error);
    } finally {
      
    }
  };
  function ascendente() {
    arrayOrdenar.sort(function (x, y) {
      if (x.name > y.name) {
        return 1;
      }
      if (x.name < y.name) {
        return -1;
      }
      return 0;
    });
    console.log(arrayOrdenar);
    setPersonajes([...personajes, arrayOrdenar]);

  }

  function descendente() {
    arrayOrdenar.sort(function (x, y) {
      if (x.name > y.name) {
        return -1;
      }
      if (x.name < y.name) {
        return 1;
      }
      return 0;
    });
    console.log(arrayOrdenar);
    setPersonajes([...personajes, arrayOrdenar]);

  }
  return (
    
    <div className="card-ordenar mb-3 mt-3">
    <div className="card-body">
      
      <div className="d-flex justify-content-between">
        <button className="btn mx-4" 
        onClick={ascendente}
        >
          Ascendente 
          <br></br>
        </button>
        <button
          className="btn"
          onClick={descendente}
        >
          Descendente 
        </button>
      </div>
    </div>
 
        <div className="row">
          {arrayOrdenar.map((item) => (
            <Personajes key={item.id} personajes={item} />
          ))}
        </div>
      </div>

      
    
  );
};

export default MiApi;
