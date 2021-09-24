import React from 'react';
import useMedia from 'use-media-antd-query';
import { Typography } from 'antd';

import { FONT_SIZE } from '../../contstant/mediaQuery';

const AtomCinzelDecorativeText = ({ additionalSize = 0, text, style, ...props }) => {
	const size = useMedia();

	return (
		<Typography.Text className="honey-white" style={{ marginBottom: 0 }} {...props}>
			<span
				className="cinzel-decorative honey-white"
				style={{ color: '#f2f3ef', fontSize: FONT_SIZE[size] + additionalSize, ...style }}
			>
				{text}
			</span>
		</Typography.Text>
	);
};

export default AtomCinzelDecorativeText;
