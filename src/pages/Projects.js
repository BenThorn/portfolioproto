import React from 'react';

const Projects = (props) => {
  return (
    <div className="Projects">
      <h3>VG Timer</h3>
      <p>A web service app built using Node and React, in addition to other services like Express and MongoDB. Supports a login service for saving user data. Functions similarly to a task-tracking app like Trello, except the purpose is for users to keep track of games that they are currently playing, as well as playtime and other data.</p>
      <section id="buttons">
        <a href="https://github.com/BenThorn/VGTimer" target="_blank"><button>Github</button></a>
        <a href="https://vgtimer.herokuapp.com/" target="_blank"><button>View site</button></a>
      </section>
      <h3>Kanji Cards</h3>
      <p>A web app that uses a custom built API to create and store decks and cards of Japanese vocabulary. I built the API for saving decks using Node and HTTP, but I use an external API for getting the dictionary data.</p>
      <section id="buttons">
        <a href="https://github.com/BenThorn/kanji-cards" target="_blank"><button>Github</button></a>
        <a href="http://kanji-cards.herokuapp.com/" target="_blank"><button>View site</button></a>
      </section>
      <h3>Game Shelf</h3>
      <p>A web app that calls on a database of video games and allows users to save games to their collection, using local storage. Built using Node.</p>
      <section id="buttons">
        <a href="https://github.com/BenThorn/game-shelf" target="_blank"><button>Github</button></a>
        <a href="https://frozen-inlet-23444.herokuapp.com/" target="_blank"><button>View site</button></a>
      </section>
      <h3>This Site</h3>
      <p>This site I believe would also count as a project of mine. I built is using React rendered to a static site, so I didn't have to run a server to host the site and could simply use Github Pages.</p>
      <section id="buttons">
        <a href="https://github.com/BenThorn/portfolioproto" target="_blank"><button>Github</button></a>
      </section>
    </div>
  );
};  

export default Projects;