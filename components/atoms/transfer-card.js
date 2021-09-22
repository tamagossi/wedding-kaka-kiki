import { Col } from 'antd';
import React from 'react';

const AtomTransferCard = ({ value, onClick }) => {
	return (
		<Col
			onClick={onClick}
			span={5}
			style={{
				textAlign: 'center',
				background: 'white',
				padding: 4,
				color: 'black',
				borderRadius: 5,
				cursor: 'pointer',
			}}
		>
			{value}
		</Col>
	);
};

export default AtomTransferCard;
