import React from 'react';

const AtomInfoGroup = ({ title, subtitle }) => {
	return (
		<>
			{title && (
				<p
					className="julius"
					style={{
						fontSize: 22,
						fontWeight: 'bold',
						marginBottom: 0,
						textAlign: 'center',
					}}
				>
					{title}
				</p>
			)}

			{subtitle && (
				<p className="julius" style={{ fontSize: 18, textAlign: 'center' }}>
					{subtitle}
				</p>
			)}
		</>
	);
};

export default AtomInfoGroup;
