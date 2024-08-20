import React, { useState } from 'react';
import { Button, Layout, Form, Input, Select } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Option } = Select;

const TopHeader = () => {

  const navigate = useNavigate();




  const navigateTo = (routeTo) => {
    navigate(routeTo);
  };
 

  return (
    <Layout>
      <Header
        className="custom-shadow"
        style={{
          padding: 0,
          background: '#184461',
          position: 'sticky',
          top: 0,
          zIndex: 99999,
        }}
      >
        <Button
          type="text"
          icon={<AppstoreOutlined />}
          onClick={() => navigateTo('/admin')}
          style={{
            height: '40px',
            background: '#FFFFFF',
            marginLeft: '40px',
            color: '#21405c',
          }}
        >
          Dashboard
        </Button>
       
        <Button
          type="text"
          icon={<AppstoreOutlined />}
          style={{
            height: '40px',
            background: '#FFFFFF',
            marginLeft: '40px',
            color: '#21405c',
            width: '10rem',
          }}
          onClick={()=>navigateTo('/add-design') }
        >
          Add Design
        </Button>
        <Button
          type="text"
          icon={<AppstoreOutlined />}
          style={{
            height: '40px',
            background: '#FFFFFF',
            marginLeft: '40px',
            color: '#21405c',
            width: '10rem',
          }}
          onClick={()=>navigateTo('/add-category')}
        >
          Add Category
        </Button>
      </Header>
    </Layout>
  );
};

export default TopHeader;
