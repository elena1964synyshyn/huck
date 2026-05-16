// import { useRef } from 'react';
// import './App.css';
// function App() {
//   const headerRef = useRef();
//   const inputRef = useRef();
//   const text = 'Text';
//   const handleFocus = () => {
//     headerRef.current.focus();
//     inputRef.current.focus();

//     console.log(inputRef.current.value);
//   };
//   console.log(headerRef.current);
//   return (
//     <div className="app">
//       <header className="app-header">
//         <input ref={inputRef} />
//         <p>{text}</p>
//         <button onClick={handleFocus}>focus me</button>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { useMemo, useState, memo, useEffect } from 'react';
// import './App.css';
// import PersonList from './PersonList/PersonList';

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return width;
// }

// const SideComponent = memo(() => {
//   console.log('SideComponent рендер');
//   return <div>Я інший компонент</div>;
// });

// function App() {
//   const [list, setList] = useState([1, 2, 3, 4, 5]);
//   const sum = useMemo(() => {
//     return list.reduce((acc, num) => acc + num, 0);
//   }, [list]);

//   const addNumber = () => {
//     setList([...list, Math.floor(Math.random() * 10)]);
//   };

//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
//   const removeItem = index => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   const width = useWindowWidth();

//   return (
//     <div className="App">
//       <PersonList /> {/* ✅ вже тут є PersonList */}
//       <UncontrolledForms />
//       <header className="App-header">
//         <h2>useMemo</h2>
//         <p>Список: {list.join(', ')}</p>
//         <p>Сума: {sum}</p>
//         <button onClick={addNumber}>Додати число</button>

//         <h2>React.memo</h2>
//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>
//               {item}
//               <button onClick={() => removeItem(index)}>Видалити</button>
//             </li>
//           ))}
//         </ul>
//         <SideComponent />

//         <h2>useWindowWidth</h2>
//         <p>Ширина вікна: {width}px</p>
//       </header>
//     </div>
//   );
// }

// export default App;

import ControlledForms from './components/ControlledForms/ControlledForms';

function App() {
  return (
    <div className="App">
      {/* <UncontrolledForms /> */}
      <ControlledForms />
    </div>
  );
}

export default App;
