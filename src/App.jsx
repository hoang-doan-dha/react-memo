import { useState, memo, useCallback } from 'react'
import './App.css'

// This for primitive data types
const Rectangle = ({ color }) => {
  console.log(`Rectangle component re-render with string color ${color}`);

  return (
    <div style={{ background: color, height: 200, width: 200, margin: 10 }}></div>
  )
}

// This for reference data types
const RectangleWithObject = ({ data, onClick }) => {
  // If we use any function to pass as a props, 
  // React will shallow compare like `Do they point the same object in heap?`
  // If not, it will re-render object
  console.log(`Rectangle component re-render with reference data ${data}`);

  return (
    <div 
      style={{ background: data.color, height: 200, width: 200, margin: 10 }}
      onClick={onClick}
    >
    </div>
  )
}

const MemoRectangle = memo(Rectangle);
const MemoRectangleWithObject = memo(RectangleWithObject);

const initialData = {
  color: 'red'
}

function App() {
  // For primitive data type, when we pass it as a prop to component
  // React compares their values, if the value changes, it re-render components
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  // For the reference data type, React will shallow compare
  const [data, setData] = useState(initialData);

  // useCallback helps React recognize the object have a same pointer
  const onClick = useCallback(() => {}, []);

  const handleColorChange = () => {
    if (color === 'red') {
      setColor('blue');
    } else {
      setColor('red');
    }
  }

  const handleDataColorChange = () => {
    if (data.color === 'red') {
      setData({ color: 'blue' });
    } else {
      setData({ color: 'red' });
    }
  }

  console.log(`Re-render count ${count} times`);

  return (
    <div className="App">
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      {/* <button type="button" onClick={() => handleColorChange()}>
        Color is: {color}
      </button> */}
      <button type="button" onClick={() => handleDataColorChange()}>
        Data Color is: {data.color}
      </button>
      {/* <Rectangle color={color}></Rectangle> */}
      {/* If we always pass new object (e.g func), it will re-render, break Memo process, like below */}
      {/* <MemoRectangleWithObject data={data} onClick={() => {}} ></MemoRectangleWithObject> */}
      {/* Instead, use useMemo (for object) and useCallback (for func) to avoid this */}
      <MemoRectangleWithObject data={data} onClick={onClick} ></MemoRectangleWithObject>
    </div>
  )
}

export default App
