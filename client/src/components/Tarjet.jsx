import { deleteUserRequest } from "../api/crudApi";

function Tarjet({user}) {

  const handleDelete = async (id) =>{
    try {
      const response = await deleteUserRequest(id)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
      
  }

  return (
    <div>
            <h2>{user.nombre}</h2>
            <button onClick = {() => handleDelete(user.id)} >eliminar</button> 
            <button>actualizar</button> 
    </div>
  )
}

export default Tarjet