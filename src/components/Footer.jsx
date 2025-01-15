import React from "react";
import { styles } from "../styles";

// Import images directly from the assets folder
import githubIcon from "../assets/github1.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerIcons}>
        <a
          href="https://github.com/arpi2003ta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className={styles.footerIcon} />
        </a>
        <a
          href="https://www.instagram.com/ms_cat_03/profilecard/?igsh=OWk3dzhtMWt2eW9m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className={styles.footerIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/arpita-nath-240949257"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className={styles.footerIcon} />
        </a>
      </div>
      <p className={styles.footerText}>Thanks 🙏 for visiting my profile.</p>
    </footer>
  );
};

export default Footer;
