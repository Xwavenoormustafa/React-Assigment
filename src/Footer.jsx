import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="yummy text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>MNTN</h5>
            <p>Get out there & discover your next slope, mountain & destination!</p>
            <br />
            <span className='fon'>Copyright 2023 MNTN, Inc. Terms & Privacy</span>
          </div>
          <div className="col-md-4 mb-3">
            <h6>More on The Blog</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light text-decoration-none">About MNTN</a></li>
              <li><a href="#contributors" className="text-light text-decoration-none">Contributors & Writers</a></li>
              <li><a href="#write" className="text-light text-decoration-none">Write For Us</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h6>More on MNTN</h6>
            <ul className="list-unstyled">
              <li><a href="#team" className="text-light text-decoration-none">The Team</a></li>
              <li><a href="#jobs" className="text-light text-decoration-none">Jobs</a></li>
              <li><a href="#press" className="text-light text-decoration-none">Press</a></li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
