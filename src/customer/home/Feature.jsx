import React from 'react';
import { Card, Row, Col } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// import animator from '../../img/cross.webp'
// import take from '../../img/take.avif';
// import make from '../../img/design.avif';
// import deliver from '../../img/dellllll.avif';
// import measure from '../../img/mer.avif';
// import stich from '../../img/start2.avif';

import './Feature.css';

const Feature = () => {
  // Animation control to trigger animations on scroll
  const controls = useAnimation();

  useEffect(() => {
    // Start animation when component mounts
    controls.start({
      rotate: [0, 360],
      transition: {
        loop: Infinity,
        ease: "linear",
        duration: 10,
      },
    });
  }, [controls]);

  const cards = [
    { title: '3D Animator', img: animator },
    { title: 'Start Work', img: stich },
    { title: 'Measure Size', img: measure },
    { title: 'Delivery', img: deliver },
    { title: 'Make Design', img: make },
    { title: 'Take Order', img: take }
  ];

  return (
    <div className="circular-cards-container">
      <motion.div
        className="circular-cards-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Major Features</h1>
      </motion.div>
      <Row gutter={[16, 16]} justify="center">
        {cards.map((card, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <motion.div
              className="circular-card"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                animate={controls} // Apply scroll animation
                className="card-inner"
              >
                <Card
                  cover={
                    <div className="image-container">
                      <img alt={card.title} src={card.img} className="circular-card-img" />
                      <div className="image-overlay">
                        <div className="image-title">{card.title}</div>
                      </div>
                    </div>
                  }
                  bordered={false}
                >
                  {/* Add the title and description here */}
                  <Card.Meta title={card.title} description={card.content} />
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Feature;
