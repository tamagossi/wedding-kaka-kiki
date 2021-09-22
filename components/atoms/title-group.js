import React from 'react';

const AtomTitleGroup = ({ title, subtitle }) => {
	return (
		<>
			{title && (
				<h1
					className="julius"
					style={{
						color: '#f2f3ef',
						fontSize: 40,
						fontWeight: 'bold',
						marginBottom: 0,
						textAlign: 'center',
					}}
				>
					{title}
				</h1>
			)}

			{subtitle && (
				<p className="julius" style={{ fontSize: 18, textAlign: 'center' }}>
					{subtitle}
				</p>
			)}
		</>
	);
};

export default AtomTitleGroup;
