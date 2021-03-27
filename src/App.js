import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  state ={
    heading:'Welcome to ReactJs Home Page'
  }
  changeheadingstate =() =>{
    this.setState({heading:'ReactJS State is Awesome'});
  }
  render(){
    return (
      <>
      <hi>{this.state.heading}</hi>
      <button onClick={this.changeheadingstate}>Click Me</button>
      </>
    );
  }
}

export default App;
