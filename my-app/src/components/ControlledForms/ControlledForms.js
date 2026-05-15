import { useState } from 'react';
import InputData from '../InputData';
import Checkbox from '../Checkbox';
import RadioButtons from './RadioButtons';
import CustomSelect from './CustomSelect';

const ControlledForms = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    checkbox: false,
    radio: '',
    select: 'option 1',
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
        <div style={{ padding: '20px' }}>
          <label style={{ marginRight: '10px' }} htmlFor="name">
            Name:
          </label>
          <input
            value={value.name}
            onChange={handleNameChange}
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div style={{ padding: '20px' }}>
          <label style={{ marginRight: '10px' }} htmlFor="email">
            Email:
          </label>
          <input
            value={value.email}
            onChange={handleEmailChange}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <Checkbox value={value} handleCheckboxChange={handleCheckboxChange} />
        <div style={{ padding: '20px' }}>
          <input style={{ width: '200px' }} type="submit" value="Submit Form" />
        </div>
      </form>
      <InputData value={value} />
      <RadioButtons value={value} setValue={setValue} />
      <CustomSelect value={value} setValue={setValue} />
    </>
  );
};

export default ControlledForms;
