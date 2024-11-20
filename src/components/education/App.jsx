import { useState } from 'react';
import {relevantModules, cca, competitionUni, highschool, competitionHS} from './constants';
import './App.css';
const prevSign = '<';
const nextSign = '>';

function BigBook() {
  const [page, setPage] = useState(0);
  const mid = window.matchMedia("(max-width: 1250px)");
  const nextPage = () =>{ 
    if(page === 0){
      document.getElementById("cover1").classList.add("flipped");
      document.getElementById("cover1").style.zIndex = "1";
      document.getElementById("page12").classList.add("flipped");
      document.getElementById("page12").style.zIndex = "2";
      if (mid.matches)
      {
        document.querySelector(".book").style.transform = "translateX(150px)";
        document.querySelector(".prev_button").style.transform = "translateX(-150px)";
        document.querySelector(".next_button").style.transform = "translateX(150px)";
      }
      else
      {
        document.querySelector(".book").style.transform = "translateX(250px)";
        document.querySelector(".prev_button").style.transform = "translateX(-250px)";
        document.querySelector(".next_button").style.transform = "translateX(250px)";
      }
      
      setTimeout(() => {
        document.querySelector(".prev_button").style.visibility = "visible";
      }, 300);
      setPage(1);
    }
    else if (page === 1)
    {
      document.getElementById("page34").classList.add("flipped");
      document.getElementById("page34").style.zIndex = "3";
      setPage(2);
    }
    else if (page === 2)
    {
      document.getElementById("page56").classList.add("flipped");
      document.getElementById("page56").style.zIndex = "4";
      document.getElementById("cover2").classList.add("flipped");
      document.getElementById("cover2").style.zIndex = "5";
      if (mid.matches)
        document.querySelector(".book").style.transform = "translateX(300px)";
      else
        document.querySelector(".book").style.transform = "translateX(500px)";
      document.querySelector(".prev_button").style.transform = "translateX(0px)";
      document.querySelector(".next_button").style.visibility = "hidden";
      setPage(3);
    }
  }
  const prevPage = () =>{
    if(page === 3){
      document.getElementById("cover2").classList.remove("flipped");
      document.getElementById("cover2").style.zIndex = "1";
      document.getElementById("page56").classList.remove("flipped");
      document.getElementById("page56").style.zIndex = "2";
      if (mid.matches)
      {
        document.querySelector(".book").style.transform = "translateX(150px)";
        document.querySelector(".prev_button").style.transform = "translateX(-150px)";
        document.querySelector(".next_button").style.transform = "translateX(150px)";
      }
      else
      {
        document.querySelector(".book").style.transform = "translateX(250px)";
        document.querySelector(".prev_button").style.transform = "translateX(-250px)";
        document.querySelector(".next_button").style.transform = "translateX(250px)";
      }  
      setTimeout(() => {
        document.querySelector(".next_button").style.visibility = "visible";
      }, 300);
      setPage(2);
    }
    else if (page === 2)
    {
      document.getElementById("page34").classList.remove("flipped");
      document.getElementById("page34").style.zIndex = "3";
      setPage(1);
    }
    else if (page === 1)
    {
      document.getElementById("page12").classList.remove("flipped");
      document.getElementById("page12").style.zIndex = "4";
      document.getElementById("cover1").classList.remove("flipped");
      document.getElementById("cover1").style.zIndex = "5";
      document.querySelector(".book").style.transform = "translateX(0px)";
      document.querySelector(".prev_button").style.visibility = "hidden";
      document.querySelector(".next_button").style.transform = "translateX(0px)";
      setPage(0);
    }
  }
  return (
    <div className="education bigbook">
      <button className="prev_button" onClick={prevPage}>{prevSign}</button>
      <div className="book">
        <div id="cover1" className="cover">
          <div className="front_cover">
              <div className="front_cover_content">
                <h1>EDUCATION</h1>
              </div>
          </div>
          <div className="back_cover">
              <div className="back_content">
              </div>
          </div>
        </div>
        <div id="page12" className="paper">
          <div className="front_page">
            <div className="front_content">
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
              <div className = "education_name">NANYANG TECHNOLOGICAL UNIVERSITY</div>
              <div>
                <div className = "education_description">Bachelor of Engineering (Information Engineering and Media)</div>
                <div className = "education_description">Honours (Highest Distinction) (Expected)</div>
              </div>
            </div>
          </div>
        </div>
        <div id="page34" className="paper">
          <div className="front_page">
            <div className="front_content">
              <div className = "education_section_title">Relevant modules:</div>
              <ol>
              {
                relevantModules.map(module=>(
                  <li className = "education_list_item">{module}</li>
                ))
              }
              </ol>
              <div className = "education_section_title">Co-Curricular Activities:</div>
              <ol>
              {
                cca.map(activity=>(
                  <li className = "education_list_item">{activity}</li>
                ))
              }
              </ol>

              <div className = "education_section_title">Competitions</div>
              <ol>
              {
                competitionUni.map(item=>(
                  <li className = "education_list_item">{item}</li>
                ))
              }
              </ol>
              <div className = "education_item">Research (URECA programme) on Deep Learning and Pattern Recognition in Chess (2023)</div>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
              <div className = "education_name">SMAK St. Louis 1 Surabaya</div>
              <div>
                {
                  highschool.map(item=>(
                    <div className = "education_description">{item}</div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div id="page56" className="paper">
          <div className="front_page">
            <div className="front_content">
            <div className = "education_section_title">National Achievements:</div>
              <ol>
                {
                  competitionHS.map(item=>(
                    <li className = "education_list_item">{item}</li>
                  ))
                }
              </ol>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
              <h1>Blank</h1>
            </div>
          </div>
        </div>
        <div id="cover2" className="cover">
          <div className="front_cover">
              <div className="front_content">
              </div>
          </div>
          <div className="back_cover">
              <div className="back_content">
              </div>
          </div>
        </div>
      </div>
      <button className="next_button" onClick={nextPage}>{nextSign}</button>
    </div>
  );
}

function SmallBook() {
  const [page, setPage] = useState(0);
  const nextPageS = () =>{ 
    if(page === 0){
      document.getElementById("cover1s").classList.add("flipped2");
      document.getElementById("cover1s").style.zIndex = "1";
      setTimeout(() => {
        document.getElementById("pb2").style.visibility = "visible";
      }, 300);
      setPage(1);
    }
    else if (page === 1)
    {
      document.getElementById("page1").classList.add("flipped2");
      document.getElementById("page1").style.zIndex = "2";
      setPage(2);
    }
    else if (page === 2)
    {
      document.getElementById("page2").classList.add("flipped2");
      document.getElementById("page2").style.zIndex = "3";
      setPage(3);
    }
    else if (page === 3)
    {
      document.getElementById("page3").classList.add("flipped2");
      document.getElementById("page3").style.zIndex = "4";
      document.getElementById("nb2").style.visibility = "hidden";
      setPage(4);
    }
  }
  const prevPageS = () =>{
    if(page === 4){
      document.getElementById("page3").classList.remove("flipped2");
      document.getElementById("page3").style.zIndex = "3";
      setTimeout(() => {
        document.getElementById("nb2").style.visibility = "visible";
      }, 300);
      setPage(3);
    }
    else if (page === 3)
    {
      document.getElementById("page2").classList.remove("flipped2");
      document.getElementById("page2").style.zIndex = "4";
      setPage(2);
    }
    else if (page === 2)
    {
      document.getElementById("page1").classList.remove("flipped2");
      document.getElementById("page1").style.zIndex = "5";
      setPage(1);
    }
    else if (page === 1)
    {
      document.getElementById("cover1s").classList.remove("flipped2");
      document.getElementById("cover1s").style.zIndex = "6";
      document.getElementById("pb2").style.visibility = "hidden";
      setPage(0);
    }
  }
  return (
    <div className="education smallbook">
      <button id = "pb2" onClick={prevPageS}>{prevSign}</button>
      <div className="book">
        <div id="cover1s" className="cover">
          <div className="front_cover">
              <div className="front_cover_content">
                <h1>EDUCATION</h1>
              </div>
          </div>
          <div className="back_cover">
              <div className="back_content">
              </div>
          </div>
        </div>
        <div id="page1" className="paper">
          <div className="front_page">
            <div className="front_content">
              <div className = "education_name">NANYANG TECHNOLOGICAL UNIVERSITY</div>
                <div>
                  <div className = "education_description">Bachelor of Engineering (Information Engineering and Media)</div>
                  <div className = "education_description">Honours (Highest Distinction) (Expected)</div>
                </div>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
            </div>
          </div>
        </div>
        <div id="page2" className="paper">
          <div className="front_page">
            <div className="front_content">
              <div className = "education_section_title">Relevant modules:</div>
              <ol>
              {
                relevantModules.map(module=>(
                  <li className = "education_list_item">{module}</li>
                ))
              }
              </ol>
              <div className = "education_section_title">Co-Curricular Activities:</div>
              <ol>
              {
                cca.map(activity=>(
                  <li className = "education_list_item">{activity}</li>
                ))
              }
              </ol>

              <div className = "education_section_title">Competitions</div>
              <ol>
              {
                competitionUni.map(item=>(
                  <li className = "education_list_item">{item}</li>
                ))
              }
              </ol>
              <div className = "education_item">Research (URECA programme) on Deep Learning and Pattern Recognition in Chess (2023)</div>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
            </div>
          </div>
        </div>
        <div id="page3" className="paper">
          <div className="front_page">
            <div className="front_content">
              <div className = "education_name">SMAK St. Louis 1 Surabaya</div>
              <div>
                {
                  highschool.map(item=>(
                    <div className = "education_description">{item}</div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
            </div>
          </div>
        </div>
        <div id="page4" className="paper">
          <div className="front_page">
            <div className="front_content">
            <div className = "education_section_title">National Achievements:</div>
              <ol>
                {
                  competitionHS.map(item=>(
                    <li className = "education_list_item">{item}</li>
                  ))
                }
              </ol>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
            </div>
          </div>
        </div>
        <div id="cover2s" className="cover">
          <div className="front_cover">
              <div className="front_content">
              </div>
          </div>
          <div className="back_cover">
              <div className="back_content">
              </div>
          </div>
        </div>
      </div>
      <button id = "nb2" onClick={nextPageS}>{nextSign}</button>
    </div>
  );
}

function Education(){
  return(
    <div>
      <BigBook />
      <SmallBook />
    </div>
  );
}

export default Education;
