import { useEffect, useRef } from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const fadeIn = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.01 * index,
		},
	}),
};

function Artist({ artist }) {
	const artistName = useRef(null);

	useEffect(
		function () {
			gsap.to(artistName.current, {
				opacity: 1,
				duration: 2,
				delay: 0.1,
				text: `${artist.name}`,
				ease: 'easeInOut',
			});
		},
		[artist.name]
	);

	return (
		<>
			<Section>
				<div className='artist-header'>
					<p ref={artistName}></p>
					<motion.img
						src={artist.image}
						alt={artist.name}
						initial={{ scale: 0.6 }}
						animate={{ scale: 1 }}
						transition={{ duration: 1 }}></motion.img>
				</div>
			</Section>
			<Section>
				<div className='artist-biography'>
					<SectionHeader>Biography</SectionHeader>
					<p className='paragraph'>{artist.biography}</p>
				</div>
			</Section>
			<Section>
				<div className='artist-exhibitions'>
					<SectionHeader>Selected Exhibitions</SectionHeader>
					<ul>
						{artist.exhibitions.map((item, i) => (
							<Exhibitions item={item} key={i} index={i} />
						))}
					</ul>
				</div>
			</Section>
		</>
	);
}

export default Artist;

function Exhibitions({ item, index }) {
	return (
		<motion.li
			variants={fadeIn}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			custom={index}>
			{item}
		</motion.li>
	);
}
