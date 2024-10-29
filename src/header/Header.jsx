import React from 'react';
import myImage from "../imgs/hiker.png"
import image2 from "../imgs/01.png"
import image3 from "../imgs/02.png"


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-img2 navbar-dark">
        <div className="container-fluid ">
          <a className="navbar-brand  text-black" href="/">MTVN</a>
          <button  className="navbar-toggler"  type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center  text-black" id="navbarNav">
            <ul className="navbar-nav  text-black">
              <li className="nav-item">
                <a className="nav-link  text-black" href="/">Equipment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-black" href="/">Mountain</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-black" href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <a className="nav-link text-black" href="/">
              <i className="fas fa-user-circle text-black"></i> Account
            </a>
          </div>
        </div>
      </nav>
      <div className='bg-img '>
      <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <header className="container">
        <h3 className="guide-title text-uppercase mb-2 tet-black">A Hiking Guide</h3>
        <h1 className="main-title mb-3">Be Prepared For The <br /> Mountains And Beyond!</h1>
        <p className="scroll-down mt-3">scroll down ↓</p>
      </header>
    </div>
      
      </div>
      <div className="hiking-level-section">
      <div className="row ">
        <div className="col-md-6 text-content align-item-center">
          <h1 className="section-number">01</h1>
          <h5 className="section-subtitle text-uppercase">Get Started</h5>
          <h2 className="section-title">What level of hiker are you?</h2>
          <p className="section-description">
            Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to your fitness abilities and technical knowledge.
          </p>
          <p className="section-description">
            What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
          </p>
          <a href="#read-more" className="read-more">read more →</a>
        </div>

      
        <div className="col-md-6">
        <div className="image-container">
             <img
    src={myImage} 
    alt="Hiker"
    className="img-fluid"
  />
</div>

        </div>
      </div>
    </div>
    <div className="hiking-gear-section">
      <div className="row">
      
        <div className="col-md-6">
          <div className="image-container">
            <img
              src={image2} 
              alt="1"
              className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-6 text-content">
          <h1 className="section-number">02</h1>
          <h5 className="section-subtitle text-uppercase ">Hiking Essentials</h5>
          <h2 className="section-title">Picking the right <br /> Hiking Gear!</h2>
          <p className="section-description">
          The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
          
          <a href="#read-more" className="read-more">read more →</a>
        </div>
        <div className="hiking-level-section">
      <div className="row">
        <div className="col-md-6 text-content">
          <h1 className="section-number">03</h1>
          <h5 className="section-subtitle text-uppercase">WHERE YOU GO IS THE KEY</h5>
          <h2 className="section-title">Understand Your Map & Timing</h2>
          <p className="section-description">
          To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
          </p>
          <a href="#read-more" className="read-more">read more →</a>
        </div>

      
        <div className="col-md-6">
        <div className="image-container">
             <img
    src={image3} 
    alt="Hiker"
    className="img-fluid"
  />
</div>

        </div>
      </div>
    </div>
      
    
      </div>
    </div>
    </>
  );
};

export default Header;
