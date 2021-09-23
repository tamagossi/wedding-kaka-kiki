import React from 'react';
import ContentWrapper from '../core/content-wrapper';
import { Col, Row } from 'antd';
import AtomText from '../atoms/text';

const OrganismSurah = () => {
	return (
		<ContentWrapper>
			<Row className="tc" justify="center">
				<Col xs={24} lg={20} xl={18}>
					<AtomText text={`"`} />
					<AtomText
						italic
						text="Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
							pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
							merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
							sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
							(kebesaran Allah) bagi kaum yang berpikir."
					/>
					<AtomText text={`"`} />
					<AtomText text="  - Q.S: Ar-Rum 21" stong />
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismSurah;
