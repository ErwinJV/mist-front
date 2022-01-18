import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="mx-project">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mt-5">
            <small className="text-white">
              Copyright 2021 - All Right Reserved
            </small>
          </div>
          <div className="col mt-5">
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
                <a href="#">Source code</a> <span>|</span> <a href="#">Docs</a>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="options-links d-flex justify-content-between">
              <a href="#">Analytics</a>
              <a href="#">Misty Lake</a>
              <a href="#">Enter App</a>
              <a href="#">Language</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
