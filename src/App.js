import React, { Component } from 'react';
import './App.css';
import Home from'./pages/Home.js';
import About from'./pages/About.js';
import Projects from'./pages/Projects.js';
import Contact from'./pages/Contact.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: <Home /> };
  }

  changePage = (e) => {
    document.getElementById('selected').setAttribute('id', 'unselected');
    const page = e.target.getAttribute('value');
    e.target.setAttribute('id', 'selected');
    let pageJsx;
    switch(page){
      case 'home':
        pageJsx = <Home />
        break;
      case 'about':
        pageJsx = <About />
        break;
      case 'projects':
        pageJsx = <Projects />
        break;
      case 'contact':
        pageJsx = <Contact />
        break;
      default:
        pageJsx = <Home />
    }
    this.setState({currentPage: pageJsx});
  }
  render() {
    return (
      <div className="App">
        <Navbar change={this.changePage}/>
        <div id="content">
          {this.state.currentPage}
        </div>
      </div>
    );
  }
}

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <ul>
        <li onClick={props.change} value="home" id="selected">Home</li>
        <li onClick={props.change} value="about" id="unselected">About</li>
        <li onClick={props.change} value="projects" id="unselected">Projects</li>
        <li onClick={props.change} value="contact" id="unselected">Contact</li>
      </ul>
    </nav>
  );
};  

export default App;
