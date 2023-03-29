import PropTypes from "prop-types";
import React, { Component } from "react";
import "./styles/Profile.css";
import photo from "../img/profile.jpeg";


export default class Profile extends Component {
  render() {
    const { description, info } = this.props;
    return (
      <div className="perfil">
        <img src={photo} alt="Profile" />
        <span>{description}</span>
        <h2>{info}</h2>
      </div>
    );
  }
}

Profile.propTypes = {
  email: PropTypes.string.isRequired,
};

Profile.defaultProps = {
  email: "youremail@domain.com",
};
