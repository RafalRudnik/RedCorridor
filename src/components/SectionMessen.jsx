import { useData } from '../contexts/DataContext';
import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';

const messen = [
	{
		title: 'Miami',
		image: './img/Miami.png',
		description:
			'Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor. Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor.',
	},
	{
		title: 'Tokio',
		image: './img/Tokio.jpeg',
		description:
			'Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor. Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor.',
	},
	{
		title: 'AAF Hamburg',
		image: './img/ArtFair.jpg',
		description:
			'Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor. Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor.',
	},
	{
		title: 'Scope Basel',
		image: './img/scope.jpeg',
		description:
			'Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor. Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec tempor.',
	},
];

function SectionMessen() {
	return (
		<div className='messen'>
			<div className='messen-title'>
				<SectionTitle>{`'24`}</SectionTitle>
				<SectionHeader>
					Lorem est ante orci arcu vitae feugiat. Enim ultrices at nibh donec
					tempor.
				</SectionHeader>
			</div>
			<MessenAccordion />
		</div>
	);
}

export default SectionMessen;

function MessenAccordion() {
	return (
		<div className='messen-main'>
			<div className='messen-main--title'>
				<h3>Messen</h3>
			</div>
			<div className='accordion'>
				{messen.map((item, i) => (
					<AccordionItem item={item} key={item.title} index={i}></AccordionItem>
				))}
			</div>
		</div>
	);
}

function AccordionItem({ item, index }) {
	const { currOpen, setCurrOpen } = useData();

	const isOpen = currOpen === index;

	function handleOpen() {
		setCurrOpen(isOpen ? null : index);
	}

	return (
		<div className='accordion-item' onClick={handleOpen}>
			<div className='accordion-item--top'>
				<p>{item.title}</p>
				<img src={item.image} alt={item.title}></img>
				<div
					className={`accordion-item--button ${
						isOpen ? 'accordionActive' : ''
					}`}></div>
			</div>
			<AnimatePresence mode='wait'>
				{isOpen ? (
					<motion.div
						className='accordion-item--bottom'
						initial={{
							height: 0,
							opacity: 0,
						}}
						animate={{
							height: 'auto',
							opacity: 1,
						}}
						exit={{
							height: 0,
							opacity: 0,
						}}
						transition={{ duration: 0.8 }}>
						<p className='paragraph'>{item.description}</p>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
}
