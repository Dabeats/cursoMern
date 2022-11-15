import { useEffect, useState } from 'react'
import { getUserRequest } from "../api/crudApi" 
import Tarjet from "../components/Tarjet"

function Inicio() {

const [users, setUsers] = useState([])

  useEffect(() => {
 
    async function loadUser() {
      const response = await getUserRequest()
      setUsers(response.data)
    }

   loadUser()
  }, [])
  
 
  return (
    <div>

      <h1>Usuarios</h1>

      {
        users.map(user => (
          <Tarjet user ={user} key={user.id}/>
        ))
      }

    </div>
  )
}

export default Inicio