import img from "../../Assets/img/NewsTitle/img.png";
import "./style.scss";

export default function News() {
  return (
    <div className="container">
      <div className="title">
        <h2>yENİLİKLƏR</h2>
      </div>
      <div className="newsTitle">
        <div className="new">
          <div className="img">
            <img src={img} alt="#" />
          </div>
          <div className="date">
            <p>23</p>
            <p>Fev</p>
          </div>
          <div className="text">
            <h2>Yeniliklər adı</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </div>

        <div className="new">
          <div className="img">
            <img src={img} alt="#" />
          </div>
          <div className="date">
            <p>23</p>
            <p>Fev</p>
          </div>
          <div className="text">
            <h2>Yeniliklər adı</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </div>

        <div className="new">
          <div className="img">
            <img src={img} alt="#" />
          </div>
          <div className="date">
            <p>23</p>
            <p>Fev</p>
          </div>
          <div className="text">
            <h2>Yeniliklər adı</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </div>
      </div>
      <div className="btn">
        <a href="#">Hamısına bax</a>
      </div>
    </div>
  );
}
