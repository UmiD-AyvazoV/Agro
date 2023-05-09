import "../Banner/banner.scss";
import { NavLink } from "react-router-dom";
import Video from "../Video";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="title">
          <h2>Başliq</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt{" "}
          </p>
          <NavLink to="/">Məhsullar</NavLink>
        </div>
      </div>
      <Video />
    </div>
  );
}
