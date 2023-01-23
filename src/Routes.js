import PaginaDashboard from "./pages/dashboard/PaginaDashboard.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Rotas() {
  return (
    <div className="Rotas">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rotas;