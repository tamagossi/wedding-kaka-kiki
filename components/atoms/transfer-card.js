import { Button, Col } from 'antd';
import React from 'react';

const AtomTransferCard = ({ value, onClick, ...buttonProps }) => {
	return (
		<Col span={5}>
			<Button block onClick={onClick} style={{ borderRadius: 5 }} {...buttonProps}>
				{value}
			</Button>
		</Col>
	);
};

export default AtomTransferCard;
