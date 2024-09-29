import React, { useEffect, useState } from 'react';

const DynamicForm2 = ({ url }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchFormData();
  }, [url]);

  const renderComponent = (component) => {
    switch (component.type) {
      case 'panel':
        return (
          <div key={component.key} className="border p-4 my-2">
            <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
            {component.components.map(renderComponent)}
          </div>
        );
      case 'table':
        return (
          <table key={component.key} className="w-full border-collapse">
            <tbody>
              {component.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">
                      {cell.components.map(renderComponent)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'fieldset':
        return (
          <fieldset key={component.key}>
            <legend>{component.legend}</legend>
            {component.components.map(renderComponent)}
          </fieldset>
        );
      case 'columns':
        return (
          <div key={component.key} className="flex">
            {component.columns.map((column, index) => (
              <div key={index} className={`w-1/${component.columns.length}`}>
                {column.components.map(renderComponent)}
              </div>
            ))}
          </div>
        );
      case 'radio':
        return (
          <div key={component.key}>
            <label>{component.label}</label>
            {component.values.map((value) => (
              <div key={value.value}>
                <input type="radio" id={value.value} name={component.key} value={value.value} />
                <label htmlFor={value.value}>{value.label}</label>
              </div>
            ))}
          </div>
        );
      case 'checkbox':
        return (
          <div key={component.key}>
            <input type="checkbox" id={component.key} />
            <label htmlFor={component.key}>{component.label}</label>
          </div>
        );
      case 'select':
        return (
          <div key={component.key}>
            <label>{component.label}</label>
            <select>
              {component.data.values.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case 'number':
        return (
          <div key={component.key}>
            <label>{component.label}</label>
            <input type="number" placeholder={component.placeholder} />
          </div>
        );
      case 'panel':
        return (
          <div key={component.key} className="border p-4 my-2">
            <h3>{component.title}</h3>
            {component.components.map(renderComponent)}
          </div>
        );
      case 'table':
        return (
          <table key={component.key} className="w-full border-collapse">
            <tbody>
              {component.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">
                      {cell.components.map(renderComponent)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'htmlelement':
        return (
          <div key={component.key} dangerouslySetInnerHTML={{ __html: component.content }} />
        );
      case 'textfield':
        return (
          <div key={component.key}>
            <label>{component.label}</label>
            <input type="text" placeholder={component.placeholder} />
          </div>
        );
      case 'button':
        return (
          <button key={component.key} type={component.action === 'submit' ? 'submit' : 'button'}>
            {component.label}
          </button>
        );
      default:
        console.warn(`Unsupported component type: ${component.type}`);
        return null;
    }
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <form className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{formData.title}</h2>
      {formData.components.map(renderComponent)}
    </form>
  );
};

export default DynamicForm2;