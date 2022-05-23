import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Box from "./components/Box";

const App = () => {
  
  const [length, setLength] = useState(0.2);

  const buttonHandler = () => {
    setLength(prevValue => prevValue + 0.5);
  }

  const buttonDecreaseHandler = () => {
    setLength(prevValue => prevValue - 0.5);
  }

  const resetHandler = () => {
    setLength(0.2);
  }

  return (
    <div>
      <Canvas
        camera={{fov: 70, near: 0.01, far: 100, position: [0, 0, 2]}}
        style={{ height: '100vh', backgroundColor: 'transparent' }}>
          <Box length={length} />
      </Canvas>  
      <button onClick={buttonHandler}>increase</button>
      <button onClick={buttonDecreaseHandler}>decrease</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
