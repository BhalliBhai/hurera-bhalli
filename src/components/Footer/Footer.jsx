import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="email"><a href="mailto:hurerabhalli@gmail.com" target="_blank" rel="noreferrer">hurerabhalli@gmail.com</a></span>
        <div className="f-icons">
        <a href="https://www.instagram.com/hurerabhalli/" target="_blank" rel="noreferrer" >  <Insta color="white" size={"3rem"} /></a>
        <a href="https://web.facebook.com/hurera.bhalli" target="_blank" rel="noreferrer" >  <Facebook color="white" size={"3rem"} /></a>
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
      <div className="copy-right">
        <p>	&copy; All rights resirved | Powered By <a href="mailto:bhalli0006@gmail.com" target="_blank" rel="noreferrer">Bhalli</a></p>
      </div>
    </div>
  );
};

export default Footer;
