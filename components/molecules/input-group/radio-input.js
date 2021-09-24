import React from 'react';
import { Form, Radio } from 'antd';
import AtomText from '../../atoms/text';
import AtomInputLabel from '../../atoms/input-label';

const MoleculeRadioInput = ({ label, name, onChange, options = [], ...input }) => {
	return (
		<>
			<AtomInputLabel name={name} label={label} />

			<Form.Item name={name}>
				<Radio.Group onChange={onChange} {...input}>
					{options.map(({ value, label }) => (
						<Radio value={value}>
							<AtomText text={label} />
						</Radio>
					))}
				</Radio.Group>
			</Form.Item>
		</>
	);
};

export default MoleculeRadioInput;
