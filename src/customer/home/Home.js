// src/Home.js
import React from 'react';
import { Button, Row, Col } from 'antd';
import { motion } from "framer-motion";
import './Home.css'; // Create this CSS file for styling
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './Services';
import Work from './Work';
// import Feature from './Feature';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import AboutUs from './About';
import modern from '../../img/moderne.webp'
import GetInTouch from './GetInTouch';
import FooterComponent from './Footer';
import Boy from "../../img/boy.png"
import Brandwork from './Brandwork';
import Taylorwork from './Taylorwork';
import Navbar from './Navbar';
// 

const Home = () => {

  const transition = {
    duration: 1,
    ease: 'easeInOut',
  };

  return (
    <>
      {/* NAVIGATION */}
      {/* <Router> */}
      <Navbar />
      {/* <Routes> */}
      {/* <Route path='./pages/Psuit' component={Psuit} /> */}
      {/* <Route path="/luxury-suits" component={LuxurySuitsPage} />
      <Route path="/new-arrivals" component={NewArrivalsPage} />
      <Route path="/european-collection" component={EuropeanCollectionPage} />
      <Route path="/wedding-collection" component={WeddingCollectionPage} />
      <Route path="/dress-shirts" component={DressShirtsPage} />
      <Route path="/premium-shirts" component={PremiumShirtsPage} />
      <Route path="/casual-shirts" component={CasualShirtsPage} />
      <Route path="/camp-shirts" component={CampShirtsPage} />
      <Route path="/all-shirts" component={AllShirtsPage} />
      <Route path="/premium-pants" component={PremiumPantsPage} />
      <Route path="/luxury-pants" component={LuxuryPantsPage} />
      <Route path="/casual-pants" component={CasualPantsPage} />
      <Route path="/all-pants" component={AllPantsPage} />
      <Route path="/premium-blazers" component={PremiumBlazersPage} />
      <Route path="/luxury-blazers" component={LuxuryBlazersPage} />
      <Route path="/european-blazers" component={EuropeanBlazersPage} />
      <Route path="/casual-blazers" component={CasualBlazersPage} />
      <Route path="/all-blazers" component={AllBlazersPage} />
      <Route path="/mac-coats" component={MacCoatsPage} />
      <Route path="/trench-coats" component={TrenchCoatsPage} />
      <Route path="/overcoats" component={OvercoatsPage} />
      <Route path="/bomber-jackets" component={BomberJacketsPage} />
      <Route path="/all-coats-jackets" component={AllCoatsJacketsPage} />
      <Route path="/suits" component={SuitsPage} />
      <Route path="/shirts" component={ShirtsPage} />
      <Route path="/pants" component={PantsPage} />
      <Route path="/blazers" component={BlazersPage} />
      <Route path="/outerwear" component={OuterwearPage} /> */}
      {/* Add more routes as needed */}
      {/* </Routes>
  </Router> */}
      {/* HOME SECTION */}


      <div className="home-container" style={{
        display: 'flex',
        justifyContent: "space-evenly",

      }}>
        <Row className="home-content"
          style={{ height: "700px" }}
          gutter={200} >

          {/* first card */}

          <Col span={12} xs={24} sm={12} className="text-content">
            <h1 style={
              {
                fontSize: '6rem',
                lineHeight: '1',
                fontWeight: '600',
              }}>STITCH YOUR WAY</h1>
            <p style={
              {
                fontSize: "1.20rem",
                paddingBottom: "15px",
                paddingTop: "10px"
              }}>
              Choose your style, make your own trend. Select the one you want to get your clothes stitched from!
            </p>
            <div className="buttons">
              <Button className='bten1'
                style={{
                  backgroundColor: "snow",
                  fontSize: "1.25rem",
                  lineHeight: "2.25rem",
                  width: "180px",
                  height: "55px",
                  borderRadius: "25px",
                  border: "3px solid white"
                }}>
                Get Started
              </Button>
              <Button className='bten'
                style={{
                  backgroundColor: "#01010c",
                  fontSize: "1.25rem",
                  lineHeight: "2.25rem",
                  color: "white",
                  marginLeft: "20px",
                  width: "180px",
                  height: "55px",
                  borderRadius: "25px",
                  border: "3px solid snow"
                }}>
                Demo
              </Button>
            </div>
          </Col>


          <Col span={12} xs={24} sm={12} className="image-content"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
            <div className='boy'>
              <img src={Boy} /> </div>
            <div className="image-options">
              <div style={{
                backgroundColor: " #030218",
                color: "white",
                fontSize: 'large',
                width: "140px",
                height: '120px',
                border: "2px solid #13274F",
                borderRadius: '30px'
                , boxShadow: '10px 10px 8px 10px  #030218'
              }}>
                <img style={
                  {
                    height: '70px',
                    width: '60px',
                    paddingTop: '4px'
                  }}
                  src='https://stichhub.vercel.app/assets/DemoShirtIcon-9c18aa7e.webp' />
                <p>With Sleeve</p>
              </div>
              <div style={{
                backgroundColor: " #030218",
                color: "white",
                width: "140px",
                fontSize: 'large',
                height: '120px',
                border: "2px solid #13274F",
                borderRadius: '30px'
                , boxShadow: '10px 10px 8px 10px  #030218'
              }}>
                <img style={
                  {
                    height: '70px',
                    width: '60px',
                    paddingTop: '4px'
                  }}
                  src='https://stichhub.vercel.app/assets/SleevlessShirt-d686f5de.webp' />
                <p>Sleeve-Less</p>
              </div>
              <div style={{
                backgroundColor: "#030218",
                fontSize: 'large',
                color: "white",
                width: "140px",
                height: '120px',
                border: "2px solid #13274F",
                borderRadius: '30px'
                , boxShadow: '10px 10px 8px 10px  #030218'
              }}>
                <img style={{
                  height: '70px',
                  width: '60px',
                  paddingTop: '4px'
                }}
                  src={modern} />
                <p>Modern Dress</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* Features */}
      {/* <Feature /> */}

      {/* OUR SERVICES  */}

      <Services />
      {/* How it works */}
      <Work />
      {/* Taylorwork */}
      <Taylorwork />
      {/* brandwork */}
      <Brandwork />
      {/* Testimonials  */}

      <Testimonials />
      {/* Questions */}

      <FAQ />
      {/* About */}
      <AboutUs />

      {/* GetinTouch */}
      <GetInTouch />
      {/* Footer */}
      <FooterComponent />
    </>
  );
};

export default Home;
