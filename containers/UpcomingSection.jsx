import React from "react";

const UpcomingSection = ({ lang }) => {
  return (
    <section className="mist-carousel upcoming text-white position-relative container-fluid">
      <div className="max-width">
        {" "}
        <img
          src="/icons/middle-mist-logo.webp"
          className="left-icon-mist-down position-absolute"
          alt="middle-icon-mist"
        />
        <div className="mx-project h-100">
          <div className="w-100 title-section d-flex justify-content-between">
            <h2 className="fw-bolder">{lang.title}</h2>
            {/*CAROUSEL CONTROLS*/}
            <div className="d-flex justify-content-between me-3">
              <button
                className="carousel-control-prev me-4"
                type="button"
                data-bs-target="#upcomingSection"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left fs-4" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#upcomingSection"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right fs-4" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/*CAROUSEL */}
          <div
            id="upcomingSection"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/*ITEM CAROUSEL*/}
              <div className="carousel-item active mb-5">
                <div className="row row-cols-2">
                  <div className="col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel">
                      {lang.title_carousel}
                    </h3>
                    <p className="text-carousel">{lang.text_carousel}</p>
                    <a
                      href="#"
                      className="btn-mist mt-4 text-decoration-none py-1 px-3 rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/*ITEM CAROUSEL*/}
              <div className="carousel-item  mb-5">
                <div className="row row-cols-2">
                  <div className="col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel">
                      {lang.title_carousel}
                    </h3>
                    <p className="text-carousel">{lang.text_carousel}</p>
                    <a
                      href="#"
                      className="btn-mist mt-4 text-decoration-none py-1 px-3 rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/*ITEM CAROUSEL*/}
              <div className="carousel-item  mb-5">
                <div className="row row-cols-2">
                  <div className="col" />
                  <div className="col">
                    <h3 className="fw-bolder title-carousel">
                      {lang.title_carousel}
                    </h3>
                    <p className="text-carousel">{lang.text_carousel}</p>
                    <a
                      href="#"
                      className="btn-mist mt-4 text-decoration-none py-1 px-3 rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
