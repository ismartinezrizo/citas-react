
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const {nombre,propietario,email,alta,sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Desea Eliminar el paciente?');
        if(respuesta){
            // mandamos a llamar a la funcion eliminarPaciente, creada en APP
            eliminarPaciente(id);           
        }  
    }

    return (
        <div className="bg-white p-5 rounded-md mb-3 m-5 paciente">           
            <p className="font-bold uppercase">Nombre: <span className="font-normal capitalize">{nombre}</span></p>
            <p className="font-bold uppercase">Propietario: <span className="font-normal capitalize">{propietario}</span></p>
            <p className="font-bold">EMAIL: <span className="font-normal">{email}</span></p>
            <p className="font-bold uppercase">Alta: <span className="font-normal capitalize">{alta}</span></p>
            <p className="font-bold uppercase">Sintomas: <span className="font-normal capitalize">{sintomas}</span></p>           
            <div className="flex justify-between">
                
                {/* con el arrow function de editar esperamos que den click sino fuera arrow function se ejecutaria la funcion */}
                <button className="bg-indigo-600 hover:bg-indigo-800 text-center font-bold text-white py-3 px-5 mt-5 rounded-xl uppercase" onClick={() => setPaciente(paciente)}>Editar</button>

                <button className="bg-red-600 hover:bg-red-800 text-center font-bold text-white py-3 px-5 mt-5 rounded-xl uppercase" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
       
    )
}

export default Paciente;
