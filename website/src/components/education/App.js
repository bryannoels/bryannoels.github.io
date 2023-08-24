import { useState } from 'react';
import './App.css';
const prevSign = '<';
const nextSign = '>';

function Education() {
  const [page, setPage] = useState(0);
  const nextPage = () =>{
    if(page === 0){
      document.getElementById("cover1").classList.add("flipped");
      document.getElementById("cover1").style.zIndex = "1";
      document.getElementById("page12").classList.add("flipped");
      document.getElementById("page12").style.zIndex = "2";
      document.querySelector(".book").style.transform = "translateX(250px)";
      document.querySelector(".prev_button").style.transform = "translateX(-250px)";
      document.querySelector(".next_button").style.transform = "translateX(250px)";
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
      document.querySelector(".book").style.transform = "translateX(250px)";
      document.querySelector(".prev_button").style.transform = "translateX(-250px)";
      document.querySelector(".next_button").style.transform = "translateX(250px)";
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
    <div className="education">
      <button className="prev_button" onClick={prevPage}>{prevSign}</button>
      <div className="book">
        <div id="cover1" className="cover">
          <div className="front_cover">
              <div className="front_content">
                <h1>COVER</h1>
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
              <h1>Education</h1>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
              <h1>NTU 1</h1>
            </div>
          </div>
        </div>
        <div id="page34" className="paper">
          <div className="front_page">
            <div className="front_content">
              <h1>NTU 2</h1>
            </div>
          </div>
          <div className="back_page">
            <div className="back_content">
              <h1>Sinlui 1</h1>
            </div>
          </div>
        </div>
        <div id="page56" className="paper">
          <div className="front_page">
            <div className="front_content">
              <h1>Sinlui 2</h1>
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
                <h1>Cover</h1>
              </div>
          </div>
        </div>
      </div>
      <button className="next_button" onClick={nextPage}>{nextSign}</button>
    </div>
  );
}

export default Education;
