import React from 'react';
import { Form, Input } from 'antd';

const MoleculeTextAreaInputGroup = ({ label, name, ...input }) => {
	return (
		<>
			<label className="julius" htmlFor={name} style={{ fontSize: 18 }}>
				{label}:
			</label>

			<Form.Item name={name}>
				<Input.TextArea {...input} rows={5} />
			</Form.Item>
		</>
	);
};

export default MoleculeTextAreaInputGroup;
