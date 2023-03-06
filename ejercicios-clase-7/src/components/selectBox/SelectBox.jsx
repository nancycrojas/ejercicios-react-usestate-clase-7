import { useState } from 'react';

export const SelectBox = () => {
  const [option, setOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
      <h2>Ejercicio 2</h2>
      <select value={option} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {option && <p>You selected {option}</p>}
    </>
  );
};
