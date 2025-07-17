import { testimonials } from "../../constants/constants";
import TestimonialCard from "../Reviewitem/Reviewitem";
import sectionStyles from "./Reviews.module.css";

const TestimonialsSection = () => {
  return (
    <section className={sectionStyles.testimonials}>
      <div className={sectionStyles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            title={testimonial.feedback}
            name={testimonial.reviewer}
            starCount={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;