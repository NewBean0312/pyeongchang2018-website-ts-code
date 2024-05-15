import React from "react";
import "../styles/Main.scss";
import "../styles/MainContent.scss";
import NewsData from "../json/NewsData.json";

const News: React.FC = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="sec-tit">NEWS</h2>
        <ul className="news-list">
          {NewsData.map((data, index) => (
            <li key={index}>
              <a href="#none">
                <img
                  src={`${process.env.PUBLIC_URL}/images/p-images/news${data.no}.jpg`}
                  alt={`news${data.no}`}
                />
              </a>
              <time dateTime={data.dateTime}>{data.dateTime2}</time>
              <a href="#none">
                <h3>{data.title}...</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
