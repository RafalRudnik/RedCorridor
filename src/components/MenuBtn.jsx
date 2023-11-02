import { useData } from '../contexts/DataContext';

function MenuBtn() {
	const { menuOpen, handleMenuOpen } = useData();

	return (
		<div className='menuBtn' onClick={handleMenuOpen}>
			<p>{menuOpen ? 'Close' : 'Menu'}</p>
			<div className={`burgerBtn ${menuOpen ? 'burgerActive' : ''}`}></div>
		</div>
	);
}

export default MenuBtn;
