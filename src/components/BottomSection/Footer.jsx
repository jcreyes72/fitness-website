import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="column about-us">
          <h5 className="category">
            ABOUT US
          </h5>
          <div className="site-links">
            <a href="/">The Leviathan Way</a><br />
            <a href="/">Jobs</a><br />
            <a href="/">#yourleviathan</a><br />
          </div>
          <h5 className="category bottom">
            SHOPPING
          </h5>
          <div className="site-links">
            <a href="/">Retail Store</a><br />
            <a href="/">Gift Cards</a><br />
            <a href="/">Brands</a><br />
            <a href="/">Gift Registry</a><br />
          </div>
        </div>
        <div className="column customer-service">
          <h5 className='category'>
            CUSTOMER SERVICE
          </h5>
          <div className="site-links">
            <a href="/">Custom Quotes</a><br />
            <a href="/">Checkout FAQ</a><br />
            <a href="/">Track Your Order</a><br />
            <a href="/">Returns and Cancellations</a><br />
            <a href="/">Shipping</a><br />
            <a href="/">Product Policies </a><br />
            <a href="/">Warranty Information</a><br />
            <a href="/">Suggestion Box</a><br />
            <a href="/">Report Website Issue</a><br />
            <a href="/">Customer Survey</a><br />
            <a href="/">Contact Us</a><br />
          </div>
        </div>
        <div className="column policies">
          <h5 className='category'>
            POLICIES & NOTICES
          </h5>
          <div className="site-links">
            <a href="/">Recall Information</a><br />
            <a href="/">Privacy Policy</a><br />
            <a href="/">Terms of Use</a><br />
            <a href="/">Accessibility</a><br />
            <a href="/">Covid-19 Status</a><br />
          </div>
          <h5 className="category bottom">
            OTHER INFO
          </h5>
          <div className="site-links">
            <a href="/">Affiliates</a><br />
            <a href="/">Leviathan Financing</a><br />
            <a href="/">GSA Contract Info</a><br />
            <a href="/">Distribution</a><br />
          </div>
        </div>
        <div className="column other-websites">
          <h5 className='category'>
            OTHER WEBSITES
          </h5>
          <div className="site-links">
            <a href="/">Leviathan Invitational</a><br />
            <a href="/">Leviathan Challenges</a><br />
            <a href="/">Leviathan Athletes</a><br />
            <a href="/">The Leviathan Blog</a><br />
            <a href="/">The Leviathan Gym</a><br />
            <a href="/">Leviathan Equipped Events</a><br />
            <a href="/">Garage Gyms</a><br />
            <a href="/">Please Hire Me</a><br />
            <a href="/">The Index</a><br />
            <a href="/">ZEUS</a><br />
          </div>
          <h5 className="category bottom">
            CONTACT US
          </h5>
          <div className="site-links">
            <div className="contact-info">
              <a href="/">(987) 654-3210</a><br />
              <a href="/">Fax: (012) 345-6789</a><br />
              <p className="fitness-hq">Leviathan Fitness HQ</p>
              <p className='address'>545 E 5th FakeAddress.</p>
              <p className='address'>City, State, Zip</p>
            </div>
          </div>
        </div>
        

        
        
      </div>
    </div>
  )
}

export default Footer