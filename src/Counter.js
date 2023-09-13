
import React from 'react';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2 className='heading'>Counter: {count}</h2>
      <div className='main'>
        
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
