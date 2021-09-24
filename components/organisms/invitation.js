import React from 'react';
import useMedia from 'use-media-antd-query';
import { Row, Space } from 'antd';

import AtomCinzelDecorativeText from '../atoms/cinzel-text';
import AtomJuliusText from '../atoms/julius-text';
import AtomText from '../atoms/text';
import ContentWrapper from '../core/content-wrapper';
import { FONT_SIZE, MAP_SIZE } from '../../contstant/mediaQuery';

const OrganismInvitation = () => {
	const size = useMedia();
	const small = ['xs', 'sm'].includes(size);

	return (
		<ContentWrapper>
			<Space className="tc" direction="vertical" size={40}>
				<AtomText text="Dengan ini memohon doa restu rekan/keluarga sekalian dalam pernikahan antara:" />

				<Row style={{ flexDirection: 'column' }}>
					<AtomCinzelDecorativeText
						strong
						text="Kiki Pratiwi"
						additionalSize={FONT_SIZE[size]}
					/>
					<AtomText
						text="Putri dari Ibu Siti Maesaroh dan Bapak Nanang Irawan"
						additionalSize={-2}
					/>
					<AtomCinzelDecorativeText
						strong
						text="&"
						additionalSize={FONT_SIZE[size] + 20}
					/>
					<AtomCinzelDecorativeText
						strong
						text="Auliya Raka Pratama"
						additionalSize={FONT_SIZE[size]}
					/>
					<AtomText
						text="Putra dari Ibu Nia Krisni F dan (Alm) Agus Susanto"
						additionalSize={-2}
					/>
				</Row>

				<Row style={{ flexDirection: 'column' }}>
					<AtomText text="Yang akan dilaksanakan pada:" />
					<Row justify="center">
						<AtomText strong text="Pukul 09.00 - 11.30: &nbsp;" />
						<AtomText text="Sesi Akad & Keluarga" />
					</Row>
					<Row justify="center">
						<AtomText strong text="Pukul 11.30 - 13.45: &nbsp;" />
						<AtomText text="Sesi Teman & Rekan Kerja" />
					</Row>
				</Row>

				<Row style={{ flexDirection: 'column' }}>
					<AtomText text="Yang akan dilaksanakan pada pukul:" />
					<AtomText strong text="Sabtu, 9 Oktober 2021" />
				</Row>

				<Row style={{ flexDirection: 'column' }}>
					<Row justify="center">
						<AtomText text="Yang bertempat di: &nbsp;" />
						<AtomText text="Balai Bumi Kresna," strong />
						<AtomText text="Jl. Terusan Soreang, Cipatik, Pamekaran, Soreang - Kab. Bandung" />
					</Row>

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
				</Row>
			</Space>
		</ContentWrapper>
	);
};

export default OrganismInvitation;
