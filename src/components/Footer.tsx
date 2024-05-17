import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3158.2286079692144!2d128.70440142813803!3d37.66733574366271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQwJzAyLjQiTiAxMjjCsDQyJzIxLjIiRQ!5e0!3m2!1sko!2skr!4v1715907378648!5m2!1sko!2skr"
        style={{ border: "0" }}
        allowFullScreen={true}
      ></iframe>
      <p className="copyright">PyeongChang 2018</p>
    </footer>
  );
};

export default Footer;
