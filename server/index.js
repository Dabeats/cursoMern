import express,{ json } from "express";
import cors from "cors";
import userRouter from "./router/routes.crud.js";

const port=3003
const app =express();

app.use(cors());
app.use(json());

app.use(userRouter)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})