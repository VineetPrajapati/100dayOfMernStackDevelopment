import "./Button.css"
const Button = ({ text, onClick, disabled }) => {
  return (
    <div className="button_container">
      <button onClick={onClick} disabled={disabled}>{text}</button>
    </div>
  );
};

export default Button;
