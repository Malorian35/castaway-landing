import buttonStyles from "./Button.module.css";

interface ButtonProps {
  label: string;
  buttonType?: "button" | "submit" | "reset";
}

const Button = ({ label, buttonType = "button" }: ButtonProps) => {
  return (
    <button 
      className={buttonStyles.primaryButton} 
      type={buttonType}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;