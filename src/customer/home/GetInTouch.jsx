import React from 'react';
import './GetInTouch.css';
import Contact from '../../img/contact.webp'
const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-content">
        <div className="get-in-touch-image">
          <img src={Contact} alt="Illustration" />
        </div>
        <div className="get-in-touch-form-container">
          <h2>GET IN TOUCH</h2>
          <p>Have a question? We're here to help! Send us a message.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="+92" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Describe your issue here</label>
              <textarea id="message" rows="4" placeholder="Describe your issue here"></textarea>
            </div>
            <div className="form-group">
              <button style={{ borderRadius: '45px' }} type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
