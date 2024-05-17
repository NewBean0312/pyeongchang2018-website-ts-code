import React from "react";
import Header from "../components/common/Header";
import Slider from "../components/Slider";
import Display from "../components/Display";
import Promotion from "../components/Promotion";
import Work from "../components/Work";
import News from "../components/News";
import Footer from "../components/Footer";
import "../styles/Main.scss";

const MainPage:React.FC = () => {

  return (
    <>
      <Header />
      <Slider />
      <div className="content">
        <Display />
        <Promotion />
        <hr className="divider" />
        <Work />
        <hr className="m-divider"/>
        <News />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
