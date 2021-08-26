import React, { useState } from 'react';
import { Col, Input, Modal, message, Row } from 'antd/es';
import datas from '../Datas/datas';

const donnees = datas;

const ModalEditProfile = (props) => {
  const [email, setEmail] = useState(donnees.email);
  const [fname, setFname] = useState(donnees.firstname);
  const [lname, setLname] = useState(donnees.lastname);
  const [phoneNumber, setPhoneNumber] = useState(donnees.phoneNumber)

  const updateProfile = () => {
    // let tmp = profileData;
    // tmp.email = email;
    // tmp.firstname = fname;
    // tmp.lastname = lname;
    // tmp.phoneNumber = phoneNumber;
    // setData({ profileData: tmp});
    props.cancelEditting();
    message.success('Profile well updated', 3);
  }

  return (
    <div>
      <Modal title="Edit your account" okText="Update" visible={props.edit} onOk={updateProfile} onCancel={props.cancelEditting}>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Email</b>
            <Input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Firstname</b>
            <Input id="firstname" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Lastname</b>
            <Input id="lastname" type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
          </Col>
        </Row>
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>Phone number</b>
            <Input id="email" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default ModalEditProfile;