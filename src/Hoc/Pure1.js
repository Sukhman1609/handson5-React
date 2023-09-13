import React from 'react';
import ThemeToggle from './Pure';

function App1() {
  return (
    <div>
      <h1 className='pureh'>Dark/Light Mode Toggle Example for pure Component</h1>
      <ThemeToggle>
        {(isDarkMode) => (
          <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
            
            <h2>Current Mode: {isDarkMode ? 'Dark' : 'Light'}</h2>
            <h1>
              Hi Welcome to the Theme Zone.
            </h1>
            
          </div>
        )}
      </ThemeToggle>
    </div>
  );
}

export default App1;
