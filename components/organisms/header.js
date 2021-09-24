import React from 'react';
import Image from 'next/image';
import useMedia from 'use-media-antd-query';
import { Col, Row } from 'antd';

import AtomText from '../atoms/text';
import ContentWrapper from '../core/content-wrapper';
import { WEDDING_MONOGRAM_SIZE } from '../../contstant/mediaQuery';

const OrganismHeader = () => {
	const size = useMedia();

	return (
		<ContentWrapper>
			<Row className="tc" justify="center" gutter={[0, 36]}>
				<Col span={24}>
					<Image
						src="/wedding-monogram.png"
						height={WEDDING_MONOGRAM_SIZE[size].height}
						width={WEDDING_MONOGRAM_SIZE[size].width}
					/>{' '}
				</Col>

				<Col xs={24} lg={20} xl={18}>
					<AtomText text={`"`} />
					<AtomText
						italic
						text="Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
							pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
							merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
							sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
							(kebesaran Allah) bagi kaum yang berpikir."
						style={{ fontWeight: 400 }}
					/>
					<AtomText text={`"`} />
					<AtomText text="  - Q.S: Ar-Rum 21" strong />
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismHeader;
