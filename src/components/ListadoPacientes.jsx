
import { useEffect } from 'react';

import Paciente from './Paciente';

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
    // useEffect(() => {
    //    if(pacientes.length > 0){
    //     console.log('Nuevo paciente');
    //    }
    // }, [pacientes]);

    return (
        // h-screen overflow-y-scroll - para el scroll
        <div className="md:w-3/5 h-screen overflow-y-scroll">            
            {pacientes.length > 0 ? (
                <div>
                    <h2 className="text-center text-xl font-bold">Listado Pacientes</h2>
                    <p className="text-center">Administra tus <span className="text-indigo-600">Pacientes y Citas</span></p> 
                
                    {/* RECORREMOS LOS PACIENTES Y MOSTRAMOS EL PACIENTE, DEPENDIENDO DE LOS ITEMS EN LOS PACIENTES
                    SIEMPRE QUE VAYAMOS A MOSTRAR UN LISTADO USANDO MAP DEBEMOS TENER UN KEY UNICO
                    */}
                    { pacientes.map( paciente => <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} /> ) }     
                </div>                  
            ):(
               <div>
                    <h2 className="text-center text-xl font-bold">NO HAY PACIENTES</h2>
                    <p className="text-center">Comienza agregando pacientes <span className="text-indigo-600">y aparacerán en este lugar</span></p>    
               </div>
            )}

        </div>
    )
}

export default ListadoPacientes;
