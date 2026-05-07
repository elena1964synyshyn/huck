const PersonListitem = ({ person }) => {
  return (
    <div
      style={{ backgroundColor: person.color, padding: 10, marginBottom: 10 }}
    >
      <p>Ім'я: {person.name}</p>
      <p>Вік: {person.age}</p>
    </div>
  );
};

export default PersonListitem;
