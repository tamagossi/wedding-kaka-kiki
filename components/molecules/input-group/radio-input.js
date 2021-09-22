import React from 'react';
import { Form, Radio } from 'antd';

const MoleculeRadioInput = ({ label, name, onChange, options = [], ...input }) => {
	return (
		<>
			<label
				className="julius"
				htmlFor={name}
				style={{ fontSize: 18, marginBottom: 5, display: 'block' }}
			>
				{label}:
			</label>

			<Form.Item name={name}>
				<Radio.Group onChange={onChange} {...input}>
					{options.map(({ value, label }) => (
						<Radio value={value} style={{ color: '#FDFDFD' }}>
							{label}
						</Radio>
					))}
				</Radio.Group>
			</Form.Item>
		</>
	);
};

export default MoleculeRadioInput;
