import { Row, Space } from 'antd';
import React from 'react';
import Image from 'next/image';
import useMedia from 'use-media-antd-query';

import ContentWrapper from '../core/content-wrapper';
import AtomJuliusText from '../atoms/julius-text';
import { FONT_SIZE, MAP_SIZE, WEDDING_MONOGRAM_SIZE } from '../../contstant/mediaQuery';

const OrganismInvitation = () => {
	const size = useMedia();
	const small = ['xs', 'sm'].includes(size);

	return (
		<ContentWrapper>
			<Space className="tc" direction="vertical" size={0}>
				<Image
					src="/wedding-monogram.png"
					height={WEDDING_MONOGRAM_SIZE[size].height}
					width={WEDDING_MONOGRAM_SIZE[size].width}
				/>
				<div style={{ marginTop: 40 }} />

				<AtomJuliusText text="Yang akan dilaksanakan pada:" />

				<AtomJuliusText
					strong
					text="Sabtu, 9 Oktober 2021"
					additionalSize={FONT_SIZE[size]}
				/>

				<div style={{ marginTop: 20 }} />

				<AtomJuliusText strong text="Yang bertempat di:" strong />
				<AtomJuliusText strong text="Bumi Kresna" strong additionalSize={FONT_SIZE[size]} />
				<AtomJuliusText text="Jl. Terusan Soreang, Cipatik, Pamekaran, Soreang - Kab. Bandung" />

				<Row justify="center">
					<iframe
						allowfullscreen=""
						height={MAP_SIZE[size].height}
						loading="lazy"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.26671034045!2d107.5261747!3d-6.9719159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175d3c33a119adf5!2sBumi%20Kresna!5e0!3m2!1sen!2sid!4v1632316029904!5m2!1sen!2sid"
						style={{ border: 0, marginTop: 25, display: small ? 'none' : 'block' }}
						width={MAP_SIZE[size].width}
					/>
				</Row>
			</Space>
		</ContentWrapper>
	);
};

export default OrganismInvitation;
