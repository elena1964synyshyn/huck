const Checkbox = ({ value, handleCheckboxChange }) => {
  return (
    <div style={{ padding: '20px' }}>
      <label style={{ marginRight: '10px' }} htmlFor="Checkbox">
        Checkbox
      </label>
      <input
        checked={value.checkbox}
        onChange={handleCheckboxChange}
        type="checkbox"
        name="Checkbox"
        id="Checkbox"
      />
    </div>
  );
};

export default Checkbox;
