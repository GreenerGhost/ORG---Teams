import React from 'react';
import { useState } from 'react';
import "./Form.css";
import Field from '../Field';
import OptionsList from '../OptionsList/OptionsList';
import Button from '../Button';

const Form = (props) => {

  // Estados para controlar los valores de los inputs
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");


  // Registrar equipo
  const [teamTitle, setTeamTitle] = useState("");

  // Registrar color de equipo
  const [teamColor, setTeamColor] = useState("");

  const { collaboratorRecord, teams, createTeam } = props;

  const handleShipping = (event) => {
    event.preventDefault();
    
    let dataSent = {
      name,
      position,
      photo,
      team
    }
    
    // Lógica para enviar los datos al backend
    collaboratorRecord(dataSent);
  };

  const handleTeamCreation = (event) => {
    event.preventDefault();
    
    let dataSent = {
      title: teamTitle,
      primaryColor: teamColor
    }
    
    // Lógica para enviar los datos al backend
    createTeam(dataSent);
  };

  return <section className="formulario">
    <form onSubmit={ handleShipping } >
      <h2>Rellena el formulario para crear el colaborador</h2>
      <Field 
        title="Nombre" 
        placeholder="Ingresar nombre del colaborador"
        required={ true }
        value={ name }
        setValue={ setName }
      />
      <Field 
        title="Puesto" 
        placeholder="Ingresar puesto del colaborador"
        required
        value={ position }
        setValue={ setPosition }
      />
      <Field 
        title="Foto" 
        placeholder="Ingresar link de la foto del colaborador"
        value={ photo }
        setValue={ setPhoto }
      />
      <OptionsList
        teams={ teams }  // Se pasa el arreglo de equipos al componente OptionsList
        value={ team }
        setValue={ setTeam }
      />
      <Button title="Crear"/>
    </form>
    <form onSubmit={ handleTeamCreation } >
      <h2>Rellena el formulario para crear el equipo</h2>
      <Field 
        title="Titulo" 
        placeholder="Ingresar nombre del equipo"
        required={ true }
        value={ teamTitle }
        setValue={ setTeamTitle }
      />
      <Field 
        title="Color" 
        placeholder="Ingresar el color del equipo en hexadecimal"
        required
        value={ teamColor }
        setValue={ setTeamColor }
        type="color" 
      />
      <Button title="Registrar equipo"/>
    </form>
  </section>
}

export default Form;