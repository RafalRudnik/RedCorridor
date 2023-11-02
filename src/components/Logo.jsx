import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Logo() {
	return (
		<div className='logo'>
			<Link to='/' className='logo--link'>
				<span>red corridor </span>gallery
			</Link>
			<ScrollToTop />
		</div>
	);
}

export default Logo;
