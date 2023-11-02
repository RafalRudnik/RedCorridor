import Footer from './Footer';
import SectionTitle from './SectionTitle';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const conTitle = [
	{ title: "Let's stay in touch" },
	{ title: 'gallery@redcorridor.com' },
];

const branch = [
	{
		name: 'RED CORRIDOR Gallery',
		open: 'Open: by appointment / bei Vereinbarung',
		address: '36093 Künzell Germany | Diorolfstraße 4',
		phone: '+49 661 20619957 | +49 173 3232346',
	},
	{
		name: 'RED CORRIDOR Studio',
		open: 'Open: by appointment / bei Vereinbarung',
		address: "07200 Felanitx Spain | Carrer d'en Soler 29",
		phone: '+49 661 20619957 | +49 173 3232346',
	},
];

function SectionContact() {
	function handleGoHome(e) {
		e.preventDefault();
		gsap.to(window, { duration: 1, scrollTo: { y: '.home', offsetY: 100 } });
	}

	return (
		<div className='contactSection'>
			<div className='contactSection-title'>
				{conTitle.map((title) => (
					<SectionTitle title={title} key={title.title}>
						{title.title}
					</SectionTitle>
				))}
			</div>
			<SectionContactBranch />
			<Footer>
				<a href='.home' onClick={handleGoHome}>
					go up <i className='ti ti-arrow-narrow-up'></i>
				</a>
			</Footer>
		</div>
	);
}

export default SectionContact;

function SectionContactBranch() {
	return (
		<div className='contactSection-main'>
			{branch.map((branch) => (
				<SectionContactItem branch={branch} key={branch.name} />
			))}
		</div>
	);
}

function SectionContactItem({ branch }) {
	return (
		<div className='contactSection-branch'>
			<p className='paragraph'>{branch.name}</p>
			<p className='paragraph'>{branch.open}</p>
			<p className='paragraph'>{branch.address}</p>
			<p className='paragraph'>{branch.phone}</p>
		</div>
	);
}
