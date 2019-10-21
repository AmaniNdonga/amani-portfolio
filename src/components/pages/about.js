import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshot2.jpg";

export default function() {
  return (
    <div  className="content-page-wrapper"> 
      <div 
        className="left-column" 
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi repellendus dignissimos accusamus soluta quo ut rerum saepe quisquam laborum quis quos aliquam eum facilis, doloribus in blanditiis ex sed fuga
      </div>
    </div>
  ); 
}