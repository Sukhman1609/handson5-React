import React, { PureComponent } from 'react';
import './pure.css'
class ThemeToggle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    return (
      <div>
        <button className='button4' onClick={this.toggleMode}>
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        {this.props.children(isDarkMode)}
      </div>
    );
  }
}

export default ThemeToggle;
