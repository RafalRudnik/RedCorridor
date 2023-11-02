import Artist from '../components/Artist';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const js = {
	name: 'Joanna Skurska',
	biography:
		'Joanna Skurska designs and shapes her textile objects from wiry threads or fibers: The Polish-born artist interweaves, networks and connects copper wire or telephone cables to create delicate and transparent garments. She creates garments without content, feminine and figure-hugging, bodiless and yet very physical. They are works in the field of tension between free and applied art, between art objects and wearable art, which, in a figurative sense, deal with protection and decoration, but also with being trapped and restricted or with enveloping and revealing.',
	image: '/img/JoannaHero.jpeg',
	exhibitions: [
		'2019 - Ernst-Ludvig-Kirchner Verein, Fehmarn, [Germany]',
		'2019 - Heimat Galerie, Saint Remy, [France]',
		'2006 -2019 RED CORRIDOR Gallery, Fulda, Germany',
		'2017 - Galerie Alex Schlesinger, Zürich , Switzerland',
		'2016 - Gräfe Art Konzept, Berlin',
		'2012 - 8 mal alte Brüder Kirche, Kassel, Germany',
		'2011 - Colourblind Gallery,Köln, Germany',
		"2008 - „RED CORRIDOR going Mallorca, Sailer Galeria d'Art, Mallorca Santaniy",
		'2007 - Tapestry Triennial of the Coast, National Museum, Gdansk, Poland',
		'2007 - „Filare il Tempo“, miniartextilcomo, Como, Italien',
		'2007 - „Objekte“, Kunststation Kleinsassen, Germany',
		'2007 - Vonderau Museum Fulda, „Parallel Visions“, Germany',
		'2007 - Galerie Prinsenhoek, Holland',
		'2006 - „Entrevues“, Besiers, Frankreich',
		'2006 - Cat Hill Gallery, London, England',
		'2006 - Madness & Arts, Munster, Germany',
		'2006 - Lubljana Festival Collection Kunststation Kleinsassen, Germany',
		'2005 - Parallel Visions, Wilmington, USA, Kalmar, Sweden, Watford, England, Osogbo, Nigeria, Olevano, Italien',
		'2005 - 8th International Artistic Community, Lubljana Castle, Slowenia',
		"2005 - „Trame d'Autore“, Textilmuseum St.Gallen, Schweiz",
		'2004 - Tapestry Triennial of the Coast, National Museum, Gdansk, Poland',
		'2004 - International Baltic Miniaturtextil Triennale, Poland',
		'2004 - The 9 National Exhibition of the Polish Textile, Poland',
		"2004 - lV Fieber Art Biennale - Trame d'Autore, Italien",
		'2004 - „Around the Body“ Chieri, Italien',
		'2003 - Junger Kunstkreis Hünfeld, Germany',
		'2003 - „Transparent und griffig“ GEDOK, Köln, Germany',
		'2003 - Textilmuseum „Die Scheune“, Nettetal, Germany',
		'2002 - Übergänge, Frankfurt a Main, Germany',
		'2002 - Verwaschene Spuren, Textilmuseum Crimmitschau, Germany',
		'2002 - Rhön Salon, Förderpreis 2002, Kunststation Kleinsassen, Germany',
		'2002 - Galerie Prinsenhoek, Holland',
	],
};

const jg = [
	{
		desc: 'Acryl On Wood 2022',
		img: './img/jg/jg1.jpeg',
	},
	{
		desc: 'Acryl On Wood 2022',
		img: './img/jg/jg2.jpeg',
	},
	{
		desc: 'copper | 2021',
		img: './img/jg/jg3.jpeg',
	},
	{
		desc: '80 x 60 cm | Acryl on Canvas | 2021',
		img: './img/jg/jg4.jpeg',
	},
	{
		desc: '80 x 60 cm | Acryl on Canvas | 2021',
		img: './img/jg/jg5.jpeg',
	},
	{
		desc: '80 x 60 cm | Acryl on Canvas | 2021',
		img: './img/jg/jg6.jpeg',
	},
	{
		desc: '40 X 50 cm | Oil & Resin on Panel | 2017',
		img: './img/jg/jg7.jpeg',
	},
	{
		desc: '40 X 30 cm | Acryl & Resin on Panel | 2019',
		img: './img/jg/jg8.jpeg',
	},
	{
		desc: 'Inka',
		img: './img/jg/jg9.jpeg',
	},
	{
		desc: 'Flyer',
		img: './img/jg/jg10.jpeg',
	},
	{
		desc: 'Linda',
		img: './img/jg/jg11.jpeg',
	},
	{
		desc: 'Acryl On Wood 2022',
		img: './img/jg/jg1.jpeg',
	},
	{
		desc: 'Acryl On Wood 2022',
		img: './img/jg/jg2.jpeg',
	},
	{
		desc: 'copper | 2021',
		img: './img/jg/jg3.jpeg',
	},
	{
		desc: '80 x 60 cm | Acryl on Canvas | 2021',
		img: './img/jg/jg4.jpeg',
	},
	{
		desc: '80 x 60 cm | Acryl on Canvas | 2021',
		img: './img/jg/jg5.jpeg',
	},
	{
		desc: '80 x 60 cm | Acryl on Canvas | 2021',
		img: './img/jg/jg6.jpeg',
	},
	{
		desc: '40 X 50 cm | Oil & Resin on Panel | 2017',
		img: './img/jg/jg7.jpeg',
	},
	{
		desc: '40 X 30 cm | Acryl & Resin on Panel | 2019',
		img: './img/jg/jg8.jpeg',
	},
	{
		desc: 'Inka',
		img: './img/jg/jg9.jpeg',
	},
	{
		desc: 'Flyer',
		img: './img/jg/jg10.jpeg',
	},
	{
		desc: 'Linda',
		img: './img/jg/jg11.jpeg',
	},
];

function Joanna() {
	return (
		<main className='artist'>
			<Artist artist={js} />
			<Gallery galleryImgs={jg} />
			<Footer />
		</main>
	);
}

export default Joanna;
