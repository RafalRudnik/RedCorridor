import Artist from '../components/Artist';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const ls = {
	name: 'Leszek Skurski',
	biography:
		'Born in 1973 in Gdansk, Poland, the painter Leszek Skurski studied there from 1992 to 1997 at the Academy of Fine Arts. Already at the age of 22, Skurski, who now lives and works in Fulda, was awarded the Polish State Prize for Painting. Since then the artist has had more than 50 mainly international exhibitions in renowned institutions and galleries. His works of an artistic oeuvre, which to date comprises more than 1000 works, can be found today in numerous renowned international collections.',
	image: '/img/LeszekHero.jpeg',
	exhibitions: [
		'2023 - Gallery Barbara von Stechow',
		'2023 - Theo Art, Seoul, South Korea',
		'2022 - Gallery DOOIN, Seoul, Südkorea',
		'2022 - Heimat Galerie, Saint Remy, [France]',
		'2022 - Red Corridor Gallery, Fulda',
		'2021 - Galerie Crone, Wien',
		'2021 - Gallery Barbara von Stechow, Mallorca',
		'2021 - Red Corridor Gallery, Fulda',
		'2019  -Ernst-Ludvig-Kirchner Verein, Fehmarn, [Germany]',
		'2019 - Heimat Galerie, Saint Remy, [France]',
		'2006 - 2019 - Red Corridor Gallery, Fulda',
		'2018, 2014 - Gallery DOOIN, Seoul, Südkorea',
		'2018 - Kunsttage Winningen, Germany',
		'2017 - Galerie Alex Schlesinger, Zürich, Switzerland',
		'2017 - Stadtmuseum im Spital, Crailsheim, Germany',
		'2017, 2015 - Gallery JJ, Seoul, South Korea',
		'2017 - Galerie Von & Von, Nürnberg, Germany',
		'2016 - MÉMORIDENTITÉ, Maison des Arts et Loisirs, Laon, Frankreich',
		'2016 - Galerie Von Stechow, Frankfurt',
		'2016 - Galerie Brötzinger Art, Pforzheim',
		'2016 - Gräfe Art Konzept, Berlin',
		'2014 - Centre de la Vieille Charité, Merseille, Frankreich',
		'2014, 2013 - Alexandra Chiari, Merseille, Frankreich',
		'2013 - "Einzelnachweise", Vonderau Museum, Fulda',
		'2012, 2011 - Galerie Image au Carré, Brüssel, Belgien',
		'2011 - colourblind Gallery, Köln',
		'2010 - „Der Lieblingstag“, colourblind Gallery, Köln',
		'2009 - Soho Gallery LLC, LA, USA',
		'2009 - Lurie-Kavachnina Gallery, Miami, USA',
		'2006 - Scarlet Gallery, Greyton, RSA',
		'2000 - Dorp Street Gallery, Stellenbosch, RSA',
		'1997 - Galerie Akademie der Schönen Künste, Danzig',
	],
};

const lg = [
	{
		desc: 'Disco 2021 Oil on canvas 40x 50',
		img: './img/lg/lg1.jpeg',
	},
	{
		desc: 'Havana 2022 Oil on canvas 46x 54',
		img: './img/lg/lg2.jpeg',
	},
	{
		desc: 'Stan 2021 Acryl on canvas 40x 50',
		img: './img/lg/lg3.jpeg',
	},
	{
		desc: 'Walking wounded 2019 Acryl on canvas 70x 90',
		img: './img/lg/lg4.jpeg',
	},
	{
		desc: 'Save Yourself 2020 Acryl on canvas 90x 130',
		img: './img/lg/lg5.jpeg',
	},
	{
		desc: 'Augenzeugen 2020 Oil on canvas 120x 80',
		img: './img/lg/lg6.jpeg',
	},
	{
		desc: 'Frist level 2022 Acryl on canvas 40x 50',
		img: './img/lg/lg7.jpeg',
	},
	{
		desc: 'Better place 2020 Oil on canvas 60x 80',
		img: './img/lg/lg8.jpeg',
	},
	{
		desc: 'Grand Hotel 2022 Oil on canvas 140x 120',
		img: './img/lg/lg9.jpeg',
	},
	{
		desc: 'Disco 2021 Oil on canvas 40x 50',
		img: './img/lg/lg1.jpeg',
	},
	{
		desc: 'Havana 2022 Oil on canvas 46x 54',
		img: './img/lg/lg2.jpeg',
	},
	{
		desc: 'Stan 2021 Acryl on canvas 40x 50',
		img: './img/lg/lg3.jpeg',
	},
	{
		desc: 'Walking wounded 2019 Acryl on canvas 70x 90',
		img: './img/lg/lg4.jpeg',
	},
	{
		desc: 'Save Yourself 2020 Acryl on canvas 90x 130',
		img: './img/lg/lg5.jpeg',
	},
	{
		desc: 'Augenzeugen 2020 Oil on canvas 120x 80',
		img: './img/lg/lg6.jpeg',
	},
	{
		desc: 'Frist level 2022 Acryl on canvas 40x 50',
		img: './img/lg/lg7.jpeg',
	},
	{
		desc: 'Better place 2020 Oil on canvas 60x 80',
		img: './img/lg/lg8.jpeg',
	},
	{
		desc: 'Grand Hotel 2022 Oil on canvas 140x 120',
		img: './img/lg/lg9.jpeg',
	},
];

function Leszek() {
	return (
		<main className='artist'>
			<Artist artist={ls} />
			<Gallery galleryImgs={lg} />
			<Footer />
		</main>
	);
}

export default Leszek;
