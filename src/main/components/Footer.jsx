import React from 'react';


const Footer = (props) => {
  return (
    <div className="footer-botm">
      <div className="container">
          <div className="chiranjit-foot">
              <ul>
                  <li><a href="about-us">About Us</a></li>
                  <li><a href="refund-and-cancellation">Refund & Cancellation</a></li>
                  <li><a href="terms-and-conditions">T & C</a></li>
                  <li><a href="privacy-policy">Privacy Policy</a></li>
                  <li><a href="pricing-policy">Pricing Policy</a></li>
                  <li><a href="feedback">Feedback</a></li>
              </ul>
          </div>
          <div className="payment-w3ls">	
              &copy; 2018 Shofast
          </div>
          <div className="clearfix"> </div>
      </div>
      <div><a href="/" className="back-to-top"><i className="fa fa-chevron-up"></i></a></div>
  </div>
  
    
  
  );
};

export default Footer;