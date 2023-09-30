import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
      error: null,
    };
  }

  handleNum1Change = (e) => {
    this.setState({ num1: parseFloat(e.target.value) });
  };

  handleNum2Change = (e) => {
    this.setState({ num2: parseFloat(e.target.value) });
  };

  handleAdd = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: num1 + num2, error: null });
  };

  handleSubtract = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: num1 - num2, error: null });
  };

  handleMultiply = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: num1 * num2, error: null });
  };

  handleDivide = () => {
    const { num1, num2 } = this.state;
    if (num2 === 0) {
      this.setState({ result: 0, error: 'Division by zero is not allowed' });
    } else {
      this.setState({ result: num1 / num2, error: null });
    }
  };

  render() {
    const { result, error } = this.state;

    return (
      <div>
        <h1>Calculator</h1>
        <div>
          <input type="number" placeholder="Number 1" onChange={this.handleNum1Change} />
          <input type="number" placeholder="Number 2" onChange={this.handleNum2Change} />
        </div>
        <div>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleSubtract}>Subtract</button>
          <button onClick={this.handleMultiply}>Multiply</button>
          <button onClick={this.handleDivide}>Divide</button>
        </div>
        <div>
          <p>Result: {result}</p>
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    );
  }
}

export default App;
