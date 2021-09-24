import React, { useEffect, useState } from 'react';
import ContentWrapper from '../core/content-wrapper';
import { Carousel, Col, Form, message, Row } from 'antd';
import useMedia from 'use-media-antd-query';

import AtomTitleGroup from '../atoms/title-group';
import MoleculeTextAreaInputGroup from '../molecules/input-group/text-area';
import MoleculeTextInputGroup from '../molecules/input-group/text-input';

import convertObjectToArray from '../../utils/convertObjectToArray';
import shuffleArray from '../../utils/shuffleArray';
import GreetingService from '../../services/greeting';
import AtomButton from '../atoms/button';
import AtomCinzelDecorativeText from '../atoms/cinzel-text';
import AtomText from '../atoms/text';
import { CAROUSEL_ITEM } from '../../contstant/mediaQuery';

const OrganismTestimonial = () => {
	const size = useMedia();

	const greetingService = new GreetingService();
	const [greetings, setGreetings] = useState();
	const [form] = Form.useForm();

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

	const sendGreeting = async () => {
		try {
			const greeting = form.getFieldsValue();
			if (greeting.name && greeting.greeting) {
				await greetingService.addGreeting(greeting);
				message.success('Terimakasih atas ucapannya!');

				form.resetFields();

				await getGreeting();
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

	return (
		<ContentWrapper style={{ minHeight: 0 }}>
			<Col span={24}>
				<AtomTitleGroup title="Have anything to say?" />
			</Col>

			<Row justify="center" align="top">
				{greetings && (
					<Col xs={24} style={{ margin: '40px 0' }}>
						<Carousel autoplay slidesToShow={CAROUSEL_ITEM[size]}>
							{shuffleArray(greetings).map(({ greeting, name }) => (
								<div>
									<h3
										className="julius"
										style={{
											overflowY: 'auto',
											maxHeight: ['xs', 'sm', 'md'].includes(size)
												? 260
												: 290,
											minHeight: ['xs', 'sm', 'md'].includes(size)
												? 230
												: 260,
										}}
									>
										<div
											style={{
												padding: 30,
												borderRight: '1px solid rgba(255,255,255,0.7)',
											}}
										>
											<AtomCinzelDecorativeText text={`- ${name}`} strong />
											<br />
											<AtomText
												italic
												text={`"${greeting}"`}
												additionalSize={
													['xs', 'sm', 'md'].includes(size) ? -2 : -7
												}
											/>
										</div>
									</h3>
								</div>
							))}
						</Carousel>
					</Col>
				)}

				<Col xs={20} lg={15}>
					<Form
						form={form}
						style={{ color: 'white' }}
						scrollToFirstError
						initialValues={{
							greeting:
								'Hallo Kiki!! Raka!! Semoga bersama kembali ke kampung akhirat dengan mulus ya!!',
						}}
					>
						<MoleculeTextInputGroup
							name="name"
							label="Pengirim"
							placeholder="ex: Anonymous Tampan"
							rules={[{ required: true, message: 'Tidak boleh kosong' }]}
						/>

						<MoleculeTextAreaInputGroup
							name="greeting"
							label="Ucapan"
							placeholder="ex: Hallo Kiki!! Raka!! Semoga bersama kembali ke kampung akhirat dengan mulus ya!!"
							rules={[{ required: true, message: 'Tidak boleh kosong' }]}
						/>
					</Form>
				</Col>

				<Col xs={20} lg={15}>
					<AtomButton onClick={sendGreeting}>Kirim Ucapan</AtomButton>
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismTestimonial;
