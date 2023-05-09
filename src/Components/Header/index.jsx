import { useState } from "react";
import photo from "../../Assets/img/Header/logo.png";
import "./header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header className="header">
        <div className="logo">
          <img src={photo} alt="#" />
        </div>
        <div className="right">
          <div className="info">
            <div className="tel">
              <p>+994 50 500 50 50</p>
              <p>+994 50 500 50 50</p>
            </div>
            <div className="lang">
              <ul>
                <li className="row">
                  AZ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M9.08341 0.958496L5.00008 5.04183L0.916748 0.958496"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <ul className="drop">
                    <li>AZ</li>
                    <li>EN</li>
                    <li>RU</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <nav>
            <ul className={ isOpen ? 'menu slide' : 'menu' }>
              <li>
                <NavLink to="/">Əsas Səhifə</NavLink>
              </li>
              <li>
                <NavLink to="/about">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="/products">Məhsullar</NavLink>
              </li>
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
          </nav>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? "hamburger" : "hamburger"}>
          <div className={isOpen ? "toggle line1" : "line1"}></div>
          <div className={isOpen ? "toggle line2" : "line2"}></div>
          <div className={isOpen ? "toggle line3" : "line3"}></div>
        </div>
      </header>
  );
}
