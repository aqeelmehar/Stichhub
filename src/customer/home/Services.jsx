import React from 'react'
import './Services.css'
import { motion } from 'framer-motion';
import { Button, Card } from 'antd';
const Services = () => {
  return (
   <>
   
   <div className="services-container">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-cards">
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="service-card"
        >
          <Card  style={{backgroundColor:" #0006",border:"2px solid  #0006"}}
            hoverable
            cover={<img  style={{width:"150px",display:'inline-block'}} alt="Customers" src="https://stichhub.vercel.app/assets/forcustomers-b036645a.webp" />}
          >
          
            <p>You can choose your own style, see how it looks as well as choose from a choice of tailor whom you want to get your clothes stitched from.</p>
            <Button style={{border:'3px solid white',height:'50px',borderRadius:'25px',backgroundColor: "#030218",color:'white'}}>Explore Now</Button>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="service-card"
        >
          <Card  style={{backgroundColor:" #0006",border:"2px solid  #0006"}}
            hoverable
            cover={<img  style={{width:"150px",display:'inline-block'}}alt="Tailors" src="https://stichhub.vercel.app/assets/forcustomers-b036645a.webp" />}
          >
           
            <p>You can keep track of your orders, showcase your previous work as well as add your specialities to your profile to increase customer-base.</p>
            <Button style={{border:'3px solid white',height:'50px',borderRadius:'25px',backgroundColor: "#030218",color:'white'}} >Get Started</Button>
          </Card>
        </motion.div>
      </div>
    </div>

   
   
   </>
  )
}

export default Services