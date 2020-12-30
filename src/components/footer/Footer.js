import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Thanks for visiting ❤️")}
        </p>
      </div>
      <div className="footer-hits">
        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Famudhanmanisekaran.github.io%2Fportfolio%2F&count_bg=%23437FC7&title_bg=%23000000&icon=fastly.svg&icon_color=%23FFFFFF&title=hits&edge_flat=true"/></a>
      </div>
    </Fade>
  );
}