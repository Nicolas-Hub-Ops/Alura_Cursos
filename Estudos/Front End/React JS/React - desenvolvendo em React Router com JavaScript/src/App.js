import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Inicio</Link>
        <Link to="/sobremim">Sobre Mim</Link>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;