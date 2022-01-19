import React from "react";

const OurPartnersSection = ({lang}) => {
  return (
    <section className="our-partners-section  container-fluid d-flex flex-column justify-content-center">
      <div className="container">
        <h4 className="text-center mb-5 fw-normal">{lang.title}</h4>
        <div className="d-flex w-100 mt-2 justify-content-center">
          <div className="partners d-flex justify-content-between">
            <img
              src="/icons/token-icon.webp"
              className="ms-2"
              alt="token-icon"
            />
            <img src="/icons/token-icon.webp" alt="token-icon" />
            <img src="/icons/token-icon.webp" alt="token-icon" />
            <img src="/icons/token-icon.webp" alt="token-icon" />
            <img
              src="/icons/token-icon.webp"
              className="me-2"
              alt="token-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
