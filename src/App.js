import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.updateText = this.updateText.bind(this)
    this.state={
      text:""
    }
  }
  updateText(event){
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" value={this.state.text} onChange={this.updateText} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;