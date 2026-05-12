const ControlledForms = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          value={value.name}
          onChange={handleNameChange}
          type="text"
          name="name"
          id="name"
        />

        <label htmlFor="email">Email:</label>
        <input
          value={value.email}
          onChange={handleEmailChange}
          type="text"
          name="email"
          id="email"
        />

        <input type="submit" value="Submit Form" />
      </form>

      <div>
        <p>
          firstName: <strong>{value.name}</strong>
        </p>
        <p>
          email: <strong>{value.email}</strong>
        </p>
      </div>
    </>
  );
};

export default ControlledForms;
