import React, { useState } from 'react';

const hoc = (MyComponent) => {
  const NewCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return <MyComponent count={count} increment={increment} decrement={decrement} />;
  };

  return NewCounter;
};

export default hoc;
