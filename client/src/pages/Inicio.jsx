import { useEffect, useState } from "react";
import { getUserRequest } from "../api/crudApi";


function Inicio() {

  const [users, setUsers] = useState([])

  useEffect(()=>{

    async function loadUser() {
      const response =await getUserRequest()
      setUsers(response.data)
      console.log(users);
      console.log(response.data);
    }
    loadUser()
  },[])

  return (
    <div>
      <h1>Usuarios</h1>
     
    </div>

  );
}

export default Inicio