import Button from "../Button/Button";
import cardStyles from "./PodcastEpisodeCard.module.css";

interface EpisodeCardProps {
  id: string;
  title: string;
  description: string;
  img: string;
  category: string;
}

const PodcastEpisodeCard = ({
  id,
  title,
  description,
  img,
  category,
}: EpisodeCardProps) => {
  return (
    <article className={cardStyles.episodeCard}>
      <div className={cardStyles.cardContent}>
        <img 
          src={img} 
          alt={`Cover for ${title}`} 
          className={cardStyles.coverImage} 
        />

        <div className={cardStyles.episodeDetails}>
          <div className={cardStyles.categoryTag}>
            <span className={cardStyles.categoryLabel}>{category}</span>
          </div>
          <div className={cardStyles.titleGroup}>
            <span className={cardStyles.episodeNumber}>{id}</span>
            <h3 className={cardStyles.episodeTitle}>{title}</h3>
          </div>
          <p className={cardStyles.episodeDescription}>{description}</p>
          <Button label={"View Episode Details"} />
        </div>
      </div>
    </article>
  );
};

export default PodcastEpisodeCard;