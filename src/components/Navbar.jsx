import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import MenuBtn from './MenuBtn';
import Menu from './Menu';
import ScrollToTop from './ScrollToTop.jsx';

function Navbar() {
	return (
		<>
			<nav className='nav'>
				<Logo />
				<MenuBtn />
			</nav>
			<Menu />
			<div className='container'>
				<ScrollToTop />
				<Outlet />
			</div>
		</>
	);
}

export default Navbar;
