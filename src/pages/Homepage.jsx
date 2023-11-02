import Header from '../components/Header';
import Section from '../components/Section';
import SectionAbout from '../components/SectionAbout';
import SectionContact from '../components/SectionContact';
import SectionMessen from '../components/SectionMessen';
import SectionWork from '../components/SectionWork';
import { useData } from '../contexts/DataContext';
import { useEffect } from 'react';

function Homepage() {
	const { mainAnim, setMainAnim } = useData();

	useEffect(
		function () {
			setTimeout(() => {
				setMainAnim(false);
			}, 5000);
		},
		[setMainAnim]
	);

	return (
		<main className={`home ${mainAnim ? 'blocked' : ''}`}>
			<Header />
			<Section>
				<SectionAbout />
			</Section>
			<Section>
				<SectionWork />
			</Section>
			<Section>
				<SectionMessen />
			</Section>
			<Section>
				<SectionContact />
			</Section>
		</main>
	);
}

export default Homepage;
