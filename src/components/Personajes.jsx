import React from "react";

const Personajes = ({ personajes }) => {

  const { name, species, image, location } = personajes;

  return (
    <> 
       
      <div className="col col-md-6 col-lg-3 mb-3 d-flex justify-content-center bg-warning">
        <div className="card-body ">
          <div className="overflow-auto">
              <img src={image} alt={`imagen-${name}`} className="img-fluid-top" />
          </div>
          
          <div className="card-body">
            <h5>{`Nombre: ${name}`}</h5>
            <p>{`Especie: ${species}`}</p>
            <p>{`Ubicación: ${location.name}`}</p>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Personajes;