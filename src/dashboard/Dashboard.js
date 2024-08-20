import React, { useState } from 'react';
import { CaseOverView } from './caseOverView';
import { DataFilter } from './dataFilters';
// import { SideNav } from './sideNav';
import TopHeader  from '../layout/TopHeader'; // Ensure this path and casing are correct
import HorizontalScrollGrid from './horizentalScrollGrid';
import { ChartContainer } from '../charts-grid/chartContainer';
import { Layout, Col, Row, Card } from 'antd';
import CustomLayout from './customeLayout';
const { Content, Footer } = Layout;

const Dashboard = () => {
  

  return (
        <CustomLayout>
          <div>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h2 className='headeingTextStyle'>Cases Overview</h2>
                <CaseOverView />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h2 className='headeingTextStyle'>Data Filters</h2>
                <DataFilter />
              </Col>
            </Row>

            <Card className='custom-shadow' style={{ marginTop: '20px', borderRadius: '15px' }}>
              <HorizontalScrollGrid />
            </Card>

            {/* Charts start from here */}
            <ChartContainer />
          </div>
        </CustomLayout>
          
       
  );
};

export default Dashboard;
