import { Col, Row } from 'antd';
import React from 'react';
import useMediaQuery from 'use-media-antd-query';

const ContentWrapper = ({ children, style }) => {
	const colSize = useMediaQuery();
	const isSmall = ['xs', 'sm', 'md'].includes(colSize);

	return (
		<Row justify="center" align="middle" style={{ minHeight: '100vh', ...style }}>
			<Col style={{ padding: isSmall ? '120px 40px' : 120, color: '#f2f3ef' }}>
				{children}
			</Col>
		</Row>
	);
};

export default ContentWrapper;
