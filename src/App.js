import Homepage from './components/homepage/App';
import Profile from './components/profile/App';
import WorkExperience from './components/workExperience/App';
import Certificates from './components/certificates/App';
import Education from './components/education/App';
import Projects from './components/projects/App';
import Connect from './components/connect/App';
import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Profile/>
      <WorkExperience/>
      <Certificates/>
      <Education/>
      <Projects/>
      <Connect/>
    </div>
  );
}

export default App;
