import { Col, Row } from 'antd';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Wedding Kaka & Kiki</title>
				<meta name="description" content="A wedding web invitation of Kaka & Kiki" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Row style={{ flexFlow: 'row-reverse' }}>
				<Col xs={24} lg={12} style={{}}>
					Hallo 1
				</Col>

				<Col xs={24} lg={12}>
					Hallo 2
				</Col>
			</Row>
		</>
	);
}
