import React from 'react';
import './Button.css';

export default function index( props ) {
  return (
    <button className='button'>
      { props.title }
    </button>
  )
}
