import React, { useEffect, useState } from 'react';
import { Table, message, Divider } from 'antd';

import AttendanceService from '../../../../services/attendance';
import { BANK_INFO_ENUM, INVITATION_FROM_ENUM } from '../../../../contstant/enums';

import convertObjectToArray from '../../../../utils/convertObjectToArray';
import formatCurrency from '../../../../utils/currencyFormatter';
import sortArrayByKey from '../../../../utils/sortArrayByKey';
import OrganismAttendanceSummary from './summary';

const OrganismAttendanceSummaryTab = () => {
	const attendanceService = new AttendanceService();
	const [attendances, setAttendances] = useState([]);
	const [sort, setSort] = useState({ key: '', order: undefined });

	const convertAttendanceCountToNumber = (attendances) =>
		attendances.map(({ attendance_count, ...attendance }) => ({
			...attendance,
			attendance_count: parseInt(attendance_count),
		}));

	const setDefaultTransferValue = (attendances) => {
		return attendances.map(({ gift_amount, ...attendance }) => {
			return { ...attendance, gift_amount: gift_amount ? parseInt(gift_amount) : 0 };
		});
	};

	const getAttendances = async () => {
		try {
			const attendances = await attendanceService.getAttendances();
			if (attendances) {
				setAttendances(
					convertAttendanceCountToNumber(
						setDefaultTransferValue(convertObjectToArray(attendances))
					)
				);
			}
		} catch (error) {
			message.error(error.message);
		}
	};

	useEffect(() => {
		(async () => {
			await getAttendances();
		})();
	}, []);

	let dataSource;
	if (sort?.order) {
		dataSource = sortArrayByKey({ array: attendances, ...sort });
	} else {
		dataSource = attendances;
	}

	return (
		<>
			<OrganismAttendanceSummary attendances={attendances} />

			<Divider />

			<Table
				dataSource={attendances}
				onChange={(_, __, { columnKey: key, order }) => setSort({ key, order })}
				pagination={{ pageSize: 10 }}
				columns={[
					{
						title: 'Nama Tamu',
						dataIndex: 'name',
						key: 'name',
						sorter: true,
						width: 300,
					},
					{
						title: 'Hadir',
						key: 'attend',
						dataIndex: 'is_attending',
						render: (attend) => (attend ? 'Ya' : 'Tidak'),
					},
					{
						title: 'Jumlah tamu',
						dataIndex: 'attendance_count',
						key: 'attendance_count',
						sorter: true,
						width: 150,
					},
					{
						title: 'Tamu dari',
						dataIndex: 'invitation_from',
						key: 'invitation_from',
						sorter: true,
					},
					{
						title: 'Tipe Hadiah',
						dataIndex: 'gift_type',
						key: 'gift_type',
						render: (type) => (type ? 'Transfer' : 'Kirim kado kerumah'),
					},
					{
						title: 'Tujuan Transfer',
						dataIndex: 'bank',
						key: 'bank',
						render: (bank) =>
							bank
								? BANK_INFO_ENUM[bank].bank_name + ' - ' + BANK_INFO_ENUM[bank].name
								: '-',
					},
					{
						title: 'Jumlah Transfer',
						dataIndex: 'gift_amount',
						key: 'gift_amount',
						render: (amount) => formatCurrency({ value: amount }) || '-',
						sorter: true,
					},
				]}
			/>
		</>
	);
};

export default OrganismAttendanceSummaryTab;
