import Footer from '../components/Footer';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

const listDataOne = [
	{ desc: 'The transfer of data to third parties and third parties', id: 1 },
	{
		desc: 'Integration of third-party services and content (e.g. Google Fonts or YouTube videos)',
		id: 2,
	},
	{ desc: 'Use of session cookies', id: 3 },
	{ desc: 'Use of data processing anti-spam plugins', id: 4 },
	{ desc: 'Use of the Google Remarketing tag', id: 5 },
	{ desc: 'Use of Google+ or Twitter buttons', id: 6 },
];
const listDataTwo = [
	{ desc: 'Website visited', id: 1 },
	{
		desc: 'Time at the time of access',
		id: 2,
	},
	{ desc: 'Amount of data sent in bytes', id: 3 },
	{ desc: 'Source/reference from which you came to the page', id: 4 },
	{ desc: 'Browser used', id: 5 },
	{ desc: 'Operating system used', id: 6 },
	{ desc: 'IP address used', id: 7 },
];

function Rodo() {
	return (
		<main>
			<Section>
				<SectionHeader>
					<h3 style={{ paddingTop: '4em' }}>Data Protection</h3>
				</SectionHeader>
			</Section>
			<Section>
				<RodoHeader>Data Access</RodoHeader>
				<RodoParagraph>
					<p className='paragraph'>
						We, the website operator or site provider, collect data about access
						to the website based on our legitimate interest (see Art. 6 Para. 1
						lit. f. GDPR) and store this as “server log files” on the website
						server. The following data is logged like this:
					</p>
					<RodoList listData={listDataTwo} />
					<p className='paragraph'>
						The server log files are stored for a maximum of 7 days and then
						deleted. The data is stored for security reasons, e.g. B. to be able
						to clarify cases of abuse. If data has to be kept for evidentiary
						reasons, it is excluded from deletion until the incident has been
						finally clarified.
					</p>
				</RodoParagraph>
			</Section>
			<Section>
				<RodoHeader>Basics</RodoHeader>
				<RodoParagraph>
					<p className='paragraph'>
						This data protection declaration is intended to inform the users of
						this website about the type, scope and purpose of the collection and
						use of personal data by the website operator RED CORRIDOR Gallery.
					</p>
					<p className='paragraph'>
						The website operator takes your data protection very seriously and
						treats your personal data confidentially and in accordance with
						legal regulations. Since changes to this data protection declaration
						may be made due to new technologies and the constant development of
						this website, we recommend that you read the data protection
						declaration again at regular intervals.
					</p>
					<p className='paragraph'>
						Definitions of the terms used (e.g. “personal data” or “processing”)
						can be found in Art. 4 GDPR.
					</p>
				</RodoParagraph>
			</Section>
			<Section>
				<RodoHeader>Right to object</RodoHeader>
				<RodoParagraph>
					<p className='paragraph'>
						Users of this website can exercise their right to object and object
						to the processing of their personal data at any time.
					</p>
					<p className='paragraph'>
						If you would like correction, blocking, deletion or information
						about the personal data stored about you or have questions regarding
						the collection, processing or use of your personal data or would
						like to revoke your consent, please contact the following email
						address : gallery@redcorridor.com
					</p>
					<p className='paragraph'>
						This includes, for example, information about:
					</p>
				</RodoParagraph>
				<RodoList listData={listDataOne} />
			</Section>
			<Footer />
		</main>
	);
}

export default Rodo;

function RodoHeader({ children }) {
	return (
		<div className='rodoHeader'>
			<h3>{children}</h3>
		</div>
	);
}

function RodoList({ listData }) {
	return (
		<div className='rodoList'>
			<ul>
				{listData.map((item) => (
					<RodoListItem item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

function RodoListItem({ item }) {
	return <li>{item.desc}</li>;
}

function RodoParagraph({ children }) {
	return <div className='rodoParagraph'>{children}</div>;
}
