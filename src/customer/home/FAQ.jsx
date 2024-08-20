import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Girl from '../../img/girl.webp'
// import 'antd/dist/antd.css';
import './FAQ.css';

const { Panel } = Collapse;

const FAQ = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="faq-container" ref={ref}>
      <motion.div
        className="faq-image"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
      >
        <img src={Girl} alt="FAQ Illustration" />
      </motion.div>
      <motion.div
        className="faq-content"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
      >
        <h2>Frequently Asked Questions</h2>
        <Collapse accordion>
          <Panel header="How does StitchHub benefit tailors?" key="1">
            <p>StitchHub provides tailors with access to a broader customer base, advanced tools for customization, and efficient order management, enhancing their business reach and productivity.</p>
          </Panel>
          <Panel header="What problem does StitchHub solve for customers?" key="2">
            <p>StitchHub solves the problem of finding quality custom tailoring services by connecting customers with skilled tailors, offering a variety of options for customization, and ensuring a seamless ordering process.</p>
          </Panel>
          <Panel header="How does the 3D Configurator feature work?" key="3">
            <p>The 3D Configurator allows customers to visualize and customize their clothing items in a three-dimensional space, offering a real-time preview of fabric, style, and fit options before making a purchase.</p>
          </Panel>
          <Panel header="What is the role of AR Tech in StitchHub?" key="4">
            <p>AR Tech in StitchHub enhances the shopping experience by allowing customers to virtually try on clothes, ensuring the perfect fit and style before placing an order, thereby reducing returns and increasing satisfaction.</p>
          </Panel>
        </Collapse>
      </motion.div>
    </div>
  );
};

export default FAQ;
