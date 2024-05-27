import React from "react";
import "../styles/Main.scss";
import "../styles/MainContent.scss";

const Work: React.FC = () => {
  const workListData = [
    {
      workName: "Short Track Speed Skating",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info01.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work01.jpg`,
    },
    {
      workName: "Snowboard",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info02.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work02.jpg`,
    },
    {
      workName: "Skeleton",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info03.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work03.jpg`,
    },
    {
      workName: "Ski Jumping",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info04.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work04.jpg`,
    },
    {
      workName: "Speed Skating",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info05.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work05.jpg`,
    },
    {
      workName: "Ice Hockey",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info06.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work06.jpg`,
    },
    {
      workName: "Curling",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info07.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work07.jpg`,
    },
    {
      workName: "Figure Skating",
      infoSrc: `${process.env.PUBLIC_URL}/images/s-images/info08.png`,
      workSrc: `${process.env.PUBLIC_URL}/images/p-images/work08.jpg`,
    },
  ];

  return (
    <section className="work-section cfixed">
      <h2 className="sec-tit">WORK</h2>
      <ul className="work-list">
        {workListData.map((work, index) => (
          <li key={index}>
            <a href="#none">
              <div className="info">
                <h3>{work.workName}</h3>
                <img
                  src={work.infoSrc}
                  alt={`info-img${index}`}
                  className="info-img"
                />
                <span>DEFINITION / SCHEDULE</span>
              </div>
              <img
                src={work.workSrc}
                alt={`work-img${index}`}
                className="work-img"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;
