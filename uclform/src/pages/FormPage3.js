import React from 'react';
import DynamicForm from '../components/DynamicForm';

const FormPage3 = () => {

  return (
    <DynamicForm 
      apiUrl="http://127.0.0.1:8000/api/v1/entrust" 
      title="委外發包(含運輸及人工)" 
    />
  );
};

export default FormPage3;
