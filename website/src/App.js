import Homepage from './components/homepage/App';
import Profile from './components/profile/App';
import WorkExperience from './components/workExperience/App';
import Certificates from './components/certificates/App';
import Education from './components/education/App';
import Projects from './components/projects/App';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Homepage/>
      <Profile/>
      <WorkExperience/>
      <Certificates/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;
