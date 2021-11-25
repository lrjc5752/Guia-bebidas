import React, {useContext, useState} from 'react';
import { CategoriaContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const {categorias} = useContext(CategoriaContext);
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

   //console.log(categorias);

   // funcion para leer los contenidos
   const obtenerDatosReceta = evento => {
        guardarBusqueda({
            ...busqueda, [evento.target.name] : evento.target.value
        });
   };

   
  return (
    <form 
    className='col-12'
    onSubmit= {evento => {
        evento.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
    }}
    >
        <fieldset className='text-center'>
            <legend>Busca bebidas por Categoria o Ingredientes</legend>
        </fieldset>

        <div className='row mt-4'>
            <div className='col-md-4'>
                <input 
                    name='nombre'
                    className='form-control'
                    type='text'
                    placeholder='Buscar por Ingrediente'
                    onChange={obtenerDatosReceta}
                />
            </div>
            <div className='col-md-4'>
                <select
                    className='form-control'
                    name='categoria'
                    onChange={obtenerDatosReceta}
                >
                    <option value=''>--Selecciona Categoria--</option>
                    {categorias.map(categoria =>(
                        <option 
                        key={categoria.strCategory}
                        value={categoria.strCategory}
                        
                       >{categoria.strCategory}</option>
                    ))}
                </select>
            </div>
            <div className='col-md-4'>
                <input
                    type='submit'
                    className='btn btn-block btn-primary'
                    value='Buscar Bebidas'
                
                />

            </div>
        </div>
    </form>
  );
};

export default Formulario;