import React,{useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";


const MainSection = ({lang}) => {
const router = useRouter()
 
const [icon,setIcon] = useState(`/icons/${router.locale}-icon.webp`);
 
const changeLang = (e) => {
   
    router.push(router.pathname, router.pathname, {
       locale: e.target.value,
    })

   setIcon(`/icons/${e.target.value}-icon.webp`)
  
    
  };

  
  return (
    <section className="main-section d-flex flex-column container-fluid p-0 position-relative">
      <div className="container max-width">
        {/*NAV*/}
        <div className="mist-nav">
          <nav className="d-flex justify-content-between w-100 h-100 text-white fixed">
            <ul className="nav align-self-center ms-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <div className="navbar-brand d-flex">
                    <span className="me-2 align-self-center">
                      {" "}
                      <img src="/icons/logo-icon.webp" alt="logo-icon" />
                    </span>
                    <span className="align-self-center">
                      <img src="/icons/logo-letter.webp" alt="logo-letter" />
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="nav center-links me-5 justify-content-between">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {lang.nav_center[0]}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                {lang.nav_center[1]}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                {lang.nav_center[2]}
                </a>
              </li>
            </ul>

            {/*LANG */}

            <div className="lang mt-5 d-flex justify-content-center me-3">
              {/* <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              
              <img src="/icons/En-icon.webp" alt="lang-icon" />
            </button>
            <ul className="dropdown-menu bg-transparent" aria-labelledby="dropdownMenuButton1">
              <li className="d-flex justify-content-center" value={5} onClick={changeLang}>
              <img src="/icons/En-icon.webp" alt="lang-icon"  />
              </li>
              <li className="d-flex justify-content-center" value={4} onClick={changeLang}>
              <img src="/icons/En-icon.webp" alt="lang-icon"  />
              </li>
              <li className="d-flex justify-content-center" value={4} onClick={changeLang}>
              <img src="/icons/En-icon.webp" alt="lang-icon" />
              </li>
            </ul>
              </div> 
      */}
              <img src={icon} className="me-2" width={30} height={30} alt="lang-icon" />
              <select
                className="form-select text-white  rounded-2 bg-transparent"
                aria-label="Default select example"
                onChange={changeLang}
              >
               
               
                <option value={"en"} selected={ (router.locale == 'en') ? true : false } >{lang.lang[0]}</option>
                <option value={"es"} selected={ (router.locale == 'es') ? true : false } >{lang.lang[1]}</option>
                
              </select>
            </div>
          </nav>
        </div>
        {/*COIN-BOARD*/}
        <div className="coin-board rounded-pill position-absolute bg-light">
          <ul className="w-100 h-100 d-flex rounded-pill s">
            <li className="flex-fill flex-column border-end-gray">
              <span className="desc-price text-success">{lang.coin_board[0]}</span>
              <div className="price-coin mb-2">$00.0</div>
            </li>
            <li className="flex-fill flex-column border-end-gray">
              <span className="ms-3 desc-price text-success">
              {lang.coin_board[1]}
              </span>
              <div className="ms-3 price-coin">$00.0</div>
            </li>
            <li className="flex-fill flex-column border-end-gray">
              <span className="ms-3 desc-price text-success">{lang.coin_board[2]}</span>
              <div className="ms-3 price-coin">$00.0</div>
            </li>
            <li className="flex-fill d-flex justify-content-between">
              <div className="flex-column">
                <span className="ms-3 desc-price text-success">{lang.coin_board[3]}</span>
                <div className="ms-3 price-coin">$00.0</div>
              </div>
              <a href="#" className="btn btn-cool text-white rounded-pill">
              {lang.coin_button}
              </a>
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
        {lang.main_title}
        </h1>
        <p className="mist-slogan text-end">
         {lang.main_text}
        </p>
      </div> 
      </div>
    </section>
  );
};

export default MainSection;


