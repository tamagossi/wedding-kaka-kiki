import React from 'react';
import { Form, Input } from 'antd';

import AtomInputLabel from '../../atoms/input-label';

const MoleculeNumberInputGroup = ({ name, type, label, formRef, ...input }) => {
	const formatValue = (event) => {
		let value = event.target.value;
		if (typeof value === 'number') value = value?.toString();

		switch (type) {
			case 'currency':
				value = value.replace(/\./g, '_');
				break;
			case 'number':
				value = value.replace(/\D/g, '');
				break;
			case 'phone':
				value = value.replace(/\D/g, '');
				break;
			default:
				value = value.replace(/\D/g, '');
				break;
		}

		let data = {};
		data[name] = value;
		formRef.setFieldsValue(data);
	};

	return (
		<>
			<AtomInputLabel name={name} label={label} />

			<Form.Item name={name}>
				<Input
					onChange={formatValue}
					type="number"
					{...input}
					style={{ background: input.disabled && '#D4D4D4' }}
				/>
			</Form.Item>
		</>
	);
};

export default MoleculeNumberInputGroup;
