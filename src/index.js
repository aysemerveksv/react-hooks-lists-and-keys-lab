import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
// NavBar component
const NavBar = () => {
    const links = ['home', 'about', 'contact'];
  
    return (
      <div>
        {links.map((link, index) => (
          <a key={index} href={`#${link}`}>
            {link}
          </a>
        ))}
      </div>
    );
  };
  
  // ProjectList component
  const ProjectList = ({ projects }) => {
    return (
      <div>
        {projects.map((project) => (
          <ProjectItem key={project.id} technologies={project.technologies} />
        ))}
      </div>
    );
  };
  
  // ProjectItem component
  const ProjectItem = ({ technologies }) => {
    return (
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    );
  };
  
  // App component
  const App = () => {
    const projects = [
      { id: 1, technologies: ['React', 'JavaScript', 'HTML', 'CSS'] },
      { id: 2, technologies: ['Node.js', 'Express', 'MongoDB'] },
      { id: 3, technologies: ['Vue.js', 'TypeScript', 'SCSS'] },
    ];
  
    return (
      <div>
        <NavBar />
        <ProjectList projects={projects} />
      </div>
    );
  };
  
  export default App;