import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#ffffff'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const hexOptions = "0123456789ABCDEF";
    let newColor = "";
    for (let i = 0; i < 6; i++) {
      newColor += hexOptions.charAt(Math.floor(Math.random()*hexOptions.length));
    };
    this.setState({ 
      color: "#" + newColor
    });

  }

  render() {
    document.body.style.backgroundColor = this.state.color;
    return (
      <div id="myDiv">
        <h1>This color is {this.state.color}</h1>
        <button onClick={this.handleClick}>Change Color</button>
      </div>
    )
  }
}

export default App