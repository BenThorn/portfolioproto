import React from 'react';

const Projects = (props) => {
  return (
    <div className="Projects">
      <h3>Dröm</h3>
      <p>An interactive rhythm game experience that was featured as a display at the Imagine RIT 2019 festival, made for my senior capstone project in a team of 7 (5 designers, 2 developers). The game is played by three players, each with their own drum (which is actually a 50 gallon barrel with leather stretched over it) that is connected to the game via an Arduino.</p>
      <p>I was responsible for the programming of the gameplay and the implementation of the assets given to me by the designers, as well as the input method, which used Arduinos hooked up to contact microphones strategically placed at the center of each drum. The other developer handled any external and supplementary applications, such as the scoreboard used in the demonstration and promotional sites.</p>
      <p>The whole project, from concept to the demonstration, took about 4 months. The final product was available to play at Imagine RIT, my school's festival where students and faculty can show off their work to the public. Roughly 500 people tried it out at the show. In addition, Dröm was also the recipient of the Adobe Design Achievement Awards. While the game is not available to play online, you can read about it on our team's behance page below, and about the general concept and team <a href="https://designed.cad.rit.edu/nmcapstone/project/drom?preview_id=44&preview=true">here</a>.</p>
      <section id="buttons">
        <a href="https://github.com/BenThorn/drom-final" target="_blank"><button>Github</button></a>
        <a href="https://www.behance.net/gallery/81596181/Droem-A-Collaborative-Rhythm-Experience" target="_blank"><button>View site</button></a>
      </section>
      <h3>VG Timer</h3>
      <p>A web service app built using Node and React, in addition to other services like Express and MongoDB. Supports a login service for saving user data. Functions similarly to a task-tracking app like Trello, except the purpose is for users to keep track of games that they are currently playing, as well as playtime and other data.</p>
      <section id="buttons">
        <a href="https://github.com/BenThorn/VGTracker" target="_blank"><button>Github</button></a>
        <a href="https://vgtracking.herokuapp.com/" target="_blank"><button>View site</button></a>
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