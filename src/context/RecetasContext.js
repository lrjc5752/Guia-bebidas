import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';



// Crear el Context
export const RecetasContext = createContext(); // es la referencia al Context


// Provider es donde se encuentran las funciones y states

 const RecetasProvider = (props) => {   // puede llevar cualquier nombre

        // crear el state del Context
        const[recetas, guardarRecetas] = useState([]);
        const [busqueda, buscarRecetas] = useState({
            nombre:'',
            categoria:''
        });
        const [consultar, guardarConsultar] = useState(false);


        const {nombre, categoria} = busqueda;

        // ejecuttar el llamado a la api
         useEffect (() => {

            if (consultar) {
                const obtenerRecetas = async () => {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                    const  resultado = await axios.get(url);
                    guardarRecetas(resultado.data.drinks);

                     // console.log(recetas.data.drinks);
                };
                 obtenerRecetas();
            }

         }, [busqueda, categoria, consultar, nombre]);
    return(
        <RecetasContext.Provider
            value= {{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );    
  
 };
export default RecetasProvider;