import React from 'react'
import { Card, Button, Row, Col, Modal } from 'antd';
import GetDesignForm from '../dashboard/design/GetDesignForm';
import ImageDetailCard from './ImageDetailCard';
export default function CustomModal({ visible, setIsModalVisible, type, designImages,modalTitle }) {
    const { Meta } = Card;
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal
            footer={null}
            title={modalTitle ? modalTitle : designImages?.title }
            visible={visible}
            // onOk={handleOk}
            onCancel={handleCancel}
            okText="Save"
            cancelText="Cancel"

        >

            {type === 'add_design' && <GetDesignForm></GetDesignForm>}
            {type === 'view_images' && <ImageDetailCard data={designImages?.imagesUrl}/>}
        </Modal>
    )
}
