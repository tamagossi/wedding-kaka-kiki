import { Card, Typography } from 'antd';
import React from 'react';

const AtomSummaryGroup = ({ title, content }) => {
	return (
		<Card style={{ borderRadius: 10, boxShadow: '0px 1px 9px 4px rgba(0,0,0,0.1)' }}>
			{title && (
				<Typography.Text style={{ marginBottom: 0 }} type="secondary">
					{title}
				</Typography.Text>
			)}

			<Typography.Title style={{ marginTop: 10 }} level={2}>
				{typeof content !== 'undefined' ? content : '-'}
			</Typography.Title>
		</Card>
	);
};

export default AtomSummaryGroup;
