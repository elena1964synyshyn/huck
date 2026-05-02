import { useRef } from 'react';
import './App.css';
function App() {
  const headerRef = useRef();
  const inputRef = useRef();
  const text = 'Text';
  const handleFocus = () => {
    headerRef.current.focus();
    inputRef.current.focus();

    console.log(inputRef.current.value);
  };
  console.log(headerRef.current);
  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <input ref={inputRef} />
        <p>{text}</p>
        <button onClick={handleFocus}>focus me</button>
      </header>
    </div>
  );
}

export default App;
