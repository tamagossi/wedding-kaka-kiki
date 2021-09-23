import React, { useEffect, useState } from 'react';
import ContentWrapper from '../core/content-wrapper';
import { Button, Carousel, Col, Form, message, Row } from 'antd';
import useMediaQuery from 'use-media-antd-query';

import AtomTitleGroup from '../atoms/title-group';
import MoleculeTextAreaInputGroup from '../molecules/input-group/text-area';
import MoleculeTextInputGroup from '../molecules/input-group/text-input';

import convertObjectToArray from '../../utils/convertObjectToArray';
import shuffleArray from '../../utils/shuffleArray';
import GreetingService from '../../services/greeting';

const OrganismTestimonial = () => {
	const colSize = useMediaQuery();
	const isSmall = ['xs', 'sm'].includes(colSize);
	const isMedium = ['md'].includes(colSize);

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
			await greetingService.addGreeting(greeting);

			await getGreeting();
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

			<Row justify="center">
				{greetings && (
					<Col xs={24} style={{ margin: '40px 0' }}>
						<Carousel autoplay slidesToShow={isSmall ? 1 : isMedium ? 2 : 4}>
							{shuffleArray(greetings).map(({ greeting, name }) => (
								<div>
									<h3
										className="julius"
										style={{
											color: '#fff',
											minHeight: 280,
										}}
									>
										<div
											style={{
												padding: 30,
												borderRight: '1px solid rgba(255,255,255,0.7)',
											}}
										>
											<p style={{ fontWeight: 900, fontSize: 20 }}>
												- {name}
											</p>

											<p style={{ fontSize: 14 }}>
												<em>"{greeting}"</em>
											</p>
										</div>
									</h3>
								</div>
							))}
						</Carousel>
					</Col>
				)}

				<Col xs={20} lg={15}>
					<Form form={form} style={{ color: 'white' }}>
						<MoleculeTextInputGroup
							name="name"
							label="Pengirim"
							placeholder="ex: Anonymous Tampan"
						/>

						<MoleculeTextAreaInputGroup
							name="greeting"
							label="Ucapan"
							placeholder="ex: Hallo Kiki!! Tama!! Semoga bersama kembali ke kampung akhirat dengan mulus ya!!"
						/>
					</Form>
				</Col>

				<Col xs={20} lg={15}>
					<Button
						block
						onClick={sendGreeting}
						size="large"
						style={{ background: '#e0a99f55', color: 'white' }}
					>
						Kirim Ucapan
					</Button>
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismTestimonial;
