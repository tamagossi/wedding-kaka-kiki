import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs, Table, message, Divider } from 'antd';

import AttendanceService from '../services/attendance';
import GreetingService from '../services/greeting';

import convertObjectToArray from '../utils/convertObjectToArray';
import formatCurrency from '../utils/currencyFormatter';
import { BANK_ENUM, BANK_INFO_ENUM } from '../contstant/enums';
import AtomSummaryGroup from '../components/atoms/summary-group';

const JanganDiBuka = () => {
	const attendanceService = new AttendanceService();
	const greetingService = new GreetingService();
	const [greetings, setGreetings] = useState([]);
	const [attendances, setAttendances] = useState([]);

	const getAttendances = async () => {
		try {
			const attendances = await attendanceService.getAttendances();
			if (attendances) {
				setAttendances(convertObjectToArray(attendances));
			}
		} catch (error) {
			message.error(error.message);
		}
	};

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
			await getAttendances();
			await getGreeting();
		})();
	}, []);

	let totalAttendance = 0;
	let totalNotAttending = 0;
	let totalGift = 0;
	let totalTransfer = 0;
	let totalBCAKaka = 0;
	let totalBSIKaka = 0;
	let totalBSIKiki = 0;
	let totalBNIKiki = 0;

	attendances.forEach((attend) => {
		console.log(attend);
		const { attendance_count, gift_type, gift_amount, is_attending, bank } = attend;

		if (is_attending) {
			if (attendance_count) {
				totalAttendance = totalAttendance + parseInt(attendance_count);
			}
		} else {
			totalNotAttending = totalNotAttending + 1;
		}

		if (!gift_type) {
			totalGift = totalGift + 1;
		} else {
			totalTransfer = totalTransfer + parseInt(gift_amount);

			if (bank === BANK_ENUM.BCA_KAKA) {
				totalBCAKaka = totalBCAKaka + parseInt(gift_amount);
			}
			if (bank === BANK_ENUM.BSI_KAKA) {
				totalBSIKaka = totalBSIKaka + parseInt(gift_amount);
			}
			if (bank === BANK_ENUM.BSI_KIKI) {
				totlBSIKiki = totlBSIKiki + parseInt(gift_amount);
			}
			if (bank === BANK_ENUM.BNI_KIKI) {
				totalBNItotalBNIKiki = totalBNIKiki + parseInt(gift_amount);
			}
		}
	});

	console.log(totalAttendance);
	console.log(totalGift);
	console.log(formatCurrency({ value: totalTransfer }));

	return (
		<Row style={{ padding: 50 }}>
			<Col span={24}>
				<Tabs>
					<Tabs.TabPane key="attendance" tab="Pengunjung">
						<Row style={{ padding: '20px 0' }} gutter={[0, 64]}>
							<Col span={6}>
								<AtomSummaryGroup
									title="Jumlah Pengunjung"
									content={totalAttendance}
								/>
							</Col>

							<Col span={18}>
								<AtomSummaryGroup
									title="Jumlah Tidak Hadir"
									content={totalNotAttending}
								/>
							</Col>

							<Col span={6}>
								<AtomSummaryGroup
									title="Tamu Mamah & Bapak"
									content={totalAttendance}
								/>
							</Col>

							<Col span={6}>
								<AtomSummaryGroup
									title="Tamu Ibu & Ayah"
									content={totalAttendance}
								/>
							</Col>

							<Col span={6}>
								<AtomSummaryGroup title="Tamu Kaka" content={totalAttendance} />
							</Col>

							<Col span={6}>
								<AtomSummaryGroup title="Tamu Kiki" content={totalAttendance} />
							</Col>

							<Col span={6}>
								<AtomSummaryGroup title="Jumlah Kado" content={totalGift} />
							</Col>

							<Col span={18}>
								<AtomSummaryGroup
									title="Jumlah Transfer"
									content={formatCurrency({ value: totalTransfer })}
								/>
							</Col>

							<Col span={6}>
								<AtomSummaryGroup
									title="BCA Kaka"
									content={formatCurrency({ value: totalBCAKaka })}
								/>
							</Col>

							<Col span={6}>
								<AtomSummaryGroup
									title="BSI Kaka"
									content={formatCurrency({ value: totalBSIKaka })}
								/>
							</Col>

							<Col span={6}>
								<AtomSummaryGroup
									title="BSI Kiki"
									content={formatCurrency({ value: totalBSIKiki })}
								/>
							</Col>

							<Col span={6}>
								<AtomSummaryGroup
									title="BNI Kiki"
									content={formatCurrency({ value: totalBNIKiki })}
								/>
							</Col>
						</Row>

						<Divider />

						<Table
							dataSource={attendances}
							columns={[
								{ title: 'Nama Tamu', dataIndex: 'name', key: 'name' },
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
											? BANK_INFO_ENUM[bank].bank_name +
											  ' - ' +
											  BANK_INFO_ENUM[bank].name
											: '-',
								},
								{
									title: 'Jumlah Transfer',
									dataIndex: 'gift_amount',
									key: 'gift_type',
									render: (amount) => formatCurrency({ value: amount }) || '-',
								},
							]}
						/>
					</Tabs.TabPane>
					<Tabs.TabPane key="greeting" tab="Ucapan">
						<Table
							dataSource={greetings}
							columns={[
								{ title: 'Nama', dataIndex: 'name', key: 'name' },
								{ title: 'Ucapan', dataIndex: 'greeting', key: 'greeting' },
							]}
						/>
					</Tabs.TabPane>
				</Tabs>
			</Col>
		</Row>
	);
};

export default JanganDiBuka;
