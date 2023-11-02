import { motion } from 'framer-motion';

function SectionTitle({ children }) {
	return (
		<motion.div
			className='sectionTitle'
			initial={{ scaleX: 0, opacity: 0 }}
			whileInView={{ scaleX: 1, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}>
			<h2>{children}</h2>
		</motion.div>
	);
}

export default SectionTitle;
