import React from 'react';
import useMedia from 'use-media-antd-query';
import { Space } from 'antd';

import AtomText from './text';
import AtomCinzelDecorativeText from './cinzel-text';
import { FONT_SIZE } from '../../contstant/mediaQuery';

const AtomTitleGroup = ({ title, subtitle }) => {
	const size = useMedia();

	return (
		<Space direction="vertical" size={0}>
			{title && (
				<AtomCinzelDecorativeText
					text={title}
					strong
					additionalSize={FONT_SIZE[size] - 8}
				/>
			)}
			{subtitle && <AtomText text={subtitle} />}
		</Space>
	);
};

export default AtomTitleGroup;
