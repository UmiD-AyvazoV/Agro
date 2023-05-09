import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "../../Assets/img/Footer/logo.png";
import row from "../../Assets/img/Footer/row.png";
import ins from "../../Assets/img/Footer/ins.png";
import wp from "../../Assets/img/Footer/wp.png";
import fb from "../../Assets/img/Footer/fb.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="#" />
        </div>
        <div className="list">
          <ul>
            <li>
              <NavLink to="/">Əsas Səhifə</NavLink>
            </li>
            <li>
              <NavLink to="/about">Haqqımızda</NavLink>
            </li>
            <li>
              <NavLink to="/products">Məhsullar</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/news">Yeniliklər</NavLink>
            </li>
            <li>
              <NavLink to="/galery">Qalereya</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Əlaqə</NavLink>
            </li>
          </ul>
        </div>
        <form>
          <h2>Lorem Ipsum</h2>
          <div className="inp">
            <input type="text" placeholder="Email" />
            <div className="crcle">
                <img src={row} alt="#" />
            </div>
          </div>
        </form>
      </div>
      <div className="icons">
        <img src={ins} alt="#" />
        <img src={wp} alt="#" />
        <img src={fb} alt="#" />
      </div>
    </div>
  );
}
