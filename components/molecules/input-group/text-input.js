import React from 'react';
import useMedia from 'use-media-antd-query';
import { Form, Input } from 'antd';

import AtomInputLabel from '../../atoms/input-label';

const MoleculeTextInputGroup = ({ label, name, ...input }) => {
	const size = useMedia();

	return (
		<>
			<AtomInputLabel name={name} label={label} />

			<Form.Item name={name}>
				<Input {...input} />
			</Form.Item>
		</>
	);
};

export default MoleculeTextInputGroup;
