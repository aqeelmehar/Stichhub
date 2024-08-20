import React from 'react';
import { Carousel, Card, Row, Col } from 'antd';
import Test1 from '../../img/test1.avif';
import Test2 from '../../img/test2.avif';
import Test3 from '../../img/test3.avif';
import Test4 from '../../img/test4.avif';
import Test5 from '../../img/test5.avif';
import Test6 from '../../img/test6.avif';
import './Testimonial.css';

const testimonials = [
  { name: 'Yadav', role: 'Customer', text: 'I stumbled upon this stitching websiteresult.', avatar: Test2 },
  { name: 'Rishi', role: 'Tailor', text: 'As a professional tailor collaborate with many stitching websites ', avatar: Test4 },
  { name: 'Aditya', role: 'Customer', text: 'I have been using this stitching website.', avatar: Test1 },
  { name: 'Neha', role: 'Customer', text: 'The platform is user-friendly for each garment stitching websites.', avatar: Test2 },
  { name: 'Rahul', role: 'Tailor', text: 'This website has streamlined my workflow and brought more business.', avatar: Test3 },
  { name: 'Priya', role: 'Customer', text: 'Amazing service and attention to detail! stitching websites', avatar: Test1 },
  { name: 'Amit', role: 'Customer', text: 'Highly recommended for custom tailoring needs stitching websites .', avatar: Test4 },
  { name: 'Sneha', role: 'Customer', text: 'Fantastic platform with great support. stitching websites', avatar: Test2 },
  { name: 'Vijay', role: 'Tailor', text: 'Best platform for professional tailors stitching websites.', avatar: Test5 },
  // { name: 'Anjali', role: 'Customer', text: 'Loved the quick and efficient service stitching websites.', avatar: Test6 }
];



const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="title">TESTIMONIALS</h2>
      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Row >
              <Col xs={24} sm={24} md={24} style={{display:'flex',justifyContent:'center'}}>
                <Card className="testimonial-card" hoverable> 
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                 <div style={{flex:'1'}}> <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-text">{testimonial.text}</p></div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
