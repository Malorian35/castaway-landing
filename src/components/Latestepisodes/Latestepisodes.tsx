import PrimaryButton from "../Button/Button";
import sectionStyles from "./Latestepisodes.module.css";
import { podcastEpisodes } from "../../const/const";
import EpisodeCard from "../PodcastEpisodeCard/PodcastEpisodeCard";

const Latestepisodes = () => {
  return (
    <section className={sectionStyles.episodesSection} id="episodes">
      <header className={sectionStyles.header}>
        <h2 className={sectionStyles.sectionTitle}>Latest episodes</h2>
        <div className={sectionStyles.buttonContainer}>
          <PrimaryButton text={"View all episodes"} />
        </div>
      </header>
      <div className={sectionStyles.episodesList}>
        {podcastEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} {...episode} />
        ))}
      </div>
    </section>
  );
};

export default Latestepisodes;