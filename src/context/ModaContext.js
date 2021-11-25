import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// crear el context

export const ModaContext = createContext(); // es la referencia al Context


// Provider es donde se encuentran las funciones y states

 const ModaProvider = (props) => {   // puede llevar cualquier nombre

        // crear el state del provider
        const[idreceta, guardarIdReceta] = useState(null);
        const [informacion, guardarReceta] = useState({});

       // una vez que tenemos una receta llamar la api


        // // ejecuttar el llamado a la api
          useEffect (() => {


             const obtenerReceta = async () => {
                 if (!idreceta) return;

             const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
             const  resultado = await axios.get(url);
             guardarReceta(resultado.data.drinks[0]);

             console.log(resultado.data.drinks[0]);
            };
            obtenerReceta();

          }, [idreceta]);

    return(
        <ModaContext.Provider
            value= {{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children} 
        </ModaContext.Provider>
    );    
  
 };
export default ModaProvider;