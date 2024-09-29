import React, { useState, useEffect } from 'react';
import { Form } from '@formio/react';

const FormioComponent = () => {
  const [form1, setForm1] = useState(null);
  const [form2, setForm2] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    // 獲取第一個表單
    fetch('https://wemedia.54ucl.com/formioopensources/projectestimate1')
      .then(response => response.json())
      .then(data => setForm1(data))
      .catch(error => console.error('Error fetching form 1:', error));

    // 獲取第二個表單
    fetch('https://wemedia.54ucl.com/formioopensources/projectestimate2')
      .then(response => response.json())
      .then(data => setForm2(data))
      .catch(error => console.error('Error fetching form 2:', error));
  }, []);

  const handleFormChange = (event) => {
    setSelectedForm(event.target.value === 'form1' ? form1 : form2);
  };

  return (
    <div className="p-4">
      <select onChange={handleFormChange} className="mb-4 p-2 border rounded">
        <option value="">選擇表單</option>
        <option value="form1">表單 1</option>
        <option value="form2">表單 2</option>
      </select>
      {selectedForm && (
        <Form
          form={selectedForm}
          onSubmit={(submission) => console.log(submission)}
        />
      )}
    </div>
  );
};

export default FormioComponent;