import React from "react";

const FaqSection = ({ lang }) => {
  return (
    <div className="faq-section position-relative">
      <div className="max-width">
        <img
          src="/icons/crecent-mist-icon.webp"
          className="crecent-mist-icon position-absolute"
          alt="icon-crecent-mist"
        />
        <div className="mx-project">
          <div className="faq-text text-white text-center">
            <h4 className="fw-bolder">{lang.title}</h4>
            <p className="fw-normal mx-auto mx-md-0 ">{lang.text}</p>
          </div>
          <div className="faq-boxes mx-auto d-flex flex-column flex-lg-row">
            <ul className="list-group mx-auto  faq-group">
              <li className="list-group-item">
                <span>{lang.questions.A}</span>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <span>{lang.questions.B}</span>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <span>{lang.questions.C}</span>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <span>{lang.questions.D}?</span>
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                {lang.questions.E}
                <span />
                <i className="bi bi-chevron-right" />
              </li>
              <li className="list-group-item">
                <span>{lang.questions.F}</span>
                <i className="bi bi-chevron-right" />
              </li>
            </ul>
            <div className="answer-box mx-auto mx-md-0 ">
              <div className="answer-text  p-4 text-white">
                {/*  <p>
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
            </p> */}
                {lang.answers.A}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
