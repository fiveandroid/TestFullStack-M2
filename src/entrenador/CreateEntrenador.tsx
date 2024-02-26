import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:3001/entrenadores/'

const CreateEntrenador = () => {
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, apellidos:apellidos})
        navigate('/')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Apellidos</label>
                    <textarea
                        value={apellidos}
                        onChange={ (e)=> setApellidos(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Guardar</button>                  
           </form>
        </div>
    )
}

export default CreateEntrenador