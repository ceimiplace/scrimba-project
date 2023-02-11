import logo from "./reactjs-icon.svg";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="react-facts">
      <img src={logo} alt="react logo" />
      <h2 className="react-facts-text">ReactFacts</h2>
    </div>
  );
}
