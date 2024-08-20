import React,{useState} from 'react';
import { Table ,Button} from 'antd';
import CustomModal from './CustomModal';








const MyTable = ({products}) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [designImages, setDesignImages] = useState([]);
  const data = products?.map((product)=>{

    return{
      id:product?._id,
      title:product?.title,
      price:product?.price,
      category:product?.category,
      images:'view Images',
      imagesUrl : product?.images
    }
  })
  
  const showModal = (imagesData) => {
    setDesignImages(imagesData)
    setIsModalVisible(true);
  };

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Images',
    key: 'images',
    render: (_, record) => (
     
      // <span>
      //   <a href={`/edit/${record.key}`} style={{ marginRight: 8 }}>
          
      //     <img src={record?.imagesUrl[0]?.url}></img>
      //     </a>
      //   <a href={`/delete/${record.key}`}>Delete</a>
      // </span>
      <Button type="primary" onClick={()=>showModal(record)}>View Images</Button>
    ),
  }, 
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <span>
        <a href={`/edit/${record.key}`} style={{ marginRight: 8 }}>Edit</a>
        <a href={`/delete/${record.key}`}>Delete</a>
      </span>
    ),
  },
];
  return (
   <>
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 5 }}
      rowKey={'id'}
      // rowSelection={{ type: 'checkbox' }}
    />

    <CustomModal designImages={designImages} type={'view_images'} visible={isModalVisible} setIsModalVisible={setIsModalVisible} />
   </>
  );
};

export default MyTable;
