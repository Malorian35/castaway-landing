import componentStyles from "./Hero.module.css";
import MainImage from "../../assets/HeroIcon.png";
import DecorativeElementLeft from "../../assets/effects1.png";
import DecorativeElementRight from "../../assets/effects2.png";
import { platformList } from "../../constants/constants";

const HeroComponent = () => {
  return (
    <section className={componentStyles.mainSection} id="hero">
      <img 
        src={DecorativeElementLeft} 
        alt="Decorative element" 
        className={componentStyles.leftDecoration} 
      />
      <img 
        src={DecorativeElementRight} 
        alt="Decorative element" 
        className={componentStyles.rightDecoration} 
      />

      <div className={componentStyles.imageContainer}>
        <img 
          src={MainImage} 
          alt="Main visual content" 
          className={componentStyles.primaryImage} 
        />
      </div>
      
      <div className={componentStyles.textContainer}>
        <h1 className={componentStyles.mainHeading}>
          Take your podcast to the{" "}
          <span className={componentStyles.emphasisText}>next </span>
          <span className={componentStyles.accentText}>level</span>
        </h1>
        <div className={componentStyles.platformsContainer}>
          <p className={componentStyles.platformsLabel}>Listen on</p>
          <div className={componentStyles.platformsList}>
            {platformList.map((platform) => (
              <div key={platform.id}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;