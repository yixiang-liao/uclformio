import React from 'react';
import DynamicForm from '../components/DynamicForm';

const FormPage2 = () => (
  // <DynamicForm apiUrl="https://wemedia.54ucl.com/formioopensources/projectestimate2" title="工程估價單2" />
  <DynamicForm apiUrl="http://127.0.0.1:8000/api/v1/projectestimate2" title="工程估價單1" />
);

export default FormPage2;

// import React, { useEffect, useState } from 'react';
// import DynamicForm from '../components/DynamicForm';

// const FormPage2 = () => {
//   const [formSchema, setFormSchema] = useState(null);

//   useEffect(() => {
//     fetch('../json/projectestimate2.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setFormSchema(data);
//       })
//       .catch((error) => {
//         console.error('Error loading form schema:', error);
//       });
//   }, []);

//   return formSchema ? (
//     <DynamicForm formSchema={formSchema} title="工程估價單2" />
//   ) : (
//     <p>Loading...</p>
//   );
// };

// export default FormPage2;
