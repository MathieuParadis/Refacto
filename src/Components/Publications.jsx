import React, { useState } from 'react';
import { Col, Icon, Row } from 'antd/es';
import datas from '../Datas/datas'
import ModalPublication from './ModalPublication';
import Publication from './Publication';

const Publications = () => {
  const publications = datas.profileData.posts;
  const [previewItem, setPreviewItem] = useState(0);
  const [previewPublicationModal, setPreviewPublicationModal] = useState(false);
 
  const openPreview = (postNumber) => {
    setPreviewItem(postNumber)
    setPreviewPublicationModal(true)
  }

  const cancelModal = () => {
    setPreviewPublicationModal(false)
  }

  return (
    <div>
      <ModalPublication item={previewItem} preview={previewPublicationModal} cancel={cancelModal}/>
      
      <Row type="flex" justify="center">
        <Col sm={18} xs={24}>
          <Col span={24} className="container text-center">
            <h2>
              <Icon type="save" />
              <span className="span-icon">Publications</span>
            </h2>
            { publications &&
              publications.map((publication, index) => {
                return (
                  <Publication key={index} openPreview={() => openPreview(index)} srcImg={publication.imageUrl} />
                )})
            }
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Publications;