import React from 'react';
import useMedia from 'use-media-antd-query';
import { Col, Divider, Row, Space } from 'antd';

import AtomCinzelDecorativeText from '../atoms/cinzel-text';
import AtomJuliusText from '../atoms/julius-text';
import AtomText from '../atoms/text';
import ContentWrapper from '../core/content-wrapper';
import { AKAD_TIME_BORDER, FONT_SIZE, MAP_SIZE } from '../../contstant/mediaQuery';

const OrganismInvitation = () => {
	const size = useMedia();
	const small = ['xs', 'sm', 'md'].includes(size);

	return (
		<ContentWrapper>
			<Row justify="center">
				<Col xs={24} style={{ margin: '40px 0' }}>
					<Space className="tc" direction="vertical" size={40}>
						<AtomText text="Dengan mengucap rasa syukur ke hadirat Allah SWT, dengan ini kami meminta do'a restu Bapak/Ibu/Saudara/i pada acara pernikahan kami:" />

						<Row style={{ flexDirection: 'column' }}>
							<AtomCinzelDecorativeText
								strong
								text="Kiki Pratiwi"
								additionalSize={FONT_SIZE[size]}
							/>
							<AtomText
								text="Putri kedua dari Bapak Nanang Irawan & Ibu Siti Maesaroh"
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
								text="Putra pertama dari (Alm) Bapak Agus Susanto & Ibu Nia Krisni F"
								additionalSize={-2}
							/>
						</Row>

						<Row style={{ flexDirection: 'column' }}>
							<AtomText text="Yang akan dilaksanakan pada:" />
							<AtomText strong text="Sabtu, 9 Oktober 2021" />
						</Row>

						<Row style={{ flexDirection: 'row' }} gutter={[0, 12]}>
							<Col
								xs={24}
								md={12}
								style={{
									display: 'flex',
									flex: 1,
									flexDirection: 'column',
									justifyContent: 'center',
									...AKAD_TIME_BORDER[size],
									paddingBottom: '.5rem',
								}}>
								<AtomText text="Akad Nikah" additionalSize={-1} strong />
								<AtomText text="(Hanya dihadiri keluarga)" additionalSize={-1} />
								<AtomText text="08.00 WIB s.d. Selesai" additionalSize={-1} />
							</Col>

							<Col
								xs={24}
								md={12}
								style={{
									display: 'flex',
									flexDirection: 'column',
								}}>
								<AtomText strong text="Resepsi Pernikahan" additionalSize={-1} />
								<AtomText
									text="Sesi 1: Kolega dari Orang Tua"
									additionalSize={-1}
								/>
								<AtomText text="10.30 - 12.00 WIB" additionalSize={-1} />
								<AtomText
									text="Sesi 2: Rekan dari Kedua Mempelai"
									additionalSize={-1}
									style={{ marginTop: '.5rem' }}
								/>
								<AtomText text="12.00 - 13.45 WIB" additionalSize={-1} />
							</Col>
						</Row>

						<Row style={{ flexDirection: 'column' }}>
							<Row justify="center">
								<AtomText text="Yang bertempat di&nbsp;" />
								<AtomText text="Bumi Kresna" strong />
								<AtomText text=", Jl. Terusan Soreang, Cipatik, Pamekaran, Soreang - Kab. Bandung" />
							</Row>

							<Row justify="center">
								<iframe
									allowFullScreen=""
									height={`${MAP_SIZE[size].height}px`}
									loading="lazy"
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.26671034045!2d107.5261747!3d-6.9719159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175d3c33a119adf5!2sBumi%20Kresna!5e0!3m2!1sen!2sid!4v1632316029904!5m2!1sen!2sid"
									style={{ border: 0, marginTop: 25 }}
									width={MAP_SIZE[size].width}
								/>
							</Row>
						</Row>
					</Space>
				</Col>
			</Row>
		</ContentWrapper>
	);
};

export default OrganismInvitation;
