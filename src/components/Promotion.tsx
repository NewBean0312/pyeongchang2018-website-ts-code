import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripfire } from "@fortawesome/free-brands-svg-icons";
import "../styles/Main.scss";
import "../styles/MainContent.scss";
import {
  faEarthAmericas,
  faMedal,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { PromotionType } from "../model/type";

let promotionData: PromotionType = {
  list: [
    {
      icon: faGripfire,
      name: "올림픽 정신",
      content:
        "선수들은 올림픽 정신으로 세계무대에서 자신의 꿈을 펼칩니다. 이는 글로벌한 영향력과 영감을 주는 대회입니다.",
    },
    {
      icon: faUserGroup,
      name: "평화",
      content:
        "올림픽은 평화와 우정의 축제입니다. 전 세계가 함께 모여 스포츠를 통해 국가 간의 이해와 우정을 쌓는 기회를 제공합니다.",
    },
    {
      icon: faMedal,
      name: "스포츠",
      content:
        "올림픽은 다양한 종목으로 구성되며, 스포츠 요소를 게임에 반영하고, 최고 수준의 선수들이 경쟁합니다.",
    },
    {
      icon: faEarthAmericas,
      name: "국제",
      content:
        "전 세계의 국가들이 올림픽에 참가합니다. 다양한 문화, 언어, 국적의 플레이어들이 함께 모여 게임을 플레이합니다.",
    },
  ],
};

const Promotion: React.FC = () => {
  return (
    <section className="promotion-section">
      <div className="container">
        <ul className="promo-list">
          {promotionData.list.map((data, index) => (
            <li key={index}>
              <a href="#none">
                <FontAwesomeIcon icon={data.icon} className="promo-logo" />
              </a>
              <h3>{data.name}</h3>
              <p>{data.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Promotion;
