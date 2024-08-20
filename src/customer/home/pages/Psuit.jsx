// src/components/SuitComponent.jsx
import React, { useState, useEffect } from 'react';
import { Card, Input, Row, Col } from 'antd';
import axios from 'axios';
import './Psuit.css'; // Import custom CSS

const { Meta } = Card;
const { Search } = Input;

const SuitComponent = () => {
  const [suits, setSuits] = useState([]);
  const [filteredSuits, setFilteredSuits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    axios.get(' https://api.escuelajs.co/api/v1/categories') // Replace with your API endpoint
      .then(response => {
        setSuits(response.data);
        setFilteredSuits(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching suits:', error);
        setLoading(false);
      });
  }, []);

  // Handle search functionality
  const handleSearch = (value) => {
    const filtered = suits.filter(suit => 
      suit.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuits(filtered);
  };

  return (
    <div className="suit-component">
      <div className="header">
        <h1>Premium Suits</h1>
        <Search
          placeholder="Search for suits..."
          onSearch={handleSearch}
          style={{ width: 500,
         }}
          enterButton
        />
      </div>
      <Row gutter={[16, 16]} justify="center" className="suit-cards">
        {loading ? (
          <p>Loading suits...</p>
        ) : (
          filteredSuits.map((suit) => (
            <Col xs={24} sm={12} md={8} lg={6} key={suit.id}>
              <Card
                hoverable
                className="suit-card"
                cover={<img alt={suit.name} src={suit.image} />}
              >
                <Meta title={suit.name} description={`$${suit.price}`} />
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default SuitComponent;
