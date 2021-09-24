import React from 'react';
import { Form, Select } from 'antd';

import AtomInputLabel from '../../atoms/input-label';

const MoleculeSelectInput = ({ label, name, onChange, options = [], rules, ...input }) => {
	return (
		<>
			<AtomInputLabel name={name} label={label} />

			<Form.Item name={name} rules={rules}>
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
