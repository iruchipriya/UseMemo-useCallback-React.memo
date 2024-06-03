import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [countChild, setCountChild] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  const handleCountChild = useCallback(() => {
    setCountChild((prevCount) => prevCount + 1);
  }, []);

  const arr = [1, 2, 3, 4];
  const memoizedArr = useMemo(() => [1, 2, 3, 4], []);

  return (
    <>
      <button onClick={handleCount}>count is {count}</button>

      {/* //not rerender in primitive */}
      {/* <Child message={'Hi mY NAME IS RUCHI'} /> */}
      {/* it will reredner in case of obj, array, since it does shallow equality check. */}
      <Child message={memoizedArr} handleCountChild={handleCountChild} />
      <div> child count : {countChild}</div>
    </>
  );
}

export default App;
