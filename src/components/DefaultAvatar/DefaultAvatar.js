import React from "react";
import './style.css'

function DefaultAvatar({ firstName, lastName }) {
  let fullNameInitials;
  if (firstName) {
    fullNameInitials = firstName.split('')[0].toUpperCase() + lastName.split('')[0].toUpperCase()
  }

  return (
    <div className="avatarBG">
      <span>
        {fullNameInitials}
      </span>
    </div>
  );
}

export default DefaultAvatar;