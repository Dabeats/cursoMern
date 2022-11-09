import mysql from "mysql"

const conexion = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    database:"usuarios"
})

conexion.connect((error) =>{
    if (!error) {
        console.log("base de datos conectada");
    } else {
        throw new error
    }
})

export default conexion