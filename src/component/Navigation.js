import "./Navigation.css";
import Logo from "./Logo/Logo";
import Chapter from "./Chapter";
export default function Navigation() {
  return (
    <nav className="navigation">
      <Logo />
      <Chapter>React Fundamentals - Project 1</Chapter>
    </nav>
  );
}
