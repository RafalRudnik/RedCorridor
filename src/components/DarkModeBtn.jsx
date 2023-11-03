import { useData } from '../contexts/DataContext';

function DarkModeBtn() {
	const { handleDarkMode } = useData();

	return <div className='nav--darkmode' onClick={handleDarkMode}></div>;
}

export default DarkModeBtn;
