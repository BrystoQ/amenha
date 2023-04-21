import "./Footer.scss";
import React from "react";
import logoFull from "../../assets/logo-full.png";
import { Facebook, Instagram, Pinterest } from "@mui/icons-material";
import tiktok from "../../assets/tiktok-icon.png";

const Footer = () => (
  <footer className="footer">
    <div className="social">
      <a href="/">
        <img src={logoFull} alt="logo entier de amenha" className="logofull" />
      </a>
    </div>
    <div className="link-section">
      <a href="/">Accueil</a>
      <a href="/">Nos artisans</a>
      <a href="/">Notre catalogue</a>
      <a href="/">Nos Inspirations</a>
      <a href="/">Notre Solution</a>
    </div>
    <div className="contact-section">
      Contact <br /> <a href="tel:+33155882266"> Tél: + 33 1 55 88 22 66 </a>{" "}
      <br /> Mail:
      <a href="mailto:amenha@hotmail.fr"> amenha@hotmail.fr</a>
    </div>
    <div className="social--media">
      <a href="facebook.com">
        <Facebook style={{ color: "black" }} />
      </a>
      <a href="tiktok.com">
        <img src={tiktok} alt="tiktok icon" className="picto" />
      </a>
      <a href="pinterest.com">
        <Pinterest style={{ color: "black" }} />
      </a>
      <a href="instagram.com">
        <Instagram style={{ color: "black" }} />
      </a>
    </div>
  </footer>
);

export default Footer;
