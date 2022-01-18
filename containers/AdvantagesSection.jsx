import React from "react";

const AdvantagesSection = () => {
  return (
    <section className="container-fluid advantages-section pt-5 position-relative">
      <img
        src=".//icons/middle-mist-logo-l.webp"
        className="middle-icon-mist-small-l position-absolute"
        alt="middle-icon-mist"
      />
      <div className="mx-project as-text d-flex flex-column">
        <h2 className="text-center fw-bolder mt-5">Lorem ipsum</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <div className="mx-project">
        <div className="row">
          {/*CARD ITEM*/}
          <div className="col-12 col-lg-3 card-box d-flex justify-content-center align-items-center rounded-2 position-relative">
            <div className="card-box-body d-flex flex-column rounded-2">
              <div className="icon-container d-flex justify-content-center align-items-center rounded-circle position-absolute">
                <img src="/icons/earn-icon.webp" alt="icon-card-box" />
              </div>
              <div className="card-box-text d-flex flex-column justify-content-end align-items-center align-self-center">
                <h3 className="text-center">EARN</h3>
                <p className="text-center">
                  Earn more by providing liquidity and staking, more than any
                  other exchange. 0.25% for providing liquidity 0.05% for
                  holders of xMIST
                </p>
              </div>
            </div>
          </div>
          {/*CARD ITEM*/}
          <div className="col-12 col-lg-3 card-box d-flex justify-content-center align-items-center rounded-2 position-relative">
            <div className="card-box-body d-flex flex-column rounded-2">
              <div className="icon-container d-flex justify-content-center align-items-center rounded-circle position-absolute">
                <img src="/icons/stake-icon.webp" alt="icon-card-box" />
              </div>
              <div className="card-box-text d-flex flex-column justify-content-end align-items-center align-self-center">
                <h3 className="text-center">STAKE</h3>
                <p className="text-center">
                  Stake MIST for xMIST and earn fees using the MistBar
                </p>
              </div>
            </div>
          </div>
          {/*CARD ITEM*/}
          <div className="col-12 col-lg-3 card-box d-flex justify-content-center align-items-center rounded-2 position-relative">
            <div className="card-box-body d-flex flex-column rounded-2">
              <div className="icon-container d-flex justify-content-center align-items-center rounded-circle position-absolute">
                <img src="/icons/redeem-icon.webp" alt="icon-card-box" />
              </div>
              <div className="card-box-text d-flex flex-column justify-content-end align-items-center align-self-center">
                <h3 className="text-center">REDEEM</h3>
                <p className="text-center">
                  Redeem MIST (one-to-one) and DROP (one-to-five) SLP tokens
                  with MIST tokens using Misty Lake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
