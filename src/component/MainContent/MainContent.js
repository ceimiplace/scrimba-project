import "./MainContent.css";
import logoContainer from "./reactjs-icon 2.svg";
export default function MainContent({ children }) {
  return (
    <main className="main-container">
      <img src={logoContainer} className="main-container-logo" />
      {children}
    </main>
  );
}
