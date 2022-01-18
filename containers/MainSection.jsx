import React from 'react';
import Image from 'next/image';

const MainSection = () => {
 const path = process.env.NEXT_APP_SERV
  return (
       <section className="main-section d-flex flex-column container-fluid p-0 position-relative">
  <div className="container">
    {/*NAV*/}
    <div className="mist-nav">
      <nav className="d-flex justify-content-between w-100 h-100 text-white fixed">
        <ul className="nav align-self-center ms-3">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              <div className="navbar-brand d-flex">
                <span className="me-2 align-self-center"> <img src="/icons/logo-icon.webp" alt="logo-icon" /></span>
                <span className="align-self-center"><img src="/icons/logo-letter.webp" alt='logo-letter' /></span>
              </div>
            </a>
          </li>
        </ul>
        <ul className="nav center-links me-5 justify-content-between">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Analytics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Misty Lake</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Documents</a>
          </li>
        </ul>
        <div className="lang mt-5 d-flex justify-content-center me-3">
          <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              
              <img src="/icons/En-icon.webp" alt="lang-icon" />
            </button>
            <ul className="dropdown-menu bg-transparent" aria-labelledby="dropdownMenuButton1">
              <li className="d-flex justify-content-center">
              <img src="/icons/En-icon.webp" alt="lang-icon" />
              </li>
              <li className="d-flex justify-content-center">
              <img src="/icons/En-icon.webp" alt="lang-icon" />
              </li>
              <li className="d-flex justify-content-center">
              <img src="/icons/En-icon.webp" alt="lang-icon" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    {/*COIN-BOARD*/}
    <div className="coin-board rounded-pill position-absolute bg-light">
      <ul className="w-100 h-100 d-flex rounded-pill s">
        <li className="flex-fill flex-column border-end-gray">
          <span className="desc-price text-success">Price</span>
          <div className="price-coin mb-2">$00.0</div>
        </li>
        <li className="flex-fill flex-column border-end-gray">
          <span className="ms-3 desc-price text-success">Total value locked</span>
          <div className="ms-3 price-coin">$00.0</div>
        </li>
        <li className="flex-fill flex-column border-end-gray">
          <span className="ms-3 desc-price text-success">Volume</span>
          <div className="ms-3 price-coin">$00.0</div>
        </li>
        <li className="flex-fill d-flex justify-content-between">
          <div className="flex-column">
            <span className="ms-3 desc-price text-success">Pairs</span>
            <div className="ms-3 price-coin">$00.0</div>
          </div>
          <a href="#" className="btn btn-cool text-white rounded-pill">Enter the app</a>
        </li>
      </ul>
    </div>
    {/*COIN FACTORY*/}
    <div className="coin-factory w-100 d-flex justify-content-center">
      
     {/* <Image src="/images/coin-factory.webp" alt="coin-factory" width={500} height={500}/> */} 
      <img src="/images/coin-factory.webp" alt="coin-factory" />
    </div>
    {/*TITLE & SLOGAN*/}
    <div className="main-text mt-4 d-flex flex-column flex-md-row text-white bg-transparent w-full">
      <h1 className="mist-title flex text-center fw-bolder">
        Defi On Bitcoin Cash
      </h1>
      <p className="mist-slogan text-end">
        Trade, launch, stake, farm, invest, automate, build on the premier
        DeFi platform of smartBCH
      </p>
    </div>
  </div>
</section>

    );
};

export default MainSection;