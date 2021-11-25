import React from 'react';
import Header from './components/Header';
import Formulario  from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/ListaRecetas';
import ModaProvider from './context/ModaContext';


function App() {
  return (
  //  <Fragment>

      <CategoriasProvider>
        <RecetasProvider>
          <ModaProvider>
              <Header/>

              <div className='container mt-5'>
                <div className='row'>
                    <Formulario/>
                </div>
                <ListaRecetas/>
              </div>
              
          </ModaProvider>
        </RecetasProvider>
      </CategoriasProvider>

    // </Fragment>

  );
}

export default App;
