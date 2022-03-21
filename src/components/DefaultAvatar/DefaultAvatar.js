import React from "react";
import './style.css'

function DefaultAvatar({ firstName, lastName }) {
  let fullNameInitials;
  if (firstName) {
    fullNameInitials = firstName.split('')[0] + lastName.split('')[0]
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