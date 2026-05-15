const RadioButton = ({ id, label, value, onChange, type = 'text' }) => {
  return (
    <div>
      <input id={id} type={type} value={value} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
