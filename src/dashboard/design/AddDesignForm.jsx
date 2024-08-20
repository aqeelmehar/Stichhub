import React, { useState, useEffect } from 'react';
import { axioInstance } from '../../utilities/axiosService';
import DevExtremeDataGrid from '../../components/datagrid';
import { Card, Button, Modal} from 'antd';
import GetDesignForm from './GetDesignForm';
import CustomLayout from '../customeLayout';
import CustomModal from '../../components/CustomModal';
const AddDesignForm = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const getProducts = async () => {
    try {
      const getData = await axioInstance.get('product/designs');
      setProducts(getData?.data?.designs);
    } catch (error) {
      console.log('Error:', error.response);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   form.validateFields()
  //     .then((values) => {
  //       console.log('Form Values:', values);
  //       setIsModalVisible(false);
  //       form.resetFields();
  //       // You can handle form submission here, such as sending the data to the server.
  //     })
  //     .catch((info) => {
  //       console.log('Validate Failed:', info);
  //     });
  // };



  return (
    <CustomLayout>
      <Card
        title="View Designs"
        extra={<Button type="primary" onClick={showModal}>Add Design</Button>}
        style={{ width: '100%', margin: 'auto' }}
      >
        <DevExtremeDataGrid products={products} />
      </Card>

  
      <CustomModal modalTitle={"Add New Design"} type={'add_design'} visible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      
    
    </CustomLayout>
  );
};

export default AddDesignForm;
