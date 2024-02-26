import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3001/entrenadores/'

const EditEntrenador = () => {
    const [nombre, setNombre] = useState('')    
    const [apellidos, setApellidos] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
            nombre: nombre,
            apellidos: apellidos
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(`${URI}${id}`)
        setNombre(res.data.nombre)
        setApellidos(res.data.apellidos)
    }

    return (
        <div>
        <h3>Edit Entrenador</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Apellidos</label>
                <textarea
                    value={apellidos}
                    onChange={ (e)=> setApellidos(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Actualiza</button>
        </form>
    </div>
    )

}

export default EditEntrenador