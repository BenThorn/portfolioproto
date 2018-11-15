import React from 'react';

const Home = (props) => {
  return (
    <div className = 'Home'>
      <div id='header'>
        <div id='blurb'>
          <p id="name">Ben Thorn</p>
          <p>Web developer, front end and full stack. Software engineer.</p>
          <p>Welcome!</p>
          <a href="https://github.com/BenThorn" target="_blank"><button>Github</button></a>
          <a href="https://www.linkedin.com/in/benjamin-thorn-a70216ba/" target="_blank"><button>LinkedIn</button></a>
        </div>
      </div>
      <div id="intro">
        <p>Hello, I'm Ben Thorn. </p>
        <p>I'm a student at the Rochester Institute of Technology, and looking to make my way into the worlds of web development and software engineering.</p>
        <p>On this site you can find samples of my work as well as details on my specialties. Take a look around, and if you have any questions, you can also find my contact information. Thank you!</p>
      </div>
    </div>
  );
};  

export default Home;