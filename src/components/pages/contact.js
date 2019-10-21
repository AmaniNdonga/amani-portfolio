import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/monks.jpg";

export default function() {
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
        </div>

      </div>
    </div>
  ); 
}