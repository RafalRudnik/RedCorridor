import { motion, AnimatePresence } from 'framer-motion';

const contactData = [
	{
		image: './img/LeszekSm.jpeg',
		name: 'Leszek Skurski',
		phone: '+491733232346',
		email: 'gallery@redcorridor.com',
	},
	{
		image: './img/JoannaSm.jpeg',
		name: 'Joanna Skurska',
		phone: '+49xxxxxxxx',
		email: 'gallery@redcorridor.com',
	},
];

function ContactMain() {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				className='contact-main'
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 1 }}>
				<ContactLeft />
				<ContactRight />
			</motion.div>
		</AnimatePresence>
	);
}

export default ContactMain;

function ContactLeft() {
	return (
		<div className='contact-main-left'>
			<motion.h2
				initial={{ y: '20%', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 2 }}>
				Feel free to contact
			</motion.h2>
			<div className='contact-main-left--img'>
				<img src='./img/majorka.jpeg' alt='Spain branch'></img>
			</div>
		</div>
	);
}

function ContactRight() {
	return (
		<div className='contact-main-right'>
			<ul>
				{contactData.map((item) => (
					<ContactItem item={item} key={item.name} />
				))}
			</ul>
		</div>
	);
}

function ContactItem({ item }) {
	return (
		<li>
			<div className='contact-main-right--top'>
				<img src={item.image} alt={item.name}></img>
				<p>
					{item.name} {item.phone}
					<p>{item.email}</p>
				</p>
			</div>
		</li>
	);
}
