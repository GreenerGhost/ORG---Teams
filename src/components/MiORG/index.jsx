import React from 'react';
import './MiORG.css';

export default function MiOrg(props) {

  // Hooks -> useState
  // const [nombreVariable, funciónActualiza] = useState(valorInicial)

  return (
    <section className='orgSection'>
      <h3 className='title'>Mi organización</h3>
      <img 
        src="/img/add.png" 
        alt="add" 
        onClick={ props.changeShowForm }  // Añadir evento click al botón
      />
    </section>
  )
}
