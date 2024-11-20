import './App.css';
import profilePhoto from '/images/profile/profilePhoto.jpeg'

function Profile() {
  return (
    <div className="profile">
      <div className="profile_left">
        <div className="ipad_border">
          <div className="ipad_inside">
            <div className="grid-item photo">
            <div className="photo_title">PHOTO</div>
              <img src = {profilePhoto} alt = "profile_photo" className = "profile_photo"/>
            </div>
            <div className="grid-item about_me">
              <div className="about_me_title">ABOUT ME</div>
              <ul className="about_me_list">
                <li>Began as competitive programmer 👨‍💻</li>
                <li>Passionate about front-end development 🖥️</li>
                <li>Thriving in solving challenges 🛠️</li>
              </ul>
            </div>
            <div className="grid-item contact">
              <div className="contact_title">CONTACT</div>
              <div className="contact_text">BSALINDE001@e.ntu.edu.sg</div>
            </div>
            <div className="grid-item links">
              <div className="links_title">LINKS</div>
              <a href = "https://www.linkedin.com/in/bryannoelsalindeho/">LinkedIn</a>
              <a href = "https://github.com/bryannoels">Github</a>
              <a href = "https://www.hackerrank.com/bryannoel">HackerRank</a>
              <a href = "https://codepen.io/bryannoel">Codepen</a>
              <a href = "https://gitlab.com/bryannoels">GitLab</a>
            </div>
            <div className="grid-item achievement">
              <div className="achievement_title">ACHIEVEMENT</div>
              <ul className="achievement_list">
                <li>Top 2% highest rating in Leetcode</li>
                <li>No. 5 highest rating in Indonesian Competitive Programming Server, <a href = "https://tlx.toki.id/ranking/scores" className="TOKI_link">TLX.toki.id</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_right">
        <div className="mug"></div>
      </div>
    </div>
  );
}

export default Profile;
