import conexion from "../database/db.js";

export const createUser = async (req, res) =>{
    let {id,nombre,password} = req.body

    conexion.query('INSERT INTO persona (id,nombre,password) VALUES (?, ?, ?)',
    [id,nombre,password],
    (error, rows) =>{
        if (rows) {
            return res.json({data:"INSERT_OK"})
        }else{
            return res.json({data:"error",error})
        }
    })
}

export const viewUser = async (req, res) =>{
    conexion.query('SELECT * FROM persona ',
    (error, rows) =>{
        if(rows){
            res.json(rows)
        }else{
            res.json({data:"error",error})
        }
    })
}

export const updateUser = async (req, res) =>{
    let {nombre,password} = req.body
    conexion.query('UPDATE persona SET nombre = ?, password = ? WHERE id = ?',
    [nombre,password,req.params.id],
    (error, rows) =>{
        if (rows) {
            return res.json({data:"update"})
        }else{
            return res.json({data:"error",error})
        }
    })
}

export const deleteUser = async (req, res) =>{
    
    const [result] = conexion.query('DELETE FROM persona WHERE id = ?',
    [req.params.id]);
    
        if(result.affectedRorws == 0){
            return res.status(404).json({message:"paila"})
        }else{
            return res.status(204) 
        }
    
}
