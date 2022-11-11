import {Route, Routes} from "react-router-dom";
import Inicio from "./pages/Inicio";  
import Form from "./pages/Form";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/registro" element={<Form/>}/>
    </Routes>
  )
}

export default App 