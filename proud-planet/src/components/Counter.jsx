import { useState } from "react";

const Counter = () => {
  const [counter, updateCounter] = useState(0);

  return (
    <div>
      <h1>Counter React: {counter}</h1>
      <button onClick={() => updateCounter(counter + 1)}>Increment</button>
      <button onClick={() => updateCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
