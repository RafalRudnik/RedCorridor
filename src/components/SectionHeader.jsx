import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

function SectionHeader({ children }) {
	const text = useRef(null);

	useEffect(function () {
		const headerTxt = text.current;
		const texts = new SplitType(headerTxt, { types: 'words' });

		gsap.from(texts.words, {
			scrollTrigger: {
				trigger: headerTxt,
				start: 'top 90%',
				end: 'top 60%',
				scrub: true,
				markers: false,
			},
			x: -10,
			y: 40,
			opacity: 0,
			stagger: 0.2,
		});
	}, []);

	return (
		<div className='sectionHeader'>
			<div ref={text}>
				<h3>{children}</h3>
			</div>
		</div>
	);
}

export default SectionHeader;
