import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';

import GreetingService from '../../../services/greeting';
import convertObjectToArray from '../../../utils/convertObjectToArray';
import sortArrayByKey from '../../../utils/sortArrayByKey';

const OrganismGreetingSummaryTab = () => {
	const greetingService = new GreetingService();

	const [greetings, setGreetings] = useState([]);
	const [sort, setSort] = useState({ key: '', order: undefined });

	const getGreeting = async () => {
		try {
			const greetings = await greetingService.getGreetings();
			if (greetings) {
				setGreetings(convertObjectToArray(greetings));
			}
		} catch (error) {
			message.error(error.message);
		}
	};

	useEffect(() => {
		(async () => {
			await getGreeting();
		})();
	}, []);

	let dataSource;
	if (sort?.order) {
		dataSource = sortArrayByKey({ array: greetings, ...sort });
	} else {
		dataSource = greetings;
	}

	return (
		<Table
			dataSource={dataSource}
			pagination={{ pageSize: 10 }}
			showSorterTooltip
			onChange={(_, __, { columnKey: key, order }) => setSort({ key, order })}
			columns={[
				{ title: 'Nama', dataIndex: 'name', key: 'name', sorter: true, width: 350 },
				{ title: 'Ucapan', dataIndex: 'greeting', key: 'greeting' },
			]}
		/>
	);
};

export default OrganismGreetingSummaryTab;
