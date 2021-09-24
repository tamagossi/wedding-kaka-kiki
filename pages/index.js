import { Col, Divider, Row, Typography } from 'antd';
import Head from 'next/head';

import OrganismAttendance from '../components/organisms/attendance';
import OrganismInvitation from '../components/organisms/invitation';
import OrganismHeader from '../components/organisms/header';
import OrganismTestimonial from '../components/organisms/testimonial';

export default function Home() {
	return (
		<>
			<Head>
				<title>The Marriage of Kiki & Kaka</title>
				<meta name="description" content="A wedding web Invitation of Kaka & Kiki" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Row>
				<Col span={24} className="bg-rose-gold">
					<OrganismHeader />
					<OrganismInvitation />
					<OrganismAttendance />
					<OrganismTestimonial />
				</Col>
			</Row>

			<Row justify="center">
				<Typography.Text>
					Created with ❤ (to{' '}
					<Typography.Link href="https://github.com/kikipratiwi" target="_blank">
						Kiki Pratiwi
					</Typography.Link>
					) by{' '}
					<Typography.Link href="https://github.com/tamagossi" target="_blank">
						tamagossi
					</Typography.Link>
				</Typography.Text>
			</Row>
		</>
	);
}
