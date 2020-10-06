import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaGithub } from "react-icons/fa";
// profile component
const Profile = (props) => {
  return (
    <div className="container">
      <div
        className="card"
        style={{
          width: "18rem",
          background: "rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        <img src={props.children} alt="Profile pic" className="card-img-top" />
        <div className="card-body">
          <h5
            className="card-title"
            onClick={() =>
              props.alertMyName(`Hello my name is ${props.fullName} !`)
            }
            style={{ cursor: "pointer" }}
          >
            {props.fullName}
          </h5>
          <p className="card-text">Profession : {props.profession}</p>
          <p className="card-text">Bio : {props.bio}</p>
        </div>
        <div className="card-body">
          <a
            href="https://www.facebook.com/saber.guirat/"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size="2em" />
          </a>
          <a
            href="https://github.com/SaberGuirat"
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="2em" />
          </a>
        </div>
      </div>
    </div>
  );
};
// default props
Profile.defaultProps = {
  fullName: "Anonymous",
  profession: "Unknown",
  bio: "Unknown",
};
// type of props
Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  alertMyName: PropTypes.func,
};

export default Profile;
