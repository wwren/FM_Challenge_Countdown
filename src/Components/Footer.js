import React from "react";
import { ReactComponent as FB } from "./icon-facebook.svg";
import { ReactComponent as Pinterest } from "./icon-pinterest.svg";
import { ReactComponent as Instagram } from "./icon-instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="icons__wrapper">
        <FB />
        <Pinterest />
        <Instagram />
      </div>
    </footer>
  );
}

export default Footer;
