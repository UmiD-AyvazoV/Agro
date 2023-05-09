import "./style.scss";
import bg from "../../Assets/img/Galery/bg.png";
import img1 from "../../Assets/img/GaleryTitle/1.png";
import img2 from "../../Assets/img/GaleryTitle/2.png";
import img3 from "../../Assets/img/GaleryTitle/3.png";
import img4 from "../../Assets/img/NewsTitle/img.png";

export default function About() {
  return (
    <div className="galery">
      <div className="bg">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <h1>Qalereya</h1>
      </div>

      <div className="container">
        <div className="imgs">

          <div>
            <div className="img">
              <img src={img1} alt="#" />
            </div>
            <div className="img" style={ {height: "451px"} }>
              <img src={img4} alt="#" />
            </div>
            <div className="img">
              <img src={img1} alt="#" />
            </div>
            <div className="img" style={ {height: "451px"} }>
              <img src={img2} alt="#" />
            </div>
          </div>

          <div>
            <div className="img" style={ {height: "451px"} }>
              <img src={img2} alt="#" />
            </div>
            <div className="img">
              <img src={img1} alt="#" />
            </div>
            <div className="img" style={ {height: "451px"} }>
              <img src={img3} alt="#" />
            </div>
            <div className="img">
              <img src={img4} alt="#" />
            </div>
          </div>

          <div>
            <div className="img">
              <img src={img2} alt="#" />
            </div>
            <div className="img" style={ {height: "451px"} }>
              <img src={img3} alt="#" />
            </div>
            <div className="img">
              <img src={img1} alt="#" />
            </div>
            <div className="img" style={ {height: "451px"} }>
              <img src={img2} alt="#" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
