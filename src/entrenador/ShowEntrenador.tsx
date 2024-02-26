import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:3001/entrenadores/'


const ShowEntrenador = () => {
    
    const [entrenadores, setEntrenadores] = useState([])

    useEffect( ()=>{
        getEntrenadores()
    },[])

    //procedimineto para mostrar todos los blogs
    const getEntrenadores = async () => {
        const res = await axios.get(URI)
        setEntrenadores(res.data)
        console.log( res )
    }

    //procedimineto para eliminar un blog
    const deleteEntrenador = async (id) => {
       await axios.delete(`${URI}${id}`)
       getEntrenadores()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus">+</i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { entrenadores.map ( (entrenador, index) => (
                                <tr key={ index }>
                                    <td> { entrenador.nombre } </td>
                                    <td> { entrenador.apellidos } </td>
                                    <td>
                                        <Link to={`/edit/${entrenador._id}`} className='btn btn-info'><i className="fas fa-edit">Editar</i></Link>
                                        <button onClick={ ()=>deleteEntrenador(entrenador._id) } className='btn btn-danger'><i className="fas fa-trash-alt">Eliminar</i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default ShowEntrenador