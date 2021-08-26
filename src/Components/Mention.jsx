import React from 'react';
import { Col, Mentions, Row } from 'antd/es';

const Mention = ({title, value, setValue}) => {
	const onSelect = (val) => {
		const res = val.substring(0, val.length - 1);
		setValue(res);
	}

	return (
		<div>
			<Row type="flex" justify="center" className="input-container">
				<Col span={20}>
					<b>{title}</b>
					<Mentions placeholder="Add space between users" onChange={(value) => onSelect(value)}></Mentions>
				</Col>
			</Row>
		</div>
	);
};

export default Mention;
