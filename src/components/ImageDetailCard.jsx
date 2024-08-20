import React from 'react'
import {Row,Col,Card} from 'antd'
const ImageDetailCard = ({data}) => {
  return (
    <div>
    {
        data?.length > 0 ?
           
                 

           <Card style={{ width: '100%' }}>
                        <Row gutter={8}>
                            
                           {
                            data?.map((image) => {
                            return <Col key={Math.random()} span={12}>
                                <img
                                    src={image.url}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Col>
                              })
                            }
                        </Row>
                    </Card>
                
           :
            'Images not found'
    }

</div>
  )
}

export default ImageDetailCard