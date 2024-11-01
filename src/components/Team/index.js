import React from 'react';
import './Team.css';
import Collaborators from '../Collaborators';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {

  // Destructuring -> Des-estructuración 
  const { title, primaryColor, id } = props.data;

  const { collaborators, collaboratorDelete, updateColor, likeCollaborator } = props;

  // Se actualiza con un paquete llamado hex-to-rgba 
  const obj = {
    backgroundColor: hexToRgba(primaryColor, 0.6),
  }

  return <div>
  { 
    collaborators.length > 0 &&
      <section className="team" style={ obj }>
        <input
          className='team-input-color'
          type='color'
          value={ primaryColor }
          onChange={ (event) => {
            updateColor(event.target.value, id);
          } }  // Se establece el color del fondo del equipo según el color del equipo
        />
      <h3 style={{ borderColor: primaryColor }}>{ title }</h3>
      <div className="collaborators">
        { 
          // Se envía cada colaborador a la componente Collaborators para que pueda mostrar sus detalles y eliminarlo si es necesario
          collaborators.map( ( collaborator, index ) => (
              <Collaborators 
                data={ collaborator }
                key={ index }
                primaryColor={ primaryColor }
                collaboratorDelete={ collaboratorDelete }  // Se envía la función para eliminar el colaborador al padre Team
                likeCollaborator={ likeCollaborator }  // Se envía la función para dar like al colaborador
              />
          ) )  // Se mapeará la lista de colaboradores y se mostrará cada uno en un div con su nombre
        }
      </div>
    </section>
  }
  </div>
}

export default Team;