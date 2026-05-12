import { useRef } from 'react';

const UncontrolledForms = () => {
  const formRef = useRef(null);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formRef.current.email.value);
    console.log(formRef.current.firstName.value);

    formRef.current.reset();
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="firstName"> Name:</label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" />
      <input type="submit" value="Submit Form" />
    </form>
  );
};
export default UncontrolledForms;
