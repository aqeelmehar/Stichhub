// src/components/Footer.jsx

import React from 'react';
import { Layout } from 'antd';
import { motion } from 'framer-motion';
import footer from '../../img/footer.jpg'
import {
  MailOutlined,
  GithubOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import './Footer.css';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="footer-logo">
          <img src={footer} alt="StichHub Logo" />
        </div>
        <p>Choose your style, make your own trend. Select the one you want to get your clothes stitched from!</p>
        <div className="footer-icons">
          <motion.a
            href="mailto:info@example.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MailOutlined />
          </motion.a>
          <motion.a
            href="https://github.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubOutlined />
          </motion.a>
          <motion.a
            href="https://youtube.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <YoutubeOutlined />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterOutlined />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramOutlined />
          </motion.a>
        </div>
        <p>© StichHub 2024</p>
      </motion.div>
    </Footer>
  );
};

export default FooterComponent;
