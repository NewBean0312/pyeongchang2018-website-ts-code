import React from "react";
import Header from "../components/common/Header";
import Slider from "../components/Slider";
import Display from "../components/Display";
import Promotion from "../components/Promotion";

const MainPage = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="content">
        <Display />
        <Promotion />
      </div>
    </>
  );
};

export default MainPage;
