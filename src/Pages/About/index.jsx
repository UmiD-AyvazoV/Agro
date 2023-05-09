import "./style.scss";
import bg from "../../Assets/img/About/bg.png";
import img1 from "../../Assets/img/About/img1.png";
import img2 from "../../Assets/img/About/img2.png";
import img3 from "../../Assets/img/About/img3.png";

export default function About() {
  return (
    <div className="about">
      <div className="bg">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <h1>Haqqımızda</h1>
      </div>
      <div className="container">
        <div className="content">
          <div className="box1">
            <div className="img">
              <img src={img1} alt="#" />
            </div>
            <div className="text">
              <h2>Lorem ipsun</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="box2">
            <div className="text">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="img">
              <img src={img2} alt="#" />
              <img src={img3} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
