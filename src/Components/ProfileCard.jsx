import React, { useState } from 'react';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';
import datas from '../Datas/datas';
import formatDate from '../Tools/formatDate';
import ModalEditProfile from './ModalEditProfile';
import ModalUploadPic from './ModalUploadPic';

const donnees = datas; 

const ProfileCard = () => {
  const [data, setData] = useState(donnees);
  const [editProfilModal, setEditProfilModal] = useState(false); 
  const [uploadModal, setUploadModal] = useState(false);

  // const uploadPicture = () => {
  //   alert("J'upload une image avec la description : " + props.description + " et les hashtags " + props.hashtags + " et les mentions " + props.mentions);
  // }

  const cancelModalEdit = () => {
    setEditProfilModal(false);
  }

  const cancelModalUpload = () => {
    setUploadModal(false);
  }

  const fUpdateDescription = (value) => {
    setData({description: value})
  }



  return (
    <div>
      <ModalUploadPic upload={uploadModal} cancelUploading={cancelModalUpload} description={data.description} updateDescription={fUpdateDescription} mentions={data.mentions} />
      
      
      {/* <ModalUploadPic description={datas.description} hashtags={datas.hashtags} mentions={datas.mentions} upload={uploadModal} cancelUploading={cancelModalUpload} updateM={() => updateMentions()}/> */}

      <ModalEditProfile edit={editProfilModal} cancelEditting={cancelModalEdit}/>


      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={datas.profileData.profilePicture} />
                    <h3>{`${datas.profileData.firstname} ${datas.profileData.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {datas.profileData.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {datas.profileData.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {datas.profileData.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(datas.profileData.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={() => setEditProfilModal(true)}>Edit account</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={() => setUploadModal(true)}>Upload a picture</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileCard;