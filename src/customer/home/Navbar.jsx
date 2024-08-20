import React, { useState } from 'react';
import './Navbar.css';
import { Menu, Button, Drawer, Modal, Form, Input, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
const measurementSteps = [
  { id: 0, title: "Height, weight & age", mainHeading: "Let's gather your basic info", videoUrl: "https://i8.amplience.net/v/indochino/neck3/mp4_720p" },
  { id: 1, title: "Neck", mainHeading: "Now let's measure your neck", videoUrl: "https://i8.amplience.net/v/indochino/neck3/mp4_720p" },
  { id: 2, title: "Shoulders", mainHeading: "Let's measure your shoulders", videoUrl: "https://i8.amplience.net/v/indochino/shoulder3/mp4_720p" },
  { id: 3, title: "Biceps", mainHeading: "Measure your biceps", videoUrl: "https://i8.amplience.net/v/indochino/bicep3/mp4_720p" },
  { id: 4, title: "Arms", mainHeading: "Measure your arms", videoUrl: "https://i8.amplience.net/v/indochino/arms3/mp4_720p" },
  { id: 5, title: "Wrists", mainHeading: "Measure your wrists", videoUrl: "https://i8.amplience.net/v/indochino/wrist3/mp4_720p" },
  { id: 6, title: "Torso length", mainHeading: "Measure your torso length", videoUrl: "https://i8.amplience.net/v/indochino/torso3/mp4_720p" },
  { id: 7, title: "Chest", mainHeading: "Measure your chest", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 8, title: "Stomach", mainHeading: "Measure your stomach", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 9, title: "Waist", mainHeading: "Measure your waist", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 10, title: "Hips", mainHeading: "Measure your hips", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 11, title: "Legs", mainHeading: "Measure your legs", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 12, title: "Crotch", mainHeading: "Measure your crotch", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 13, title: "Thigh", mainHeading: "Measure your thigh", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 14, title: "Knee", mainHeading: "Measure your knee", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 15, title: "Shoulder Slope", mainHeading: "Measure your shoulder slope", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 16, title: "Chest shape", mainHeading: "Measure your chest shape", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 17, title: "Stomach shape", mainHeading: "Measure your stomach shape", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" },
  { id: 18, title: "Stance", mainHeading: "Measure your stance", videoUrl: "https://i8.amplience.net/v/indochino/chest3/mp4_720p" }
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleGetStartedClick = () => {
    navigate('/authentication');
  };

  const handleGetMeasuredClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setCurrentStep(0);
    form.resetFields(); // Reset form fields when closing
  };

  const handleContinue = () => {
    if (currentStep === 0) {
      // Handle "Height, weight & age" special case
      form.validateFields()
        .then(values => {
          console.log('Values for Height, Weight & Age:', values);
          setCurrentStep(currentStep + 1);
        })
        .catch(info => {
          console.log('Validation Failed:', info);
        });
    } else if (currentStep < measurementSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      form.resetFields(); // Reset fields for next step
    } else {
      // Handle form submission here
      console.log('Form Submitted');
      setModalVisible(false);
      setCurrentStep(0);
      form.resetFields();
    }
  };

  const renderFormStep = () => {
    if (measurementSteps[currentStep].title === "Height, weight & age") {
      return (
        <Form form={form} layout="vertical"c lassName='form' >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="height"
                label="Height"
                style={{ color: 'white' }}
                rules={[{ required: true, message: 'Please enter your height' }]}
              >
                <Input placeholder="Enter your height" style={{ color: 'black' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="weight"
                label="Weight"
                style={{ color: 'white' }}
                rules={[{ required: true, message: 'Please enter your weight' }]}
              >
                <Input placeholder="Enter your weight" style={{ color: 'black' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="age"
                label="Age"
                style={{ color: 'white' }}
                rules={[{ required: true, message: 'Please enter your age' }]}
              >
                <Input placeholder="Enter your age" style={{ color: 'black' }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      );
    } else {
      return (
        <Form form={form} layout="vertical" style={{ color: 'white' }}>
          <Form.Item
            name="measurement"
            label={measurementSteps[currentStep].title}
            style={{ color: 'white' }}
            rules={[{ required: true, message: `Please enter your ${measurementSteps[currentStep].title.toLowerCase()}` }]}
          >
            <Input placeholder={`Enter your ${measurementSteps[currentStep].title.toLowerCase()}`} style={{ color: 'black' }} />
          </Form.Item>
        </Form>
      );
    }
  };

  

  return (
    <div className="navbar-container">
      <div className="logo">
        <img
          src="https://stichhub.vercel.app/assets/Long%20-%20Logo%20Transparent%20(White)-0e6226c0.png"
          alt="StichHub Logo"
        />
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['home']} className="menu">
        <Menu.Item key="home" className="submenu">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services">Our Services</Link>
        </Menu.Item>
        <Menu.Item key="how-it-works">
          <Link to="/how-it-works">How it Works?</Link>
        </Menu.Item>
        <Menu.Item key="testimonial">
          <Link to="/testimonial">Testimonial</Link>
        </Menu.Item>
        <Menu.Item key="about-us">
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item key="contact-us">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="designers" >
        <Link to="/designers">Designers</Link>
        </Menu.Item>
      </Menu>
      <div className="navbar-buttons">
        <Button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </Button>
        <Button className="get-measured-button" onClick={handleGetMeasuredClick}>
          Get Measured
        </Button>
      </div>
      {/* <Drawer
        title="Menswear"
        placement="top"
        closable={true}
        onClose={onClose}
        visible={visible}
        height={400}
        width="100%"
      >
        {menswearMenu}
      </Drawer> */}
      <Modal
        title={measurementSteps[currentStep].mainHeading}
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="back" onClick={handleModalClose}>Close</Button>,
          <Button key="continue" type="primary" onClick={handleContinue}>
            {currentStep === measurementSteps.length - 1 ? 'Save' : 'Continue'}
          </Button>,
        ]}
        width={720}
      >
        <div className="video-container">
          <video width="100%" controls>
            <source src={measurementSteps[currentStep].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="form-container">
          {renderFormStep()}
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
