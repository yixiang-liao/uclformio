import React from 'react';
import DynamicForm from '../components/DynamicForm';

const FormPage1 = () => (
  <div>
    {/* <DynamicForm apiUrl="https://wemedia.54ucl.com/formioopensources/projectestimate1" title="工程估價單1" /> */}
    <DynamicForm apiUrl="http://127.0.0.1:8000/api/v1/projectestimate1" title="工程估價單1" />
  </div>
);

export default FormPage1;
