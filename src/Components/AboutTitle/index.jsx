import "./style.scss";
import bg from "../../Assets/img/AboutTitle/bg.png";

export default function About() {
  return (
    <div className="aboutTitle">
      <div className="green">
        <h2>Haqqımızda</h2>
      </div>
      <div className="img">
        <img src={bg} alt="#" />
        <div className="text">
          <h2>Lorem Ipsun</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor</p>
          <a href="#">Daha Ətraflı</a>
        </div>
      </div>
    </div>
  );
}
