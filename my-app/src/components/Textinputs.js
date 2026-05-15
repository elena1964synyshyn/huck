import { useState } from 'react';
import InputData from '../InputData';
import Checkbox from '../Checkbox';
import TextInputs from '../TextInputs';

const ControlledForms = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    checkbox: false,
  });

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleNameChange = event => {
    const name = event.target.value;
    setValue(prevState => ({ ...prevState, name }));
  };

  const handleEmailChange = event => {
    const email = event.target.value;
    setValue(prevState => ({ ...prevState, email }));
  };

  const handleCheckboxChange = event => {
    const checkbox = event.target.checked;
    setValue(prevState => ({ ...prevState, checkbox }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextInputs
          value={value}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
        />
        <Checkbox value={value} handleCheckboxChange={handleCheckboxChange} />
        <div style={{ padding: '20px' }}>
          <input style={{ width: '200px' }} type="submit" value="Submit Form" />
        </div>
      </form>
      <InputData value={value} />
    </>
  );
};

export default ControlledForms;
