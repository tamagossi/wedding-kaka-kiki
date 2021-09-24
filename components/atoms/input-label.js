import React from 'react';
import useMedia from 'use-media-antd-query';

import AtomText from './text';
import { FONT_SIZE } from '../../contstant/mediaQuery';

const AtomInputLabel = ({ name, label }) => {
	const size = useMedia();

	return (
		<label className="tl" htmlFor={name}>
			<AtomText text={`${label}:`} additionalSize={FONT_SIZE[size] / -20} />
		</label>
	);
};

export default AtomInputLabel;
