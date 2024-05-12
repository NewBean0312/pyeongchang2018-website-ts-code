import React from "react";

const Slider: React.FC = () => {
  return (
    <article className="slider">
      <img
        src={`${process.env.PUBLIC_URL}/images/p-images/slide01.jpg`}
        alt="slide-img"
      />
    </article>
  );
};

export default Slider;
