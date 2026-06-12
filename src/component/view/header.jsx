import "./header.scss";
import { scrollToClass } from "../utility/scrollToElement";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`header ${visible ? "header--visible" : "header--hidden"}`}>
      <h1 className="title">Yeasmin Mumtahina.</h1>
      <div className="navigationBar">
        <a onClick={() => { navigate("/"); scrollToClass("home"); }}>Intro</a>
        <a onClick={() => { navigate("/"); scrollToClass("skills"); }}>Skills</a>
        <a onClick={() => { navigate("/"); scrollToClass("projects"); }}>Projects</a>
        <a onClick={() => { navigate("/"); scrollToClass("aboutMe"); }}>About</a>
        <a onClick={() => { navigate("/"); scrollToClass("contactMe"); }}>Contact Me</a>
      </div>
    </div>
  );
}

export default Header;