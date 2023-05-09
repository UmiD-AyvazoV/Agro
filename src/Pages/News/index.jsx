import "./style.scss";
import bg from "../../Assets/img/Products/bg.png";
import img from "../../Assets/img/NewsTitle/img.png";

export default function News() {
  return (
    <div className="news">
      <div className="bg">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <h1>Yeniliklər</h1>
      </div>
      <div className="newss">

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
    </div>
  );
}
