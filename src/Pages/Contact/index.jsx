import "./style.scss";
import bg from "../../Assets/img/Galery/bg.png";
import img1 from "../../Assets/img/Contact/img1.png";
import img2 from "../../Assets/img/Contact/img2.png";
import img3 from "../../Assets/img/Contact/img3.png";
import img4 from "../../Assets/img/Contact/img4.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="bg">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <h1>Əlaqə</h1>
      </div>

      <div className="container">
        <div className="info">
          <div className="box">
            <div className="img">
              <img src={img1} alt="#" />
            </div>
            <div className="title">Haqqımızda</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="box">
            <div className="img">
              <img src={img2} alt="#" />
            </div>
            <div className="title">Ünvan</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="box">
            <div className="img">
              <img src={img3} alt="#" />
            </div>
            <div className="title">Əlaqə</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>

        <div className="form">
          <div className="img">
            <img src={img4} alt="#" />
          </div>
          <div className="text">
            <h2>Onlayn müraciət</h2>
            <div className="inp">
              <input type="text" placeholder="Ad və Soyad" />
              <input type="email" placeholder="Email" />
            </div>
            <textarea
              cols="30"
              rows="5"
              placeholder="Mesaj..."
            ></textarea>
            <button type="submit">Göndər</button>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.576720483569!2d49.90671397657624!3d40.41822685554732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306351d4b38089%3A0xb74ef857d0a65d43!2sJED%20Academy!5e0!3m2!1sen!2saz!4v1683610239913!5m2!1sen!2saz" width="100%" height="450" style={ { border:"0" , marginTop: '112px' } } allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  );
}
