import React from "react";

const HeaderLink = ({ url, title, name }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url} className="icons">
      <i className={`fa fa-${name}`}></i>
      <span>{title}</span>
    </a>
  );
};

export default HeaderLink;
