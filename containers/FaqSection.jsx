import React from "react";

const FaqSection = () => {
  return (
    <div className="faq-section position-relative">
      <img
        src="/icons/crecent-mist-icon.webp"
        className="crecent-mist-icon position-absolute"
        alt="icon-crecent-mist"
      />
      <div className="mx-project">
        <div className="faq-text text-white text-center">
          <h4 className="fw-bolder">Frequently asked questions</h4>
          <p className="fw-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
        <div className="faq-boxes">
          <ul className="list-group faq-group">
            <li className="list-group-item">
              <span>Lorem ipsum dolor sit amet? </span>
              <i className="bi bi-chevron-right" />
            </li>
            <li className="list-group-item">
              <span>Sed diam nonummy nibh euismod tincidunt ut laoreet?</span>
              <i className="bi bi-chevron-right" />
            </li>
            <li className="list-group-item">
              <span>Quis nostrud exerci tation ullamcorper suscipit?</span>
              <i className="bi bi-chevron-right" />
            </li>
            <li className="list-group-item">
              <span>Quis nostrud exerci tation ullamcorper?</span>
              <i className="bi bi-chevron-right" />
            </li>
            <li className="list-group-item">
              Consectetuer adipiscing elit?
              <span />
              <i className="bi bi-chevron-right" />
            </li>
            <li className="list-group-item">
              <span>Duis autem vel eum iriure dolor in hendrerit?</span>
              <i className="bi bi-chevron-right" />
            </li>
          </ul>
          <div className="answer-box">
            <div className="answer-text p-4 text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
