import React, { useState } from 'react';
import { Col, Divider, Form, message, Row } from 'antd';

import AtomButton from '../atoms/button';
import AtomInfoGroup from '../atoms/info-group';
import AtomTitleGroup from '../atoms/title-group';
import AtomTransferCard from '../atoms/transfer-card';
import AttendanceService from '../../services/attendance';
import ContentWrapper from '../core/content-wrapper';
import MoleculeNumberInputGroup from '../molecules/input-group/number-input';
import MoleculeRadioInput from '../molecules/input-group/radio-input';
import MoleculeSelectInput from '../molecules/input-group/select-input';
import MoleculeTextInputGroup from '../molecules/input-group/text-input';

import { BANK_ENUM, BANK_INFO_ENUM, GIFT_ENUM, INVITATION_FROM_ENUM } from '../../contstant/enums';
import AtomText from '../atoms/text';

const OrganismAttendance = () => {
	const attendanceService = new AttendanceService();

	const [isAttending, setIsAttending] = useState(true);
	const [giftType, setGiftType] = useState(GIFT_ENUM.GOODS);
	const [bankType, setBankType] = useState(BANK_ENUM.BCA_KAKA);
	const [form] = Form.useForm();
	const [giftForm] = Form.useForm();

	const confirmAttendance = async () => {
		try {
			await form.validateFields();
			await giftForm.validateFields();

			const attendanceValue = form.getFieldsValue();
			const giftValue = giftForm.getFieldsValue();

			await attendanceService.addAttendances({ ...attendanceValue, ...giftValue });
			message.info('Kunjunganmu sudah tercatat');

			form.resetFields();
			giftForm.resetFields();
		} catch (error) {
			message.error('Periksa kembali data yang anda masukkan');
		}
	};

	const renderGiftDestination = () => {
		if (giftType === GIFT_ENUM.GOODS) {
			return (
				<div className="tc">
					<AtomInfoGroup
						title="Kirim Hadiah:"
						subtitle="Jl. H. Aen Suhendra No. 03 RT 09/11, Kec. Margaasih, Bandung, Jawa Barat, 40217
							- Kiki Pratiwi +62-819-3673-0228"
					/>
				</div>
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
								label: 'BANK BCA - Auliya Raka Pratama',
								value: BANK_ENUM.BCA_KAKA,
							},
							{
								label: 'BANK BSI - Auliya Raka Pratama',
								value: BANK_ENUM.BSI_KAKA,
							},
							{
								label: 'BANK BSI - Kiki Pratiwi',
								value: BANK_ENUM.BSI_KIKI,
							},
							{
								label: 'BANK BNI - Kiki Pratiwi',
								value: BANK_ENUM.BNI_KIKI,
							},
						]}
					/>

					<AtomText text="Pilih Jumlah:" />

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
						<Col xs={24} md={12}>
							<MoleculeTextInputGroup
								label="Nama Pemilik Rekening"
								name="account_name"
								placeholder="Nama Pemilik Rek."
							/>
						</Col>

						<Col xs={24} md={12}>
							<MoleculeNumberInputGroup
								label="Jumlah"
								name="gift_amount"
								placeholder="Jumlah"
								formRef={form}
							/>
						</Col>
					</Row>

					<Row className="tc" justify="center" gutter={[0, 24]} style={{ marginTop: 20 }}>
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
								minHeight: '300px',
								backgroundImage: `url(${BANK_INFO_ENUM[bankType].image})`,
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
								minWidth: '300px',
							}}
						/>
					</Row>
				</>
			);
		}
	};

	return (
		<ContentWrapper>
			<Row justify="center" gutter={[0, 36]}>
				<Col className="tc" xs={24} lg={18}>
					<AtomTitleGroup
						title="Konfirmasi Kehadiran"
						subtitle="Dikarenakan masih diberlakukannya pembatasan, maka dari itu kami menganjurkan
						bagi rekan/keluarga yang akan menghadiri acara resepsi untuk mengisi daftar hadir"
					/>
				</Col>

				<Col xs={24} lg={10}>
					<Form form={form} initialValues={{ attendance_count: 0 }} scrollToFirstError>
						<Row gutter={8}>
							<Col span={24}>
								<MoleculeTextInputGroup
									label="Nama"
									name="name"
									placeholder="Nama Tamu"
									rules={[
										{
											required: true,
											message: 'Tidak boleh kosong',
										},
									]}
								/>
							</Col>

							<Col span={24}>
								<MoleculeSelectInput
									label="Tamu dari"
									name="invitation_from"
									placeholder="Pilih yang mengundang anda"
									rules={[
										{
											required: true,
											message: 'Tidak boleh kosong',
										},
									]}
									options={[
										{
											label: 'Ibu Siti Maesaroh / Bpk. Nanang Irawan',
											value: INVITATION_FROM_ENUM.MAMAH_BAPAK,
										},
										{
											label: 'Ibu Nia Krisni F / Bpk. (Alm) Agus Susanto / Bpk. Ridwan Saepudin',
											value: INVITATION_FROM_ENUM.IBU_AYAH,
										},
										{
											label: 'Auliya Raka Pratama',
											value: INVITATION_FROM_ENUM.KAKA,
										},
										{
											label: 'Kiki Pratiwi',
											value: INVITATION_FROM_ENUM.KIKI,
										},
									]}
								/>
							</Col>

							<Col xs={24} lg={12}>
								<MoleculeRadioInput
									label="Apakah anda akan hadir?"
									name="is_attending"
									onChange={(e) => setIsAttending(e.target.value)}
									rules={[
										{
											required: true,
											message: 'Tidak boleh kosong',
										},
									]}
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
									rules={[
										{
											required: true,
											message: 'Tidak boleh kosong',
										},
										({ getFieldValue }) => ({
											validator(_, value) {
												if (getFieldValue('is_attending') && value > 0) {
													return Promise.resolve();
												}

												return Promise.reject(
													new Error('Jumlah tamu harus lebih dari 0')
												);
											},
										}),
									]}
								/>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>

			<Row justify="center">
				<Col span={8}>
					<Divider />
				</Col>
			</Row>

			<Row justify="center" gutter={[0, 36]}>
				<Col className="tc" xs={24} lg={18}>
					<AtomTitleGroup
						title="Wedding Gift"
						subtitle="Your blessing and coming to our wedding are enough. However, if you want
						give a gift we make it easier for you. Thank you"
					/>
				</Col>

				<Col xs={24} lg={10}>
					<Form
						form={giftForm}
						initialValues={{ bank: BANK_ENUM.BCA_KAKA }}
						scrollToFirstError
					>
						<Row>
							<Col span={24}>
								<MoleculeSelectInput
									label="Pilih tipe hadiah"
									name="gift_type"
									placeholder="Pilih hadiah yang ingin anda beri"
									onChange={(value) => setGiftType(value)}
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
				<Col xs={24} lg={10}>
					<AtomButton onClick={confirmAttendance}>Konfirmasi</AtomButton>
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismAttendance;
