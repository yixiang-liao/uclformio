import React, { useState, useEffect } from 'react';
import { Form } from '@formio/react';
import { Container, Card, Spinner, Button } from 'react-bootstrap';

const FormioForm1 = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch('https://wemedia.54ucl.com/formioopensources/projectestimate1')
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.error('Error fetching form 1:', error));
  }, []);

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Header>
          <h2>表單 1</h2>
        </Card.Header>
        <Card.Body>
          {form ? (
            <Form
              form={form}
              onSubmit={(submission) => console.log('表單 1 提交:', submission)}
              options={{
                builder: {
                  customClass: 'bootstrap-form' // 使用 Bootstrap 样式类
                }
              }}
            />
          ) : (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
              <p className="mt-2">正在加載表單...</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FormioForm1;
