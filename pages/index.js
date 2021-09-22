import { Col, Divider, Row } from 'antd';
import Head from 'next/head';

import OrganismAttendance from '../components/organisms/attendance';
import OrganismInvitation from '../components/organisms/invitation';
import OrganismSurah from '../components/organisms/surah';
import OrganismTestimonial from '../components/organisms/testimonial';

export default function Home() {
	return (
		<>
			<Head>
				<title>Wedding Kaka & Kiki</title>
				<meta name="description" content="A wedding web Invitation of Kaka & Kiki" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Row>
				<Col
					span={24}
					className="bg-rose-gold"
					style={{ height: '100vh', overflowY: 'auto' }}
				>
					<OrganismSurah />
					<OrganismInvitation />
					<OrganismAttendance />
					<OrganismTestimonial />
				</Col>
			</Row>
		</>
	);
}
