import React from 'react';
import { Card } from 'antd/es';

const Publication = (props) => {
  return (
    <div>
      <Card bordered className="card-pubs" onClick={props.openPreview}>
        <img src={props.srcImg} width={200} height={200} alt={props.srcImg} />
      </Card>     
    </div>
  );
};

export default Publication;