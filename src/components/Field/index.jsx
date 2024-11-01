import React from 'react';
import './Field.css';

export default function Field(props) {
  
  // Destructuring
  const { type = "text" } = props;
  

  // const modifiedPlaceholder = props.placeholder + "...";
  const modifiedPlaceholder = `${props.placeholder}...`;

  const handleChange = (event) => {
    //console.log(event.target.value);  // Para ver el valor del input en consola
    props.setValue(event.target.value);
  }

  return (
    <div className='field'>
      <label htmlFor="">{ props.title }</label>
      <input 
        placeholder={ modifiedPlaceholder } 
        required={ props.required }
        value={ props.value }
        onChange={handleChange}
        type={ type }
      />
    </div>
  )
}
