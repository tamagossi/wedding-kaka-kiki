import React from 'react';
import { Col, Row } from 'antd';

import AtomSummaryGroup from '../../../atoms/summary-group';

import { BANK_ENUM } from '../../../../contstant/enums';
import formatCurrency from '../../../../utils/currencyFormatter';

const OrganismAttendanceSummary = ({ attendances }) => {
	let totalAttendance = 0;
	let totalAttendanceMamahBapak = 0;
	let totalAttendanceIbuAyah = 0;
	let totalAttendanceKaka = 0;
	let totalAttendanceKiki = 0;
	let totalNotAttending = 0;
	let totalGift = 0;
	let totalTransfer = 0;
	let totalBCAKaka = 0;
	let totalBSIKaka = 0;
	let totalBSIKiki = 0;
	let totalBNIKiki = 0;

	attendances.forEach((attend) => {
		const { attendance_count, gift_type, gift_amount, is_attending, bank, invitation_from } =
			attend;

		if (is_attending) {
			const count = parseInt(attendance_count);
			if (attendance_count) totalAttendance = totalAttendance + count;

			switch (invitation_from) {
				case 'KAKA':
					totalAttendanceKaka = totalAttendanceKaka + count;
					break;
				case 'KIKI':
					totalAttendanceKiki = totalAttendanceKiki + count;
					break;
				case 'MAMAH_BAPAK':
					totalAttendanceMamahBapak = totalAttendanceMamahBapak + count;
					break;
				case 'IBU_AYAH':
					totalAttendanceIbuAyah = totalAttendanceIbuAyah + count;
					break;
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

	return (
		<Row style={{ padding: 20 }} gutter={[24, 36]}>
			<Col span={6}>
				<AtomSummaryGroup title="Jumlah Pengunjung" content={totalAttendance} />
			</Col>

			<Col span={6}>
				<AtomSummaryGroup title="Jumlah Tidak Hadir" content={totalNotAttending} />
			</Col>

			<Col span={6}>
				<AtomSummaryGroup title="Tamu Mamah & Bapak" content={totalAttendanceMamahBapak} />
			</Col>

			<Col span={6}>
				<AtomSummaryGroup title="Tamu Ibu & Ayah" content={totalAttendanceIbuAyah} />
			</Col>

			<Col span={6}>
				<AtomSummaryGroup title="Tamu Kaka" content={totalAttendanceKaka} />
			</Col>

			<Col span={6}>
				<AtomSummaryGroup title="Tamu Kiki" content={totalAttendanceKiki} />
			</Col>

			<Col span={6}>
				<AtomSummaryGroup title="Jumlah Kado" content={totalGift} />
			</Col>

			<Col span={6}>
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
	);
};

export default OrganismAttendanceSummary;
