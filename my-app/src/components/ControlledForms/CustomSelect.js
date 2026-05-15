const CustomSelect = ({ value, setValue }) => {
  const selectOptions = [
    { id: 1, value: 'option1' },
    { id: 2, value: 'option2' },
    { id: 3, value: 'option3' },
    { id: 4, value: 'option4' },
  ];

  const handleSelectChange = event => {
    console.log(event.target.value);

    const select = event.target.value;
    setValue(prevState => ({ ...prevState, select }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <label style={{ marginRight: '10px' }} htmlFor="select">
        Select:
      </label>
      <select
        id="select"
        name="select"
        value={value.select}
        onChange={handleSelectChange}
      >
        {selectOptions.map(option => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
