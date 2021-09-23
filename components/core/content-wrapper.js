import React from 'react';
import useMedia from 'use-media-antd-query';
import { Col, Row } from 'antd';

import { PADDING_SIZE } from '../../contstant/mediaQuery';

const ContentWrapper = ({ children, style }) => {
	const size = useMedia();

	return (
		<Row justify="center" align="middle" style={{ minHeight: '100vh', ...style }}>
			<Col style={{ padding: PADDING_SIZE[size], color: '#f2f3ef' }}>{children}</Col>
		</Row>
	);
};

export default ContentWrapper;
