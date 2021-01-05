import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faMedium,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='social-icons-container'>
      <a
        href='https://www.linkedin.com/in/suresh-munnangi/'
        target='_blank'
        className='link-style social-icon-footer'
      >
        <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
      </a>
      {/* 
      <a
        href='https://www.youtube.com/user/AmazonWebServices'
        target='_blank'
        className='link-style social-icon-footer'
      >
        <FontAwesomeIcon
          style={{ color: "darkred" }}
          icon={faYoutube}
          size='2x'
        />
      </a>

      */}
      <a
        href='https://medium.com/@sureshmunnangi'
        target='_blank'
        className='link-style social-icon-footer'
      >
        <FontAwesomeIcon style={{ color: "black" }} icon={faMedium} size='2x' />
      </a>
      <a
        href='https://twitter.com/sureshmunnangi'
        target='_blank'
        className='link-style social-icon-footer'
      >
        <FontAwesomeIcon icon={faTwitter} size='2x' />
      </a>
      <a
        href='https://github.com/smtech-learning?tab=repositories'
        target='_blank'
        className='link-style social-icon-footer'
      >
        <FontAwesomeIcon style={{ color: "black" }} icon={faGithub} size='2x' />
      </a>
    </div>
  );
}
