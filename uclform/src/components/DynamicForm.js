
// import React , { useEffect, useRef } from 'react'
// import { Form } from 'react-formio';
// import 'formiojs/dist/formio.full.css';

// const DynamicForm = ({apiUrl}) => {
//   return (
//     <div className='formio-form'>
//       <Form src={apiUrl} className='formio-form'/>
//     </div>
//   )
// }

// export default DynamicForm

import React, { useEffect, useRef } from 'react';
import { Form } from 'react-formio';
import 'formiojs/dist/formio.full.css';
import Formio from 'formiojs/Formio';

const DynamicForm = ({ apiUrl, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className='formio-form'>
        <Form src={apiUrl} className='formio-form'/>
      </div>
    </div>
  );
};

export default DynamicForm;
