import MiApi from "./components/MiApi";
import { useFormulario } from "./hooks/useFormulario";
import React, { useState } from "react";



function App() {

  const [nombrePersonaje, setNombrePersonaje] = useState("");

  const [inputs, handleChange, reset] = useFormulario({
    nombre: ""
  });
 
  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);

    setNombrePersonaje(nombre.trim().toLowerCase());
    reset();
  };
  
  return (
    <div className="container-fluid">

      
   
        <h4 className="text-center"> Rick And Morty Api</h4> 
    

      
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese personaje"
            className="form-control mb-3"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            
          />



        </form>
      </main> 

      
      <MiApi nombrePersonaje={nombrePersonaje} />

     

    </div>
  );
}

export default App;
