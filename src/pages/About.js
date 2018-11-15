import React from 'react';

const About = (props) => {
  return (
    <div className = "About">
      <h3>About Me</h3>
      <img src='/portfolio-site/assets/picofme.png' alt="me"/>
      <p>My name is Ben Thorn. I’m currently an upperclassman at the Rochester Institute of Technology, but I’m originally from the Philadelphia area, from a town near Valley Forge called Chesterbrook. </p>
      <p>Currently, I am due to graduate from college in the Fall of 2019, and as my college career comes to an end, I’m on the search for internships and co-ops to give me some real experience that I’ll need as a new graduate.</p>
      <p>My goal for my career is to work as a full stack or a front end web developer, and I think the skills I’ve gained while at RIT have given me the ability to do both.</p>
      <h3>Education</h3>
      <img src='/portfolio-site/assets/rit.png' alt='rit' />
      <ul id="degrees">
        <li>New Media Interactive Development, <i>Major</i></li>
        <li>Database Design, Development, and Implementation, <i>Minor</i></li>
        <li>Modern Japanese Language, <i>Minor</i></li>
      </ul>
      <p>At RIT, my major is New Media Interactive Development. My major focuses mainly on front end development, in addition to some integration of back end elements in web development.</p>
      <p>Since my goal is to be a full stack developer, I’ve also decided to get some back end knowledge with a minor in Database Development, Design, and Implementation.</p>
      <p>In addition, as a sort of personal endeavor, I also have a minor in Modern Japanese Language. While it started as just a few classes taken to fill some credits, I’ve found that it came easily and I very much enjoyed learning a new language, so I decided to take it further.</p>
      <h3>Skills</h3>
      <div id="logos">
        <img src='/portfolio-site/assets/js.png' alt='js' />
        <img src='/portfolio-site/assets/angular.png' alt='js' />     
        <img src='/portfolio-site/assets/react.png' alt='js' />     
        <img src='/portfolio-site/assets/csharp.png' alt='js' />
        <img src='/portfolio-site/assets/sql.png' alt='js' />
      </div>
      <p>Here’s a list of some languages and frameworks that I have some experience with.</p>
      <ul id="skills">
        <li>Javascript (Typescript, ES7)</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Angular</li>
        <li>Jasmine</li>
        <li>HTML5 & CSS3</li>
        <li>SCSS, Gulp, Babel</li>
        <li>SQL & MySQL</li>
        <li>MongoDB</li>
        <li>C# & .NET</li>
        <li>Unity</li>
        <li>Java</li>
        <li>git</li>
      </ul>
      <p>Of these, I would consider Javascript to be my language of choice, as I have a great amount of experience with its more modern libraries like Node and React for use in front end and server development. </p>
      <p>I’ve used C# to both develop games using Unity, as well as develop back end applications for interacting with SQL databases using the .NET framework. I’ve also used Java in the past to accomplish the same thing.</p>
      <h3>Experience</h3>
      <section id="job">
        <div>Forbes - <i>Front End Developer Intern, Spring 2018</i></div>
      </section>
      <p>For my first internship, I worked at Forbes magazine, as part of their web development team. I worked with a remote team of four in Rochester, with two full time employees and two interns, in addition to the rest of the dev team back at their headquarters in New Jersey over Slack.</p>
      <p>At Forbes, our project was a new CMS that they were rolling out, Bertie. I learned to use technologies like Angular, RxJS, and Jasmine to make new front end features, and build things like unit tests to roll out to production. I also helped out with code review for my team.</p>
      <section id="job">
        <div>RIT - <i>Teaching Assistant, Fall 2017</i></div>
      </section>
      <p>I worked as a teaching assistant for an introductory programming course, offered to me by a former professor. My work included grading and answering students’ questions in class, walking them through essential programming concepts.</p>
    </div>
  );
};  

export default About;