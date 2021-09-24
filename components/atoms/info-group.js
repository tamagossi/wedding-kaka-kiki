import React from 'react';
import { Row } from 'antd';

import AtomText from './text';

const AtomInfoGroup = ({ className, title, subtitle }) => {
	return (
		<Row style={{ flexDirection: 'column' }}>
			{title && <AtomText text={title} strong />}
			{subtitle && <AtomText text={subtitle} additionalSize={-2} />}
		</Row>
	);
};

export default AtomInfoGroup;
