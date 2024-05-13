import React from "react";
import "../styles/Main.scss";
import "../styles/MainContent.scss";

const Display: React.FC = () => {
  return (
      <section className="display-section">
        <div className="container">
          <h2 className="sec-tit">ABOUT</h2>
          <p className="desc">
            2018 평창 동계올림픽은 2018년 2월 9일부터 2월 25일까지 개최된 제23회
            동계올림픽입니다.
            <br /> 우리나라에서 개최되는 첫 번째 동계올림픽이자, 아시아에서
            개최되는 세 번째 동계올림픽입니다.
          </p>
        </div>
      </section>
  );
};

export default Display;
