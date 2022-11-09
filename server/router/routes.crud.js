import { Router } from "express"
import {createUser, viewUser, updateUser} from "../controllers/crud.js"

const userRouter= Router()

userRouter.post('/registro',createUser)
userRouter.get('/consulta/:id',viewUser)
userRouter.put('/actualizar/:id',updateUser)

export default userRouter










