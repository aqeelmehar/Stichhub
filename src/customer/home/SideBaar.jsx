// Sidebar.js

import React from 'react';
import { Steps } from 'antd';
import './Measurement.css'
const { Step } = Steps;

const Sidebar = ({ currentStep, completedSteps }) => {
  return (
    <div className="sidebar">
      <Steps
        direction="vertical"
        current={currentStep}
        size="small"
      >
        {completedSteps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            status={currentStep === step.id ? 'process' : 'finish'}
            icon={
              currentStep === step.id ? (
                <i className="anticon anticon-loading" />
              ) : (
                <i className="anticon anticon-check-circle" />
              )
            }
          />
        ))}
      </Steps>
    </div>
  );
};

export default Sidebar;
