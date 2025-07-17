import navigationStyles from "./Head.module.css";
import "../../index.css";
import SiteLogo from "../../assets/Logo.png";

const Navigation = () => {
  return (
    <header className="container">
      <div className={navigationStyles.navWrapper}>
        <div className={navigationStyles.logoContainer}>
          <a href="#">
            <img src={SiteLogo} alt="logo" />
          </a>
        </div>
        <nav className={navigationStyles.menu}>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#episodes">Episodes</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;