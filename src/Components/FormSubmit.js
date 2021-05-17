import React from 'react'
import { Link } from 'react-router-dom'
import './FormSubmit.css'

function FormSubmit({ name, type, onClick }) {
  return (
     <button className='formSubmit' type={type} >
      {name}
    </button>
  )
}

export default FormSubmit