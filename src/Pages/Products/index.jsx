import "./style.scss";
import bg from "../../Assets/img/Products/bg.png";
import img1 from "../../Assets/img/Products/img1.png";
import img2 from "../../Assets/img/Products/img2.png";
import img3 from "../../Assets/img/Products/img3.png";
import img4 from "../../Assets/img/Products/img4.png";

export default function Products() {
  return (
    <div className="products">
      <div className="bg">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <h1>Məhsullar</h1>
      </div>
      <div className="container">
        <div className="boxs">
          <div className="box">
            <div className="img">
              <img src={img1} alt="#" />
            </div>
            <div className="title">Alma “Golden Delicious”</div>
            <div className="info">
              <p>Kalibri: 70-80 mm </p>
              <p>Çəkisi: 140-170 qram</p>
              <p>Dadı: Kəmşirin</p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img2} alt="#" />
            </div>
            <div className="title">Alma “Mondial Gala”</div>
            <div className="info">
              <p>Kalibri: 70-80 mm </p>
              <p>Çəkisi: 140-170 qram</p>
              <p>Dadı: Kəmşirin</p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img3} alt="#" />
            </div>
            <div className="title">Alma “ Granny Smith”</div>
            <div className="info">
              <p>Kalibri: 70-80 mm </p>
              <p>Çəkisi: 140-170 qram</p>
              <p>Dadı: Kəmşirin</p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img4} alt="#" />
            </div>
            <div className="title">Alma “ Fuji ”</div>
            <div className="info">
              <p>Kalibri: 70-80 mm </p>
              <p>Çəkisi: 140-170 qram</p>
              <p>Dadı: Kəmşirin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
