import React from 'react';
import Counter from './Counter';
import hoc from './hoc';
import './App.css';
import App1 from './Hoc/Pure1';

const NewCounter = hoc(Counter);

const App = () => {
  return (
    <div>
      <h1>HOC:</h1>
      <h4>Higher-Order Component (HOC) Counter:
A Higher-Order Component (HOC) is a function that takes a component and returns a new component with enhanced functionality. In this example, we've created an HOC called withCounter, which takes a component (in this case, Counter) and enhances it with counter functionality. The enhanced component (EnhancedCounter) receives by useState related to the counter, such as count, increment, and decrement.</h4><br></br>
<h1>Pure Component</h1>
      <h4>This example demonstrates how to toggle between dark and light modes using a Pure Component called in Pure1. The component manages the state and provides a callback to change the theme mode. It uses this component to toggle the theme and render content accordingly. Depending on the theme, different CSS classes are applied to style the content.</h4>
      <NewCounter />
      <App1></App1>
    </div>
  );
};

export default App;
