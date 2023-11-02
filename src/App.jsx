import { useEffect } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Homepage from './pages/Homepage';
import Leszek from './pages/Leszek';
import Joanna from './pages/Joanna';
import Rodo from './pages/Rodo';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
	useEffect(function () {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<>
	// 			<Route path='/' element={<Homepage />} />
	// 			<Route path='/leszek' element={<Leszek />} />
	// 			<Route path='/joanna' element={<Joanna />} />
	// 			<Route path='/contact' element={<Contact />} />
	// 			<Route path='/rodo' element={<Rodo />} />
	// 			<Route path='*' element={<PageNotFound />} />
	// 		</>
	// 	)
	// );
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Navbar />}>
				<Route index element={<Homepage />} />
				<Route path='/leszek' element={<Leszek />} />
				<Route path='/joanna' element={<Joanna />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/rodo' element={<Rodo />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		)
	);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
