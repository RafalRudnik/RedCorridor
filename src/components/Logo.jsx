import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { useData } from '../contexts/DataContext';

function Logo() {
	const { handleCloseMenuByLogo } = useData();

	return (
		<div className='logo' onClick={handleCloseMenuByLogo}>
			<Link to='/' className='logo--link'>
				<span>red corridor </span>gallery
			</Link>
			<ScrollToTop />
		</div>
	);
}

export default Logo;
