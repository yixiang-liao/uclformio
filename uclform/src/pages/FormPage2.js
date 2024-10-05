import React from 'react';
import DynamicForm from '../components/DynamicForm';

const FormPage2 = () => (
  // <DynamicForm apiUrl="https://wemedia.54ucl.com/formioopensources/projectestimate2" title="工程估價單2" />
  <DynamicForm apiUrl="http://127.0.0.1:8000/api/v1/projectestimate2" title="工程估價單2" />
);

export default FormPage2;