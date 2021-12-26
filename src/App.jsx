
import {useState, useEffect} from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {  

  // DECLARAMOS UN HOOK PARA ALMACENAR LOS PACIENTES 
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerPacientesLocalStorage = () => {
      // JSON.parse() - convierte un string a objeto
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? []; //sino hay nada agrega []
      setPacientes(pacientesLocalStorage);
    }

    obtenerPacientesLocalStorage();

  },[]); //se ejecuta una sola vez


  // CUANDO HAYA UN CAMBIO EN PACIENTES 
  useEffect(() => {
    // JSON.stringify() - convierte un array a string
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacienteActualizado = pacientes.filter(item => item.id !== id);
    setPacientes(pacienteActualizado);
  }

  return(
    <>
    <Header />
    <div className="m-5 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente} //este paciente se usa para editar, cuando damos en editar este se llena
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
    </div>
   </>
 )
}

export default App
