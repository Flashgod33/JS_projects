import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {database} from './firebase';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
    this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.dataRef = database.ref('/test');
    this.dataRef.on('value', (snapshot) => {
        this.setState({
            data: snapshot.val(),
            newData: ''
        });
    });
}
  handleChange(event){
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.dataRef.push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <pre className="App--data">
          { JSON.stringify(this.state.data,null,2)}
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <input type="text" value ={this.state.newData} onChange={this.handleChange}/>
          <input type="submit" value="sub" />
        </form>
      </div>
    );
  }
}

export default App;