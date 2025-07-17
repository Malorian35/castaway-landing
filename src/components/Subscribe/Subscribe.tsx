import formStyles from "./Subscribe.module.css";
import PrimaryButton from "../Button/Button";
import { useState, type FormEvent } from "react";
import DecorationElement from "../../assets/effects3.png";

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ name: "", email: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className={formStyles.newsletterSection} id="contact">
      <img 
        src={DecorationElement} 
        alt="Decorative element" 
        className={formStyles.decoration} 
      />

      <div className={formStyles.contentContainer}>
        <div className={formStyles.header}>
          <p className={formStyles.sectionTag}>Email Newsletter</p>
          <h2 className={formStyles.sectionHeading}>Subscribe for updates</h2>
        </div>
        
        <div className={formStyles.formContainer}>
          <form onSubmit={handleSubmit} className={formStyles.signupForm}>
            <div className={formStyles.inputGroup}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={formStyles.formInput}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={formStyles.formInput}
                required
              />
            </div>
            <PrimaryButton label="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;