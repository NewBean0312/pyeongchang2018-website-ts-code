import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253298.0148028186!2d128.27176736978325!3d38.063551830922755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35622de887f205d7%3A0x388aeb08e26897f9!2z6rCV7JuQ64-EIO2Pieywveq1sA!5e0!3m2!1sko!2skr!4v1715905342653!5m2!1sko!2skr"
        style={{ border: "0" }}
        allowFullScreen={true}
      ></iframe>
      <p className="copyright">PyeongChang 2018</p>
    </footer>
  );
};

export default Footer;
