import conexion from "../database/db.js";

export const createUser = async (req, res) =>{
    let {id,nombre,password} = req.body

    conexion.query('INSERT INTO persona (id,nombre,password) VALUES (?, ?, ?)',
    [id,nombre,password],
    (error, rows) =>{
        if (rows) {
            return res.json({data:"insert ok"})
        }else{
            return res.json({data:"error",error})
        }
    })
}

export const viewUser = async (req, res) =>{
    conexion.query('SELECT * FROM persona WHERE id = ?',[req.params.id],
    (error, rows) =>{
        if(rows){
            res.json({data:rows})
        }else{
            res.json({data:"error",error})
        }
    })
}

export const updateUser = async (req, res) =>{
    let {nombre,password} = req.body
    let id = req.params.id
    conexion.query('UPDATE persona SET nombre = ?, password = ? WHERE id = ?',
    [nombre,password,id],
    (error, rows) =>{
        if (rows) {
            return res.json({data:"update"})
        }else{
            return res.json({data:"error",error})
        }
    })
}
