import { PERSONS } from '../utils';
import PersonListitem from '../PersonListitem/PersonListitem';
const styles = {
  container: { padding: 30, backgroundColor: 'lightgray' },
};
const PersonList = () => {
  return (
    <div style={styles.container}>
      {PERSONS.map(person => (
        <PersonListitem key={person.id} person={person} />
      ))}
    </div>
  );
};

export default PersonList;
