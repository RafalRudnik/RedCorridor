//npm install react-responsive-masonry
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import SectionTitle from './SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';

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

const slideVariants = {
	hiddenRight: {
		x: '100%',
		opacity: 0,
	},
	hiddenLeft: {
		x: '-100%',
		opacity: 0,
	},
	visible: {
		x: '0',
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 0.5,
		},
	},
};

function Gallery({ galleryImgs }) {
	const [imgOpen, setImgOpen] = useState(false);
	const [step, setStep] = useState(0);
	const [currOpen, setCurrOpen] = useState([{}]);
	const [direction, setDirection] = useState('left');
	const allImages = galleryImgs.length - 1;

	const fadeIn = {
		initial: {
			opacity: 0,
			y: 10,
		},
		animate: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.09 * index,
			},
		}),
	};

	function handleOpen(index) {
		setImgOpen(true);
		setCurrOpen(galleryImgs[index]);
		setStep(index);
		console.log(index);
		console.log(step);
	}

	function handleNext() {
		setDirection('right');
		if (step < allImages) {
			setStep((step) => step + 1);
			setCurrOpen(galleryImgs[step]);
		} else {
			setStep(0);
			setCurrOpen(galleryImgs[step]);
		}
		console.log(step);
	}

	function handlePrevious() {
		setDirection('left');
		if (step > 0) {
			setStep((step) => step - 1);
			setCurrOpen(galleryImgs[step]);
		} else {
			setStep(allImages);
			setCurrOpen(galleryImgs[step]);
		}
		console.log(step);
	}

	function handleClose() {
		setCurrOpen([{}]);
		setImgOpen(false);
	}

	const items = galleryImgs.map((item, index) => (
		<motion.div
			className='gallery-item'
			key={index}
			style={{
				height: 'fitContent',
				margin: '10px',
				borderRadius: '8px',
			}}
			variants={fadeIn}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			custom={index}>
			<img src={item.img} alt='' onClick={() => handleOpen(index)}></img>
			<p className='paragraph'>{item.desc}</p>
		</motion.div>
	));

	return (
		<div className='gallery'>
			<SectionTitle>Gallery</SectionTitle>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}>
				<Masonry>{items}</Masonry>
			</ResponsiveMasonry>
			<AnimatePresence mode='wait'>
				{imgOpen && (
					<motion.div
						className='gallery-img'
						initial={{ y: '-100%' }}
						animate={{ y: '0%' }}
						exit={{ y: '100%' }}
						transition={{ duration: 0.8 }}>
						<AnimatePresence mode='wait'>
							<motion.div
								className='gallery-img--main'
								variants={slideVariants}
								initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
								animate='visible'
								exit='exit'
								key={currOpen.img}>
								<img src={currOpen.img} alt=''></img>
								<p className='paragraph'>{currOpen.desc}</p>
							</motion.div>
						</AnimatePresence>

						<button
							onClick={handlePrevious}
							className='gallery-btn gallery-btn-prev'>
							<i className='ti ti-arrow-narrow-left'></i>
						</button>
						<button
							onClick={handleNext}
							className='gallery-btn gallery-btn-next'>
							<i className='ti ti-arrow-narrow-right'></i>
						</button>
						<button onClick={handleClose} className='gallery-btn gallery-btn-x'>
							<i className='ti ti-x'></i>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default Gallery;
