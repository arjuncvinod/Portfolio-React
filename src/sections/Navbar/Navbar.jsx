import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css"

function NavBar() {
  const [active, setActive] = useState(false);
  const [cls, setCls] = useState("inactive");

  function openNav() {
    setActive(true);
    setCls("Active");
  }
  function closeNav() {
    setActive(false);
    setCls("inactive");
  }
  return (
    <nav>
      <a href="/">
       arjun
      </a>
      {/* <ul style={{ width: `${width}` }}> */}
      <ul className={cls}>
      <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      {active ? (
        <button className="menu-container" onClick={closeNav}>
          <CloseIcon className="menu close" />
        </button>
      ) : (
        <button className="menu-container" onClick={openNav}>
          <MenuIcon className="menu" />
        </button>
      )}
    </nav>
  );
}
export default NavBar;