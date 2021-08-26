import React, { useState } from 'react';
import { Col, Input, Modal, Row } from 'antd/es';
import datas from '../Datas/datas';
import Mention from './Mention';
import Tags from './Tags';

const donnees = datas;

const ModalUploadPic = (props) => {
  const [data, setData] = useState(donnees);

  const uploadPicture = () => {
    alert("J'upload une image avec la description : " + data.description + " et les hashtags " + data.hashtags + " et les mentions " + data.mentions);
  }

  // const updateMentions = (value) => {
  //   setData({ mentions: value });
  // }
  
  // const updateHashtags = (value) => {
  //   setData({ hashtags: value })
  // }
  
  return (
    <div>
      <Modal title="Upload a picture" okText="Upload" visible={props.upload} onOk={uploadPicture} onCancel={props.cancelUploading}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Description:</b>
            <Input id="description" title="Description" type="text" value={data.description} onChange={(e) => setData({description: e.target.value})} />
          </Col>
        </Row>
        <Mention value={data.mentions} title="Mention a user" onChange={(e) => setData({mentions: e.target.value})} />
        <Tags value={data.hashtags} title="Hashtags" onChange={(e) => setData({tags: e.target.value})} />
      </Modal>
    </div>
  );
};

export default ModalUploadPic;