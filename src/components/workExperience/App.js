import './App.css';
import { workExperienceList } from './constants.js';

function WorkExperience() {
  return (
    <div className="work-experience">
      <div className="laptop">
        <div className="laptop_inside">
          <div className="browser_header">
            <div className="browser_buttons">
              <div className="button1" />
              <div className="button2" />
              <div className="button3" />
              <div className="header_head" />
            </div>
            <div className="header_bottom">
              <div className="browser_buttons2">
                <div className="button1" />
                <div className="button2" />
                <div className="button3" />
                <div className="search_bar2" />
              </div>
              <div className="search_bar" />
            </div>
          </div>
          <div className="browser_body">
            <div className="work_experience_title">WORK EXPERIENCE</div>
              {workExperienceList.map(experience => (
                <div className = "experience">
                  <div className = "experience_header">
                    <div className = "experience_role">{experience.role}</div>
                    <div className = "experience_duration">{experience.duration}</div>
                  </div>
                  <div className = "experience_type">{experience.type}</div>
                  <ul className = "experience_description">
                    {experience.description.map(line =>(
                      <li>{line}</li>
                    ))}
                  </ul>
                  <div className = "experience_skills">
                    {experience.skills.map(skill => (
                      <div className = "experience_skill_button">{skill}</div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="laptop_middle"></div>
      <div className="laptop_bottom"></div>
    </div>
  );
}

export default WorkExperience;
