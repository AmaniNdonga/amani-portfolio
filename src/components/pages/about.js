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
      <h1>Abraham Amani Ndonga</h1>
      <p>Full Stack Software Engineer with experience in JavaScript and Python who is currently interested in Full Stack Web Development and Cyber Security. An imagination running wild and an aptitude for abstraction are Abraham’s catalyst for constant self-improvement which is one of his passions. Abraham also values introspection for he believes it is the key for growth and change.</p>
      <p>“Who looks outside dreams; who looks inside awakes.” - Carl Jung (Abraham’s favorite and birthday twin)</p>
      <p>“All types of knowledge, ultimately means self knowledge.” - Bruce Lee</p>
      <p>The way of objective reflection makes the subject accidental, and thereby transforms existence into something indifferent, something vanishing. Away from the subject the objective way of reflection leads to objective truth, and while the subject and his subjectivity become indifferent, the truth also becomes indifferent, and this indifference is precisely its objective validity.
- Søren Kierkegaard</p>
      </div>
    </div>
  ); 
}