import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Col, Divider, Form, message, Row } from 'antd';

import ContentWrapper from '../core/content-wrapper';
import MoleculeTextInputGroup from '../molecules/input-group/text-input';
import MoleculeNumberInputGroup from '../molecules/input-group/number-input';
import MoleculeRadioInput from '../molecules/input-group/radio-input';
import MoleculeSelectInput from '../molecules/input-group/select-input';
import AtomTransferCard from '../atoms/transfer-card';

import { BANK_ENUM, BANK_INFO_ENUM, GIFT_ENUM } from '../../contstant/enums';
import AttendanceService from '../../services/attendance';
import AtomTitleGroup from '../atoms/title-group';
import AtomInfoGroup from '../atoms/info-group';

const OrganismAttendance = () => {
	const attendanceService = new AttendanceService();

	const [isAttending, setIsAttending] = useState(true);
	const [giftType, setGiftType] = useState(GIFT_ENUM.GOODS);
	const [bankType, setBankType] = useState(BANK_ENUM.BCA_KAKA);
	const [form] = Form.useForm();
	const [giftForm] = Form.useForm();

	const confirmAttendance = async () => {
		try {
			const attendanceValue = form.getFieldsValue();
			const giftValue = giftForm.getFieldsValue();

			if (!giftValue.bank) {
				giftValue.bank = BANK_ENUM.BCA_KAKA;
			}

			await attendanceService.addAttendances({ ...attendanceValue, ...giftValue });
		} catch (error) {
			message.error(error.message);
		}
	};

	const renderGiftDestination = () => {
		if (giftType === GIFT_ENUM.GOODS) {
			return (
				<AtomInfoGroup
					title="Kirim Hadiah:"
					subtitle="Jl. H. Aen Suhendra no. 3 09/11, Kec. Margaasih, Bandung, Jawa Barat, 40217
						- Kiki Pratiwi +62-8382-9204-785"
				/>
			);
		}

		const setTransferAmount = (value) => {
			giftForm.setFieldsValue({
				gift_amount: value,
			});
		};

		if (giftType === GIFT_ENUM.TRANSFER) {
			return (
				<>
					<MoleculeSelectInput
						label="Pilih Bank Tujuan Transfer"
						name="bank"
						placeholder="Pilih bank tujuan"
						onChange={(value) => setBankType(value)}
						defaultValue={BANK_ENUM.BCA_KAKA}
						options={[
							{
								label: 'BANK BCA',
								value: BANK_ENUM.BCA_KAKA,
							},
							{
								label: 'BANK BSI - Raka Pratama',
								value: BANK_ENUM.BSI_KAKA,
							},
							{
								label: 'BANK BSI - Kiki Pratiwi',
								value: BANK_ENUM.BSI_KIKI,
							},
							{
								label: 'BANK BNI',
								value: BANK_ENUM.BNI_KIKI,
							},
						]}
					/>

					<p style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
						Pilih Jumlah:
					</p>

					<Row justify="space-around" gutter={24}>
						<AtomTransferCard value={50000} onClick={() => setTransferAmount(50000)} />
						<AtomTransferCard
							value={100000}
							onClick={() => setTransferAmount(100000)}
						/>
						<AtomTransferCard
							value={200000}
							onClick={() => setTransferAmount(200000)}
						/>
						<AtomTransferCard value={'Lainnya'} onClick={() => setTransferAmount(0)} />
					</Row>

					<Row gutter={24} style={{ marginTop: 20 }}>
						<Col span={12}>
							<MoleculeTextInputGroup
								label="Nama Pemilik Rekening"
								name="account_name"
								placeholder="Nama Pemilik Rek."
							/>
						</Col>

						<Col span={12}>
							<MoleculeNumberInputGroup
								label="Jumlah"
								name="gift_amount"
								placeholder="Jumlah"
								formRef={form}
							/>
						</Col>
					</Row>

					<Row justify="center" gutter={24} style={{ marginTop: 20 }}>
						<Col span={20}>
							<AtomInfoGroup
								title={BANK_INFO_ENUM[bankType].bank_name}
								subtitle={`No Rekening: ${BANK_INFO_ENUM[bankType].no} a/n ${BANK_INFO_ENUM[bankType].name}`}
							/>
						</Col>

						<Col
							span={12}
							style={{
								padding: 10,
								background: 'white',
								borderRadius: 10,
								height: 300,
							}}
						>
							<Image layout="fill" src={BANK_INFO_ENUM[bankType].image} />
						</Col>
					</Row>
				</>
			);
		}
	};

	return (
		<ContentWrapper>
			<Row justify="center">
				<Col xs={24} lg={18}>
					<AtomTitleGroup
						title="Konfirmasi Kehadiran"
						subtitle="Dikarenakan masih diberlakukan pembatasan, maka dari itu kami menganjurkan
						bagi rekan/keluarga untuk mengisi daftar hadir jika ingin mengunjungi venue
						resepsi"
					/>
				</Col>

				<Col xs={24} lg={10}>
					<Form className="julius" style={{ color: '#f2f3ef', marginTop: 0 }} form={form}>
						<Row>
							<Col span={24}>
								<MoleculeTextInputGroup
									label="Nama"
									name="name"
									placeholder="Nama Tamu"
								/>
							</Col>

							<Col xs={24} lg={12}>
								<MoleculeRadioInput
									label="Apakah anda akan datang?"
									name="is_attending"
									onChange={(e) => setIsAttending(e.target.value)}
									options={[
										{
											label: 'Ya',
											value: true,
										},
										{
											label: 'Tidak',
											value: false,
										},
									]}
								/>
							</Col>

							<Col xs={24} lg={12}>
								<MoleculeNumberInputGroup
									disabled={!isAttending}
									label="Jumlah"
									name="attendance_count"
									placeholder="Jumlah Tamu"
									formRef={form}
								/>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>

			<Divider />

			<Row justify="center">
				<Col xs={24} lg={18}>
					<AtomTitleGroup
						title="Wedding Gift"
						subtitle="Your blessing and coming to our wedding are enough. However, if you want
						give a gift we make it easier for you. Thank you"
					/>
				</Col>

				<Col xs={24} lg={10}>
					<Form
						className="julius"
						style={{ color: '#f2f3ef', marginTop: 0 }}
						form={giftForm}
					>
						<Row>
							<Col span={24}>
								<MoleculeSelectInput
									label="Pilih tipe hadiah"
									name="gift_type"
									placeholder="Pilih hadiah yang ingin anda beri"
									onChange={(value) => setGiftType(value)}
									defaultValue={GIFT_ENUM.GOODS}
									options={[
										{
											label: 'Kirim Hadiah',
											value: GIFT_ENUM.GOODS,
										},
										{
											label: 'Transfer Bank',
											value: GIFT_ENUM.TRANSFER,
										},
									]}
								/>
							</Col>

							<Col span={24}>{renderGiftDestination()}</Col>
						</Row>
					</Form>
				</Col>
			</Row>

			<Row justify="center" style={{ marginTop: 20 }}>
				<Col span={5}>
					<Button
						block
						onClick={confirmAttendance}
						size="large"
						style={{ background: '#e0a99f55', color: 'white' }}
					>
						Konfirmasi
					</Button>
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismAttendance;
