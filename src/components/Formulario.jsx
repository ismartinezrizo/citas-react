
import {useState, useEffect} from 'react';

import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
    // HOOKS
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    // PARA CONTROLAR EL ERROR
    const [error, setError] = useState(false);

    // EJECUTATE CON EL PACIENTE ESTE LISTO, O HAYA CAMBIADO
    useEffect(()=>{
        // ME TRAE TODOS LOS KEYS - Object.keys(paciente).length > 0
        // como es un objeto - podemos comprobar si tiene algo con Object.values(paciente).length > 0
        if(Object.values(paciente).length > 0){
            // console.log(paciente);
            const {nombre,propietario,email,alta,sintomas} = paciente;
            setNombre(nombre);
            setPropietario(propietario);
            setEmail(email);
            setAlta(alta);
            setSintomas(sintomas);
        }
    },[paciente]);
        
    // CUANDO DAMOS CLICK EN EL BOTON AGREGAR      
    const handleSubmit = (e) => {
        e.preventDefault();
        // VALIDAR EL FORMULARIO - se genera como arreglo para tener acceso al metodo includes
        if( [nombre,propietario,email,alta,sintomas].includes('') ){
           setError(true); 
           return;//Sale de la funcion         
        }     
        
        setError(false);

        const generarId = () => {
            return Math.random().toString().substring(2) + Date.now().toString();
        }

        // CONSTRUIMOS EL OBJETO
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas            
        };

        // SI EXISTE EN PACIENTE EL ID EDITAR
        if(paciente.id){
        //    EDITANDO EL REGISTRO
            objetoPaciente.id = paciente.id;
            // recorremos los pacientes, verificamos si el id es igual al id paciente, retornamos el objetoPaciente sino retornamos el item de pacientes
            const pacientesActualizados = pacientes.map( item => item.id === paciente.id ? objetoPaciente : item ); 
            // actualizamos los pacientes, le pasamos el paciente actual
            setPacientes(pacientesActualizados);

            // regresamos a un objeto vacio para no almacenarlo en memoria
            setPaciente({});

        }else{
            // NUEVO REGISTRO
            objetoPaciente.id = generarId(); //genera el id
            // MODIFICAMOS EL VALOR DE PACIENTES CON EL NUEVO VALOR - SETPACIENTES VIENE DE APP
            // [...COPIA, Y AGREGA EL NUEVO ARRAY]
            setPacientes([...pacientes, objetoPaciente]);
        }
    
        // REINICIA EL FORMULARIOS
        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }

    return (
        <div className="md:w-2/5">
            <h2 className="text-center text-xl font-bold">Seguimiento pacientes</h2>
            <p className="text-center">Añade pacientes y <span className="text-indigo-600">Administralos</span></p>
          
            <form action="#" className="bg-white p-5 rounded-md mt-5 mb-10 shadow-lg" onSubmit={handleSubmit} >        
                
                {error && <Error mensaje='Todos los campos son obligatorios'/>}

               <div className="mt-5">
                <label htmlFor="nombre" className="font-bold">NOMBRE MASCOTA</label>
                <input className="block w-full border-2 p-2" type="text" name="nombre" id="nombre" placeholder="Nombre de la Mascota" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
               </div>

               <div className="mt-5">
                <label htmlFor="nombrePropietario" className="font-bold">NOMBRE PROPIETARIO</label>
                <input className="block w-full border-2 p-2" type="text" name="nombrePropietario" 
                id="nombrePropietario" placeholder="Nombre del Propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
               </div>

               <div className="mt-5">
                <label htmlFor="email" className="font-bold">EMAIL</label>
                <input className="block w-full border-2 p-2" type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
               </div>

               <div className="mt-5">
                <label htmlFor="alta" className="font-bold">ALTA</label>
                <input className="block w-full border-2 p-2" type="date" name="alta" id="alta" placeholder="Email" value={alta} onChange={(e) => setAlta(e.target.value)}/>
               </div>

               <div className="mt-5">
                <label htmlFor="sintomas" className="font-bold">SINTOMAS</label>
                <textarea className="block w-full border-2 p-2" name="sintomas" id="sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
               </div>

               <input type="submit" className="cursor-pointer mt-5 bg-indigo-600 hover:bg-indigo-800 text-white font-bold p-3 w-full rounded-xl" value={paciente.id ? 'EDITAR PACIENTE' : 'AGREGAR PACIENTE' } />

            </form>            
        </div>
    )
}

export default Formulario;
