import React from "react";
import './socialFollow.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
	  <a
		href="https://www.facebook.com/"
		className="facebook social"
	  >
		<FontAwesomeIcon icon={faFacebook} size="2x" />
	  </a>
	  <a
		href="https://www.youtube.com/"
		className="youtube social"
      >
		<FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
	 
      <a
		  href="https://www.instagram.com/"
		  className="instagram social"
	  >
		<FontAwesomeIcon icon={faInstagram} size="2x" />
	  </a>
	  <a
		  href="https://www.linkedin.com/"
		  className="linkedin social"
	  >
		<FontAwesomeIcon icon={faLinkedin} size="2x" />
	  </a>
	  
    </div>
  );
}