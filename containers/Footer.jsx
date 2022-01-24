import React from "react";

const Footer = ({ lang }) => {
  return (
    <footer>
      <div className="max-width">
        <div className="mx-project">
          <div className="row ">
            <div className="col-12 col-lg-4 d-flex justify-content-center mt-5">
              <small className="text-white text-center">{lang.copyright}</small>
            </div>
            <div className="col-12 col-lg-4 mt-5">
              <div className="contact-app d-flex flex-column justify-content-center">
                <div className="contact-icons d-flex justify-content-center">
                  <a href="#" className="me-3">
                    <img src="/icons/telegram.webp" alt />
                  </a>
                  <a href="#" className="me-3">
                    <img src="/icons/twitter.webp" alt />
                  </a>
                  <a href="#" className="me-3">
                    <img src="/icons/discord.webp" alt />
                  </a>
                  <a
                    href="#"
                    className="social-icon d-flex justify-content-center align-items-center rounded-circle"
                    docs
                  >
                    <img src="/icons/social.webp" alt />
                  </a>
                </div>
                <div className="contact-links text-center mt-3">
                  <a href="#">{lang.center_nav[0]}</a> <span>|</span>{" "}
                  <a href="#">{lang.center_nav[1]}</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-5">
              <div className="options-links d-flex flex-column justify-content-center align-items-center  flex-xl-row   justify-content-between">
                <a href="#">{lang.right_nav[0]}</a>
                <a href="#">{lang.right_nav[1]}</a>
                <a href="#">{lang.right_nav[2]}</a>
                <a href="#">{lang.right_nav[3]}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
