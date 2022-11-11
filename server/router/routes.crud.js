import { Router } from "express"
import {createUser, viewUser, updateUser, deleteUser} from "../controllers/crud.js"

const userRouter= Router()

userRouter.post('/registro',createUser)
userRouter.get('/consulta/:id',viewUser)
userRouter.put('/actualizar/:id',updateUser)
userRouter.delete('/eliminar/:id',deleteUser)

export default userRouter










