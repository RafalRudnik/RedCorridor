import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function SectionAbout() {
	return (
		<>
			<div className='about-title'>
				<SectionTitle>
					<i className='ti ti-arrow-narrow-right'></i>
				</SectionTitle>
				<SectionHeader>
					Lorem est ante orci arcu vitae feugiat. Nunc mauris urna quis in donec
					odio nunc. Enim ultrices at nibh donec tempor.
				</SectionHeader>
			</div>
			<AboutDesc />
		</>
	);
}

export default SectionAbout;

function AboutDesc() {
	const paragraphAnim = useRef(null);

	useEffect(function () {
		const paragraph = paragraphAnim.current;

		gsap.fromTo(
			paragraph.children,
			{
				y: '+=100',
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.4,
				ease: 'easeInOut',
				scrollTrigger: {
					trigger: paragraph,
					start: 'top 85%',
					// end: 'top 60%',
					// scrub: true,
				},
			}
		);
	}, []);

	return (
		<div className='about-desc'>
			<div className='about-desc--title'>
				<p>About us</p>
			</div>
			<div className='about-desc--txt' ref={paragraphAnim}>
				<p>
					<strong>This is what we do</strong>
				</p>
				<p className='paragraph'>
					Lorem ipsum dolor sit amet consectetur. Mi magna nunc varius risus.
					Maecenas ut hac suspendisse nam ornare at velit cras. Volutpat cursus
					mauris risus urna imperdiet netus facilisis. Et justo in platea leo
					quam mi. Dictum enim molestie arcu dui quam. Cursus ut nulla molestie
					est facilisi. Molestie nunc iaculis gravida est gravida. Diam augue
					viverra rhoncus quam praesent. Dui sed et vitae commodo.
				</p>
				<p className='paragraph' style={{ paddingBottom: '4em' }}>
					Lorem ipsum dolor sit amet consectetur. Mi magna nunc varius risus.
					Maecenas ut hac suspendisse nam ornare at velit cras. Volutpat cursus
					mauris risus urna imperdiet netus facilisis. Et justo in platea leo
					quam mi. Dictum enim molestie arcu dui quam.
				</p>
				<Link to='/leszek' className='about-desc--link'>
					Check what we do
				</Link>
			</div>
		</div>
	);
}
