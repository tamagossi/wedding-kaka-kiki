import React from 'react';
import { Form, Input } from 'antd';

import AtomInputLabel from '../../atoms/input-label';

const MoleculeTextAreaInputGroup = ({ label, name, rules, ...input }) => {
	return (
		<>
			<AtomInputLabel name={name} label={label} rules={rules} />

			<Form.Item name={name}>
				<Input.TextArea {...input} rows={4} maxLength={250} />
			</Form.Item>
		</>
	);
};

export default MoleculeTextAreaInputGroup;
