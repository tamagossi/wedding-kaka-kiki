import { Space } from 'antd';
import React from 'react';
import Image from 'next/image';
import useMediaQuery from 'use-media-antd-query';

import ContentWrapper from '../core/content-wrapper';

const OrganismInvitation = () => {
	const colSize = useMediaQuery();
	const isSmall = ['xs', 'sm', 'md'].includes(colSize);

	const fontStyle = { fontFamily: 'Julius Sans One', marginBottom: 0 };

	return (
		<ContentWrapper>
			<p style={{ textAlign: 'center' }}>
				<Space direction="vertical" size={0}>
					<Image
						src="/wedding-monogram.png"
						height={isSmall ? 200 : 335}
						width={isSmall ? 500 : 800}
					/>
					<div style={{ marginTop: 40 }} />

					<p className="julius honey-white" style={{ ...fontStyle, fontSize: 18 }}>
						Yang akan dilaksanakan pada tanggal:
					</p>

					<p className="julius honey-white" style={{ ...fontStyle, fontSize: 35 }}>
						<strong>Sabtu, 9 Oktober 2021</strong>
					</p>

					<p
						className="julius honey-white"
						style={{ ...fontStyle, fontSize: 20, marginTop: 20 }}
					>
						<strong>Yang bertempat di</strong>: <br /> Bumi Kresna, Cipatik, Pamekaran,
						Soreang, Jl. Terusan Soreang - Bandung Barat
					</p>

					<iframe
						allowfullscreen=""
						height={isSmall ? 350 : 400}
						loading="lazy"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.26671034045!2d107.5261747!3d-6.9719159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175d3c33a119adf5!2sBumi%20Kresna!5e0!3m2!1sen!2sid!4v1632316029904!5m2!1sen!2sid"
						style={{ border: 0, marginTop: 25 }}
						width={isSmall ? 420 : 550}
					></iframe>
				</Space>
			</p>
		</ContentWrapper>
	);
};

export default OrganismInvitation;
