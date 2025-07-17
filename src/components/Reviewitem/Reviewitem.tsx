import cardStyles from "./Reviewitem.module.css";
import StarIcon from "../../assets/star.png";

interface TestimonialProps {
  title: string;
  name: string;
  starCount: number;
}

const TestimonialCard = ({ title, name, starCount }: TestimonialProps) => {
  return (
    <article className={cardStyles.testimonial}>
      <div className={cardStyles.rating}>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < starCount ? StarIcon : ""}
            alt={index < starCount ? "Filled star" : "Empty star"}
            className={cardStyles.starIcon}
            aria-hidden={index >= starCount}
          />
        ))}
      </div>
      <blockquote className={cardStyles.quote}>{title}</blockquote>
      <footer className={cardStyles.author}>{name}</footer>
    </article>
  );
};

export default TestimonialCard;