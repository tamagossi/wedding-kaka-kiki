import React from 'react';

const AtomSummaryGroup = ({ title, content }) => {
	return (
		<>
			{title && (
				<h1
					style={{
						fontSize: 16,
						marginBottom: 0,
						fontWeight: 400,
						color: '#8B8B8B',
					}}
				>
					{title}
				</h1>
			)}

			{content && (
				<p style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 0 }}>{content}</p>
			)}
		</>
	);
};

export default AtomSummaryGroup;
