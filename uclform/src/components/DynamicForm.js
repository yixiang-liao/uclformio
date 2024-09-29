
import React from 'react'
import { Form } from 'react-formio';
import 'formiojs/dist/formio.full.css';

const DynamicForm = ({apiUrl}) => {
  return (
    <div className='formio-form'>
      <Form src={apiUrl} className='formio-form'/>
    </div>
  )
}

export default DynamicForm
