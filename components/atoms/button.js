import React from 'react';

import { Button } from 'antd';

const AtomButton = ({ children, ...props }) => {
	return (
		<Button block size="large" style={{ background: '#e0a99f55', color: 'white' }} {...props}>
			{children}
		</Button>
	);
};

export default AtomButton;
