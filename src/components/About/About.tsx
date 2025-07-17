import sectionStyles from "./About.module.css";
import HostPhoto from "../../assets/AboutImage.png";
import ArrowIcon from "../../assets/arrow.png";

const HostProfile = () => {
  return (
    <section className={sectionStyles.profileSection} id="about">
      <div className={sectionStyles.profileContainer}>
        <div className={sectionStyles.profileContent}>
          <button className={sectionStyles.arrowButton}>
            <img 
              src={ArrowIcon} 
              alt="Navigate" 
              className={sectionStyles.arrowIcon} 
            />
          </button>
          <p className={sectionStyles.sectionLabel}>Meet your host</p>
          <h2 className={sectionStyles.hostName}>Jacob Paulaner</h2>
          <div className={sectionStyles.descriptionWrapper}>
            <p className={sectionStyles.hostDescription}>
              Jacob has a background in audio engineering, and has been podcasting
              since the early days.
            </p>
            <p className={sectionStyles.hostDescription}>
              He's here to help you level up your game by sharing everything
              he's learned along the way.
            </p>
          </div>
        </div>
        <div className={sectionStyles.imageContainer}>
          <img
            src={HostPhoto}
            alt="Jacob Paulaner, podcast host"
            className={sectionStyles.hostImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HostProfile;