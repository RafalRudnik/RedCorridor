import { useState } from 'react';
import { createContext, useContext } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [mainAnim, setMainAnim] = useState(true);
	const [currOpen, setCurrOpen] = useState(null);

	function handleMenuOpen() {
		setMenuOpen((menuOpen) => !menuOpen);
	}

	return (
		<DataContext.Provider
			value={{
				menuOpen,
				handleMenuOpen,
				mainAnim,
				setMainAnim,
				currOpen,
				setCurrOpen,
			}}>
			{children}
		</DataContext.Provider>
	);
}

function useData() {
	const context = useContext(DataContext);
	if (context === undefined)
		throw new Error('useData was used outside DataProvider');
	return context;
}

export { DataProvider, useData };
