import SectionTitle from './SectionTitle';

function Footer({ children }) {
	return (
		<div className='footer'>
			<SectionTitle>Red Corridor</SectionTitle>
			<p>{children}</p>
			<a
				href='https://bnc-web.com/'
				target='_blank'
				rel='noreferrer'
				className='footer-bnc'>
				{new Date().getFullYear()} <span>&copy;</span> BNC Rafał Rudnik
			</a>
		</div>
	);
}

export default Footer;
