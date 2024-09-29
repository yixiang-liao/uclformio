import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormPage1 from '../pages/FormPage1';
import FormPage2 from '../pages/FormPage2';
import DynamicForm from '../components/DynamicForm';
import DynamicForm2 from '../components/DynamicForm2';
import FormioComponent from '../pages/FormioComponent';
import FormioForm1 from '../pages/FormioForm1';
import FormioForm2 from '../pages/FormioForm2';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/form1" element={<FormPage1 />} />
      <Route path="/form2" element={<FormPage2 />} />
      {/* <Route path="/form" element={<FormioComponent />} /> */}
      {/* <Route path="/FormioForm1" element={<FormioForm1 />} />
      <Route path="/FormioForm2" element={<FormioForm2 />} /> */}
      {/* <Route path="/form1" element={<DynamicForm url="https://wemedia.54ucl.com/formioopensources/projectestimate1" />} />
      <Route path="/form2" element={<DynamicForm url="https://wemedia.54ucl.com/formioopensources/projectestimate2" />} /> */}
      {/* <Route path="/form1" element={<DynamicForm2 url="https://wemedia.54ucl.com/formioopensources/projectestimate1" />} />
      <Route path="/form2" element={<DynamicForm2 url="https://wemedia.54ucl.com/formioopensources/projectestimate2" />} /> */}
    </Routes>
  );
};

export default AppRoutes;
