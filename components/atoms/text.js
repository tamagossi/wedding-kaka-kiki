import React from 'react';
import useMedia from 'use-media-antd-query';
import { Typography } from 'antd';

import { FONT_SIZE } from '../../contstant/mediaQuery';

const AtomText = ({ additionalSize = 0, text, style, ...props }) => {
	const size = useMedia();

	return (
		<Typography.Text
			className="raleway honey-white"
			style={{ marginBottom: 0, fontWeight: 200, ...style }}
			{...props}>
			<span
				className="raleway honey-white"
				style={{ color: '#f2f3ef', fontSize: FONT_SIZE[size] + additionalSize, ...style }}>
				{text}
			</span>
		</Typography.Text>
	);
};

export default AtomText;
