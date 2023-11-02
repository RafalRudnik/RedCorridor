import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './sass/index.scss';
import { DataProvider } from './contexts/DataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DataProvider>
			<App />
		</DataProvider>
	</React.StrictMode>
);
