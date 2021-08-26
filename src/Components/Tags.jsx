import React from 'react';
import { Col, Mentions, Row } from 'antd/es';
import hashtagsExample from '../Datas/hashtags'

const Tags = ({title, value, setValue}) => {
	const onSelect = (val) => {
		const res = val.substring(0, val.length - 1);
		setValue(res);
	}

	return (
		<div>
			<Row type="flex" justify="center" className="input-container">
				<Col span={20}>
					<b>{title}</b>
					<Mentions placeholder="input # to write hashtags" prefix="#" defaultValue={value || '#'} onChange={(value) => onSelect(value)}>
						{hashtagsExample.map((hashtag, key) => (
							<Mentions.Option key={key} value={hashtag}>{`#${hashtag}`}</Mentions.Option>
						))}
					</Mentions>
				</Col>
			</Row>
		</div>
	);
};

export default Tags;
