import React from 'react';
import './OptionsList.css';

export default function OptionsList(props) {

  // Método map -> arreglo.map
  /*
  arreglo.map((equipo, index) => {
    return (
      <option key={index} value={index}>{ equipo }</option>
    )
    })
  */ 

  const handleChange = (event) => {
    props.setValue(event.target.value);
  }

  return (
    <div className='options-list'>
      <label>Equipos</label>
      <select
        value={props.value}      // Se le asigna el valor de value, en este caso es vacío y por lo tanto se selecciona la primera opción
        onChange={handleChange}  // Se llama al método handleChange cada vez que se cambia el valor del select
      >
        <option 
          value=""
          disabled
          defaultValue=""
          hidden
        >Seleccionar un equipo</option>  // Primera opción vacía para que no aparezca nada cuando se carga la página
        { props.teams.map( (team, index) => {
          return <option key={ index } value={ team }>{ team }</option>
        } ) } // se hace un recorrido por todo el arreglo, asignando un valor por medio del index y el nombre del equipo del arreglo
      </select>
    </div>
  )
}
