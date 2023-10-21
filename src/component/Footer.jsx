import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer_content_container">
        <div id="footer_info_container">
          <h3 className="section_title">title here</h3>
          <p className="section_discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a
            deleniti perspiciatis magnam qui, et excepturi hic laboriosam facere
            reiciendis ad veniam nesciunt dolores. Voluptate expedita
            praesentium nulla rerum.
          </p>
          <div className="social_media_link_container">
            <a href="/" className="social_media_link">
              I
            </a>
            <a href="/" className="social_media_link">
              F
            </a>
            <a href="/" className="social_media_link">
              T
            </a>
            <a href="/" className="social_media_link">
              W
            </a>
          </div>
        </div>
        <div id="footer_link_container">
          <div id="footer_about_container">
            <h3 className="section_title">about</h3>
            <a href="/" className="footer_link about_link">
              history
            </a>
            <a href="/" className="footer_link about_link">
              our team
            </a>
            <a href="/" className="footer_link about_link">
              brand guidline
            </a>
            <a href="/" className="footer_link about_link">
              terms & condition
            </a>
            <a href="/" className="footer_link about_link">
              privacy policy
            </a>
          </div>
          <div id="footer_service_container">
            <h3 className="section_title">services</h3>
            <a href="/" className="footer_link service_link">
              how to order
            </a>
            <a href="/" className="footer_link service_link">
              our product
            </a>
            <a href="/" className="footer_link service_link">
              oeder status
            </a>
            <a href="/" className="footer_link service_link">
              promo
            </a>
            <a href="/" className="footer_link service_link">
              payment method
            </a>
          </div>
          <div id="footer_other_container">
            <h3 className="section_title">other</h3>
            <a href="/" className="footer_link other_link">
              contact us
            </a>
            <a href="/" className="footer_link other_link">
              help
            </a>
            <a href="/" className="footer_link other_link">
              privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
