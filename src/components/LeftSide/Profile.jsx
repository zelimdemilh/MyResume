import React from "react";
import profileAvatar from "../../dist/img/profileImg.jpeg";

const Profile = () => {
  return (
    <div className="profileText">
      <div className="imgBx">
        <img src={profileAvatar} alt="photo" />
      </div>
      <h2>
        Демильханов Зелимхан
        <br />
        <span>Frontend-разработчик</span>
      </h2>
    </div>
  );
};

export default Profile;
