const RadioButtons = ({ value, setValue }) => {
  const handleRadioChange = event => {
    const radio = event.target.value;
    setValue(prevState => ({ ...prevState, radio }));
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <label style={{ marginRight: '10px' }} htmlFor="radio-button1">
          Radio1:
        </label>
        <input
          id="radio-button1"
          name="radio"
          value="radio1"
          onChange={handleRadioChange}
          checked={value.radio === 'radio1'}
          type="radio"
        />
      </div>

      <div style={{ padding: '20px' }}>
        <label style={{ marginRight: '10px' }} htmlFor="radio-button2">
          Radio2:
        </label>
        <input
          id="radio-button2"
          name="radio"
          value="radio2"
          onChange={handleRadioChange}
          checked={value.radio === 'radio2'}
          type="radio"
        />
      </div>
    </>
  );
};

export default RadioButtons;
