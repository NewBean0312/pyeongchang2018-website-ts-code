import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripfire } from "@fortawesome/free-brands-svg-icons";
import "../styles/Main.scss";
import "../styles/MainContent.scss";

const Promotion = () => {
  return (
    <section className="promotion-section">
      <div className="container">
        <ul className="promo-list">
          <li>
            <a href="#none">
              <FontAwesomeIcon icon={faGripfire} />
            </a>
            <h3>올림픽 정신</h3>
            <p>
              선수들은 올림픽 정신으로 세계무대에서 자신의 꿈을 펼칩니다. 이는
              글로벌한 영향력과 영감을 주는 대회입니다.
            </p>
          </li>
          <li>
            <a href="#none">
              <FontAwesomeIcon icon={faGripfire} />
            </a>
            <h3>평화</h3>
            <p>
              올림픽은 평화와 우정의 축제입니다. 전 세계가 함께 모여 스포츠를
              통해 국가 간의 이해와 우정을 쌓는 기회를 제공합니다.
            </p>
          </li>
          <li>
            <a href="#none">
              <FontAwesomeIcon icon={faGripfire} />
            </a>
            <h3>스포츠</h3>
            <p>
              올림픽은 다양한 종목으로 구성되며, 스포츠 요소를 게임에 반영하고,
              최고 수준의 선수들이 경쟁합니다.
            </p>
          </li>
          <li>
            <a href="#none">
              <FontAwesomeIcon icon={faGripfire} />
            </a>
            <h3>국제</h3>
            <p>
              전 세계의 국가들이 올림픽에 참가합니다. 다양한 문화, 언어, 국적의
              플레이어들이 함께 모여 게임을 플레이합니다.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Promotion;
