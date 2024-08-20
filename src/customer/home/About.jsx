import React from 'react';
import { Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import './About.css';

const teamMembers = [
  { name: 'SIDDHANT', img: 'https://media.istockphoto.com/id/1958337605/photo/portrait-of-a-woman-using-laptop-while-sitting-on-a-mint-couch-at-home.jpg?s=2048x2048&w=is&k=20&c=_Ha8cv8ZTghmz57nqdMqI9KEaWbb4d_YHBvy5RJKPQw=' },
  { name: 'VISHAL', img: 'https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'NARESH', img: 'https://www.shutterstock.com/shutterstock/photos/2317608051/display_1500/stock-photo-indian-female-fashion-designer-using-laptop-at-her-shop-2317608051.jpg' },
  { name: 'HARSHAL', img: 'https://www.shutterstock.com/shutterstock/photos/579010504/display_1500/stock-photo-handsome-tailor-male-with-beard-and-glasses-in-white-shirt-with-brown-leather-suspenders-working-579010504.jpg' },
  { name: 'SAURABH', img: 'https://www.shutterstock.com/shutterstock/photos/424576819/display_1500/stock-photo-beautiful-designer-is-working-in-dressmaking-studio-looking-at-camera-and-smiling-in-the-424576819.jpg' },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <motion.div
        className="about-us-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>ABOUT US</h1>
      </motion.div>
      <Row gutter={[16, 16]} className="about-us-row">
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={8} lg={4} key={index}>
            <motion.div
              className="about-us-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                cover={<img alt={member.name} src={member.img} />}
                bordered={false}
              >
                <Card.Meta title={member.name} />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <div style={{ display: 'flex' }}>
        <motion.div
          className="about-us-description"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            We're a team of enthusiasts, hoping to bring the tailoring community online and introduce them to the benefits of online business, while also providing customers with a convenient and easy way to find tailors who can meet their needs.
          </p>
        </motion.div>
        <motion.div
          className="about-us-illustration"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="https://stichhub.vercel.app/assets/AboutUsVector-cdb255ef.webp" alt="Illustration" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
