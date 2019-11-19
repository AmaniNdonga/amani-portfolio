import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/monks.jpg";

export default function() {
  const linkStyle = {
      textDecoration: 'none'
    
  }
  return (
    <div  className="content-page-wrapper"> 
      <div 
        className="left-column" 
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone"/>
            </div>

            <div className="text">
              717-984-8129
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope"/>
            </div>

            <div className="text">
              amaniabraham0@gmail.com
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked"/>
            </div>

            <div className="text">
              Hershey, PA
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon" >
             Linkedin
            </div>

            <div className="text">
            <a href="https://www.linkedin.com/in/abraham-ndonga-96407010b/" target="_blank" style={linkStyle}>Abraham Ndonga</a>
            </div>
            </div>

          <div className="bullet-point-group">
            <div className="icon">
            Github
            </div>

            <div className="text">
            <a href="https://github.com/AmaniNdonga" target="_blank" style={linkStyle}>AmaniNdonga</a>
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
            Instagram
            </div>

            <div className="text">
            <a href="https://www.instagram.com/abraham_amani__/?hl=en" target="_blank" style={linkStyle}>abraham_amani__</a>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  ); 
}