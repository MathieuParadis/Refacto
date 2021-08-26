import React from 'react';
import { Button, Col, List, Modal, Row, Tag } from 'antd/es';
import datas from '../Datas/datas'

const ModalPublication = (props) => {

  const updatePic = () => {
    alert("J'update la publication avec l'id : " + datas.profileData.posts[props.item].id);
  }

  const deletePic = () => {
    alert("Je supprime la publication avec l'id : " + datas.profileData.posts[props.item].id);
  }
  
  return (
    <div>
      <Modal width={520} visible={props.preview} onCancel={props.cancel} footer={<Row type="flex">
          <Col span={12} className="text-center">
            <Button type="ghost" icon="edit" onClick={updatePic}>Edit</Button>
          </Col>
          <Col span={12} className="text-center">
            <Button type="danger" icon="delete" onClick={deletePic}>Delete</Button>
          </Col>
        </Row>}
      >
        <Row type="flex" align="middle">
          <Col xs={24} md={12} className="text-center">
            <img src={datas.profileData.posts[props.item].imageUrl} width={200} height={200} alt={datas.profileData.posts[props.item].description} />
          </Col>
          <Col xs={24} md={12}>
            <div>
              <b>Description: </b>
              <p>{datas.profileData.posts[props.item].description}</p>
            </div>
            <div>
              <b>Hashtag:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={datas.profileData.posts[props.item].hashtags}
                renderItem={(tag) => (
                  <List.Item>
                    <Tag>{`${tag}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
            <div>
              <b>Mention:</b>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={datas.profileData.posts[props.item].mentions}
                renderItem={(user) => (
                  <List.Item>
                    <Tag>{`@${user}`}</Tag>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default ModalPublication;