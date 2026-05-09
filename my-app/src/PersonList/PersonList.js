import { useState } from 'react';
import { PERSONS } from '../utils';
import PersonListitem from '../PersonListitem/PersonListitem';
import classNames from 'classnames';

import styles from './ProductList.module.css';
import { Title, Button } from './styles';

const PersonList = () => {
  const [bgColor, setBgColor] = useState('lightgray');
  const [state, setState] = useState(false);
  const changeBackgroundColor = () => {
    setBgColor('lightblue');
    setState(!state);
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.blueColor]: bgColor === 'blue',
        [styles.redColor]: bgColor === 'red',
      })}
    >
      {PERSONS.map(person => (
        <PersonListitem key={person.id} person={person} />
      ))}
      <Title>Person List</Title>
      {/* <Input inputColor="blue" placeholder="Blue input" />
      <Input placeholder="Default red input" /> */}
      <Button primary={'white'} state={state} onClick={changeBackgroundColor}>
        Change Background Color
      </Button>
    </div>
  );
};

export default PersonList;
