import './App.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile_left">
        <div className="ipad_border">
          <div className="ipad_inside">
            <div className="grid-item photo">PHOTO</div>
            <div className="grid-item about_me">ABOUT ME</div>
            <div className="grid-item contact">CONTACT</div>
            <div className="grid-item links">LINKS</div>
            <div className="grid-item area_of_interest">AREA OF INTEREST</div>
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
