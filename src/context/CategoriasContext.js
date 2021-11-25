import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

// Crear el Context
export const CategoriaContext = createContext(); // es la referencia al Context


// Provider es donde se encuentran las funciones y states

 const CategoriasProvider = (props) => {   // puede llevar cualquier nombre

        // crear el state del Context
        const [categorias, guardarCategorias] = useState([]);

        // ejecuttar el llamado a la api
        useEffect (() => {
            const obtenerCategorias = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
                
                //www.thecocktaildb.com/api/json/v1/1/list.php?c=list
                // www.thecocktaildb.com/api/json/v1/1/list.php?g=list
                // www.thecocktaildb.com/api/json/v1/1/list.php?i=list
                // www.thecocktaildb.com/api/json/v1/1/list.php?a=list
                const  categorias = await axios.get(url);

                guardarCategorias(categorias.data.drinks);
               // console.log(categorias.data.drinks);
            };
            obtenerCategorias();
        }, []);

    return(
        <CategoriaContext.Provider
            value= {{
                categorias
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    );    
  
 };
export default CategoriasProvider;