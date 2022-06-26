import React from "react";

const ProfileIcon = ({ url, name }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url} className="icons">
      <i className={`fa fa-${name}`}></i>
    </a>
  );
};

export default ProfileIcon;
