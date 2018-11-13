import React, { Component } from 'react';
import './App.css';

const $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 'home'};
  }

  changePage = (e) => {
    const page = e.target.getAttribute('value');
    console.log(page);
    this.setState({currentPage: page});
  }
  render() {
    return (
      <div className="App">
        <Navbar change={this.changePage}/>
        <div id="content">
          <p>{this.props.currentPage}</p>
        </div>
      </div>
    );
  }
}

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <ul>
        <li onClick={props.change} value='home'>Home</li>
        <li onClick={props.change} value="about">About</li>
        <li onClick={props.change} value="projects">Projects</li>
        <li onClick={props.change} value="contact">Contact</li>
      </ul>
    </nav>
  );
};  

const changeAddress = (e) => {
  console.log();
};

export default App;
