import React, { Component } from 'react';


const App = () => (
  <Counter></Counter>
)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
//Clickした時、１プラスされる
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
//Clickした時、−１引かれる計算
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
