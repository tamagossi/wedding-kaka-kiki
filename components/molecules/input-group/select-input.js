import React from 'react';
import { Form, Select } from 'antd';

const MoleculeSelectInput = ({ label, name, onChange, options = [], ...input }) => {
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
				<Select onChange={onChange} {...input}>
					{options.map(({ value, label }) => (
						<Select.Option value={value}>{label}</Select.Option>
					))}
				</Select>
			</Form.Item>
		</>
	);
};

export default MoleculeSelectInput;
