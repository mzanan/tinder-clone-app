import React from "react";
import "../styles/Header.css";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>

        <div className="header__logos-container">
          <img
            className="header__logo"
            src="https://drek4537l1klr.cloudfront.net/jain/v-2/Figures/MERN.png"
            alt="MERN Stack logo"
          />
          <img
            className="header__logo"
            src="https://cdn.worldvectorlogo.com/logos/heroku.svg"
            alt="Heroku logo"
          />
          <img
            className="header__logo"
            src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
            alt="Firebase logo"
          />
          <img
            className="header__logo"
            src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
            alt="Material-UI logo"
          />
        </div>
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
