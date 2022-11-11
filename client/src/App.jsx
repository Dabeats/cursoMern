import {Route, Routes} from "react-router-dom";
import Inicio from "./pages/Inicio";  
import ErrorPage from "./pages/ErrorPage";
import NavCrud from "./components/NavCrud";
import Formulario from "./pages/Formulario";

function App() {
  return(
    <> 
    <NavCrud/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/registro" element={<Formulario/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>

    </>
  )
}

export default App 