import React, { useState } from 'react';
import { CaseOverView } from './caseOverView';
import { DataFilter } from './dataFilters';
// import { SideNav } from './sideNav';
import TopHeader  from '../layout/TopHeader'; // Ensure this path and casing are correct
import HorizontalScrollGrid from './horizentalScrollGrid';
import { ChartContainer } from '../charts-grid/chartContainer';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

const CustomLayout = ({children}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Layout style={{ backgroundColor: 'white '}}>
      <Layout>

        < TopHeader setToggle={setToggle} />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ALL RIGHTS RESERVED BY EQARCOM ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
