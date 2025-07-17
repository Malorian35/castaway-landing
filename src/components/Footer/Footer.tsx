import footerStyles from "./Footer.module.css";
import BrandLogo from "../../assets/Logo.png";
import InstagramIcon from "../../assets/inst.png";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import { platformList } from "../../constants/constants";

const SiteFooter = () => {
  const mainMenuItems = ["Home", "About", "Episodes", "Contact"];
  const secondaryMenuItems = [
    "Style Guide",
    "Instructions",
    "Changelog",
    "Credit",
    "Powered by Webflow",
    "Licenses"
  ];

  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.brandColumn}>
          <a href="#" className={footerStyles.brandLink}>
            <img src={BrandLogo} alt="Company logo" className={footerStyles.brandLogo} />
          </a>
          <div className={footerStyles.socialLinks}>
            <a href="#" className={footerStyles.socialIcon}>
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#" className={footerStyles.socialIcon}>
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="#" className={footerStyles.socialIcon}>
              <img src={FacebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className={footerStyles.menuColumn}>
          <ul className={footerStyles.menu}>
            {mainMenuItems.map((item) => (
              <li key={item} className={footerStyles.menuLink}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={footerStyles.menuColumn}>
          <ul className={footerStyles.menu}>
            {secondaryMenuItems.map((item) => (
              <li key={item} className={footerStyles.menuLink}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={footerStyles.platformsColumn}>
          <div className={footerStyles.platforms}>
            {platformList.map((platform) => (
              <a 
                key={platform.id} 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className={footerStyles.platformLink}
              >
                <img src={platform.icon} alt={platform.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;