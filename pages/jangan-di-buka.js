import React from 'react';
import { Col, Row, Tabs, Typography } from 'antd';

import OrganismGreetingSummaryTab from '../components/organisms/summary/greeting';
import OrganismAttendanceSummaryTab from '../components/organisms/summary/attendance';

const JanganDiBuka = () => {
	return (
		<Row style={{ padding: 80 }}>
			<Typography.Title>Rangkuman Data Pernikahan</Typography.Title>

			<Col span={24}>
				<Tabs>
					<Tabs.TabPane key="attendance" tab="Pengunjung">
						<OrganismAttendanceSummaryTab />
					</Tabs.TabPane>

					<Tabs.TabPane key="greeting" tab="Ucapan">
						<OrganismGreetingSummaryTab />
					</Tabs.TabPane>
				</Tabs>
			</Col>
		</Row>
	);
};

export default JanganDiBuka;
