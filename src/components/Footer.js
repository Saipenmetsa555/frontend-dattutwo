import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://instagram.com/stfu_cooldude?igshid=MzMyNGUyNmU2YQ=="
          target="_blank"
        >
          <InstagramIcon className="iconsss" />
        </a>
        <a
          href="https://x.com/Sai_dattu_k?t=fB3cRKONfm1xb3973h4JhA&s=08"
          target="_blank"
        >
          <TwitterIcon className="iconsss" />
        </a>
        <FacebookIcon className="iconsss" />
        <a
          href="https://www.linkedin.com/in/k-sai-dattu-75327b178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <LinkedInIcon className="iconsss" />
        </a>
      </div>
      <p>&copy; 2024 saidattu.com</p>
    </div>
  );
}

export default Footer;
