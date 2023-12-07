import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route 
                path='/' 
                element={
                  <>
                    <Pesquisa />
                    <UltimosLancamentos />
                  </>
                }
            />
            <Route 
                path='/favoritos' 
                element={
                  <>
                    <p>Favoritos</p>
                  </>
                }
            />
            <Route 
                path='/minhaestante' 
                element={
                  <>
                    <p>Minha Estante</p>
                  </>
                }
            />
            <Route 
                path='/categoria' 
                element={
                  <>
                    <p>Categoria</p>
                  </>
                }
            />
        </Routes>
    </BrowserRouter>
    </AppContainer>
  );
}

export default App
