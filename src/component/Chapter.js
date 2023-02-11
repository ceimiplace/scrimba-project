import { Children } from "react";
import "./Chapter.css";
export default function Chapter({ children }) {
  return <h2 className="chapter">{children}</h2>;
}
