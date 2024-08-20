import React from 'react';
import {axioInstance} from '../../utilities/axiosService';
import { Form, Input, InputNumber, Row, Col, Button, Upload ,Card} from 'antd';
import { UploadOutlined } from '@ant-design/icons';




const GetDesignForm = () => {
  const [form] = Form.useForm();
  
  const createProductDesign = async (payload)=>{
            
   try{
    const response = await axioInstance.post('product/create',payload)
   }catch(error){
console.log(error)
   }
  }

  const onFinish = (values) => {
    

   const imagesToupload = values.images.map((item)=>{
      return {url:item?.thumbUrl,altText:values.title}
    })
  
    values.images = imagesToupload;
    values['review'] = [];
    createProductDesign(values);
    console.log(values,'imagesToupload')
  };
  


  const uploadProps = {
    beforeUpload: async (file) => {
      
    //  let imageBase64 = await getBase64(file)
     
      return false; // Prevent automatic upload
    },
  };

  return (
  
     

      <Card  style={{ width: '100%',
          // maxWidth: '1200px',
          margin:'auto'}}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: '',
          subCategory: '',
          stock: {
            quantity: '',
            status: '',
          },
          images: [],
          
        }}
        style={{
          marginTop: '2rem',
          padding: '2rem',
          border: 'none',
          // borderRadius: '8px',
          // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          width: '100%',
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        <Row gutter={16} style={{ fontSize: '1.2rem', padding: '0.5rem' }}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="title"
              label={<span style={{ fontSize: '1.2rem' }}>Title</span>}
              rules={[{ required: true, message: 'Please input the title' }]}
            >
              <Input placeholder="Gaming Laptop X" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="price"
              label={<span style={{ fontSize: '1.2rem' }}>Price</span>}
              rules={[{ required: true, message: 'Please input the price' }]}
            >
              <InputNumber
                min={0}
                formatter={(value) => `$ ${value}`}
                style={{ width: '100%' }}
                placeholder="1499.99"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16} style={{ padding: '0.5rem' }}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="category"
              label={<span style={{ fontSize: '1.2rem' }}>Category</span>}
              rules={[{ required: true, message: 'Please input the category' }]}
            >
              <Input placeholder="Add Category" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="subCategory"
              label={<span style={{ fontSize: '1.2rem' }}>SubCategory</span>}
              rules={[{ required: true, message: 'Please input the subcategory' }]}
            >
              <Input placeholder="Add Sub-Category" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16} style={{ padding: '0.5rem' }}>
          <Col xs={24} sm={12}>
            <Form.Item
              name={['stock', 'quantity']}
              label={<span style={{ fontSize: '1.2rem' }}>Quantity</span>}
              rules={[{ required: true, message: 'Please input the quantity' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} placeholder="Add Quantity" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name={['stock', 'status']}
              label={<span style={{ fontSize: '1.2rem' }}>Status</span>}
              rules={[{ required: true, message: 'Please input the status' }]}
            >
              <InputNumber min={0} max={1} style={{ width: '100%' }} placeholder="Status" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16} style={{ padding: '0.5rem' }}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="images"
              label={<span style={{ fontSize: '1.2rem' }}>Image</span>}
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[{ required: true, message: 'Please upload an image' }]}
            >
              <Upload accept={'images/*'} {...uploadProps} listType="picture" showUploadList={true}>
                <Button style={{ width: 'fit-content' }} icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Form.Item>
           {/* {imagesBase64 && <img src={imagesBase64}></img>} */}
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="description"
              label={<span style={{ fontSize: '1.2rem' }}>Description</span>}
              rules={[{ required: true, message: 'Please input the description' }]}
            >
              <Input.TextArea rows={1} placeholder="Product description" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{
          textAlign: 'center',
          padding: '1rem',
          
        }}>
          <Button  htmlType="submit"
          style={{
            height: '60px',
            background: '#21405c',
            color: 'white',
            width: '15rem',
          }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
     
      </Card>

      
  
  );
};

export default GetDesignForm;
