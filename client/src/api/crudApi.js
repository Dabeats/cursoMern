import axios from "axios";

export const deleteUserRequest = async (id) =>  
    await axios.get(`http://localhost:3003/eliminar/${id}`);

export const getUserRequest = async () =>
    await axios.get('http://localhost:3003/consulta');

export const createUserRequest = async (user) =>
    await axios.post('http://localhost:3003/registro', user);

    

