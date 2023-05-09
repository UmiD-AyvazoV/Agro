import { useState } from "react";
import "./style.scss";

const menuRight = [
  {
    id: 0,
    percentage: 44,
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    title: "Lorem ipsum",
    desc2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 1,
    percentage: 41,
    desc1: "Lorem ipsum dolor sit amet consectetur ullam et eveniet non.",
    title: "Ipsum Lorem",
    desc2: "Ut rerum, doloribus, officia iusto necessitatibus quas.",
  },
  {
    id: 2,
    percentage: 42,
    desc1:
      "Dolore necessitatibus dolores natus sequi, culpa atque rerum! Vitae, quasi.",
    title: "Lorem ipsum",
    desc2:
      "Rem sed animi quam magni. Asperiores molestiae,  nihil, quod numquam.ss",
  },
];

const menuLeft = [
  {
    id: 0,
    title: "Lorem",
  },
  {
    id: 1,
    title: "Lorem",
  },
  {
    id: 2,
    title: "Lorem",
  },
];

export default function Info() {
  const [active, setActive] = useState(0);
  return (
    <div className="agroInfo">
      <div className="container">
        <h2 className="agroTitle">Əsas məsələlər</h2>
        <div className="box">
          <div className="imgs">
            {menuLeft.map(({ id, title }) => (
              <div
                key={id}
                className={active === id ? "img zeroOn" : "img zeroOf"}
                onClick={() => {
                  setActive(id);
                }}
              >
                <div className="bg"></div>
                <h2 style={{ color: active === id ? "#3eb549" : "#f2f2f2" }}>
                  {title}
                </h2>
              </div>
            ))}
          </div>
          {menuRight
            .filter(({ id }) => id === active)
            .map(({ id, desc1, desc2, percentage, title }) => (
              <div key={id} className="content">

                <div className="upTitle">
                  <h2>{percentage}%</h2>
                  <p>{desc1}</p>
                </div>

                <div className="downTitle">
                  <h2>{title}</h2>
                  <p>{desc2}</p>
                </div>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
