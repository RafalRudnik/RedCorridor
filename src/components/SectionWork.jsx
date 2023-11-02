import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';

const artists = [
	{
		name: 'Leszek Skurski',
		bgcImg: './img/Leszek.png',
		description: 'Lorem ipsum dolor sit amet consectetur. Mi magna nunc varius risus Maecenas ut hac suspendisse nam ornare at velit cras. Volutpat cursus',
		descsImg: './img/leszek-desc-img.png',
		link: '/leszek',
	},
	{
		name: 'Joanna Skurska',
		bgcImg: './img/Joanna.png',
		description: 'Lorem ipsum dolor sit amet consectetur. Mi magna nunc varius risus Maecenas ut hac suspendisse nam ornare at velit cras. Volutpat cursus',
		descsImg: './img/joanna-desc-img.png',
		link: '/joanna',
	},
];

function SectionWork() {
	return (
		<div className='work'>
			<SectionTitle>Work</SectionTitle>
			<WorkImg />
		</div>
	);
}

export default SectionWork;

function WorkImg() {
	return (
		<div className='work-main'>
			{artists.map((artist) => (
				<WorkArtist artist={artist} key={artist.name} />
			))}
		</div>
	);
}

function WorkArtist({ artist }) {
	return (
		<div className='work-artist'>
			<div className='work-artist-img'>
				<img src={artist.bgcImg} alt={artist.name}></img>
				<div className='work-artist-img--desc'>
					<img src={artist.descsImg} alt={artist.name}></img>
					<p>{artist.description}</p>
				</div>
			</div>
			<div className='work-artist--link'>
				<Link to={artist.link}>{artist.name}</Link>
			</div>
		</div>
	);
}
