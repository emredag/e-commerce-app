import React from "react";
import ProfileDetail from "../../components/profile/ProfileDetail";
import UserInfo from "../../components/profile/UserInfo";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="userInfoContainer">
        <UserInfo />
      </div>

      <div className="offersContainer">
        <ProfileDetail />
      </div>
    </div>
  );
}

export default ProfilePage;
