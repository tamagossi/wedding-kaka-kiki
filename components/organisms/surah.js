import React from 'react';
import ContentWrapper from '../core/content-wrapper';
import { Col, Row } from 'antd';

const OrganismSurah = () => {
	return (
		<ContentWrapper>
			<Row justify="center">
				<Col xs={24} lg={20}>
					<p style={{ textAlign: 'center', fontSize: 20 }}>
						"
						<em>
							Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
							pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
							merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
							sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
							(kebesaran Allah) bagi kaum yang berpikir.
						</em>
						” <br /> - <strong>Q.S Ar-Rum: 21</strong> -
					</p>
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismSurah;
