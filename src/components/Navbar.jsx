import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import MenuBtn from './MenuBtn';
import Menu from './Menu';
import DarkModeBtn from './DarkModeBtn.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function Navbar() {
	return (
		<>
			<nav className='nav'>
				<Logo />
				<MenuBtn />
				<DarkModeBtn />
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
