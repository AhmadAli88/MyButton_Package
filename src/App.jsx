import { useState } from 'react';
import './App.css';
import ButtonComponent from '../../src';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Pass props like `value`, `variant`, and `size` to the ButtonComponent */}
      <ButtonComponent
        value="Click Ahmad"
        variant="primary"  // You can choose between "primary", "secondary", "danger"
        size="medium"      // You can choose between "small", "medium", "large"
        onClick={() => setCount(count + 1)}
      />
      <p>Count: {count}</p>
    </>
  );
}

export default App;
