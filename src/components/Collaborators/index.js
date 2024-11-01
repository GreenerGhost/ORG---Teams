import React from "react";
import "./Collaborators.css";
import { IoMdCloseCircle, IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const Collaborators = (props) => {

  const { name, position, photo, id, fav } = props.data;
  const { primaryColor, collaboratorDelete, likeCollaborator } = props;

  // Para poder instalar iconos en React se puede realizar utilizando el siguiente comando
  // npm install react-icons --save

  return (
    <div className="collaborator">
      <IoMdCloseCircle className="collaborator-delete" onClick={ () => collaboratorDelete(id) }/>
      <div 
        className="collaborator-header"
        style={{ backgroundColor: primaryColor }}  // Se establece el color del fondo según el color del equipo
      >
        <img 
          src={ photo }
          className="collaborator-img" 
          alt={ name }
        />
      </div>
      <div className="collaborator-info">
        <h4>{ name }</h4>
        <h5>{ position }</h5>
        { fav ? <IoMdHeart color="red" onClick={ () => likeCollaborator(id) }/> : <IoIosHeartEmpty onClick={ () => likeCollaborator(id) }/> }
      </div>
    </div>
  )
}

export default Collaborators;