import React from 'react';
import { Form, Input } from 'antd';

const MoleculeTextInputGroup = ({ label, name, ...input }) => {
	return (
		<>
			<label className="julius" htmlFor={name} style={{ fontSize: 18 }}>
				{label}:
			</label>

			<Form.Item name={name}>
				<Input {...input} />
			</Form.Item>
		</>
	);
};

export default MoleculeTextInputGroup;
