import React from 'react'
import { Row, Col} from 'antd';
import sewingMachine from '../../img/machine.webp'
import baskit from '../../img/baskit.webp';
import apointment from '../../img/apoint.webp';
import designer from '../../img/cross.webp';
import sketch from '../../img/pensil.webp';
import './Work.css'

const Work = () => {


  return (
    <>
    
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">HOW IT WORKS FOR CUSTOMERS?</h2>
      <Row className="steps-row" justify="center" align="middle">
        <Col className="step-col" xs={24} sm={12} md={6}>
          <div className="step">
            <div className="step-circle">1</div>
            <img className="step-icon" src={sketch} alt="Design" />
            <p className="step-text">DESIGN YOUR CLOTH</p>
          </div>
        </Col>
        <Col className="step-col" xs={24} sm={12} md={6}>
          <div className="step">
            <div className="step-circle">2</div>
            <img className="step-icon" src={designer} alt="Measurement" />
            <p className="step-text">TAKE ONLINE MEASUREMENTS</p>
          </div>
        </Col>
        <Col className="step-col" xs={24} sm={12} md={6}>
          <div className="step">
            <div className="step-circle">3</div>
            <img className="step-icon" src={sewingMachine} alt="Tailor" />
            <p className="step-text">SELECT YOUR FAVOURITE TAILOR</p>
          </div>
        </Col>
        <Col className="step-col" xs={24} sm={12} md={6}>
          <div className="step">
            <div className="step-circle">4</div>
            <img className="step-icon" src={baskit} alt="Order" />
            <p className="step-text">PLACE YOUR ORDER</p>
          </div>
        </Col>
      </Row>
      <div className="or-text">or</div>
      <div className="appointment-text">
        directly Book an appointment with your favourite tailor. <img className="calendar-icon" src={apointment} alt="Calendar" />
      </div>
    </div>
   
   
{/* Brand work */}



    </>
  )
}

export default Work