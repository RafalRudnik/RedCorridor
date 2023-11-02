import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='header'>
			
				<HeaderTxt />
				<HeaderDesc />
				<HeaderLink />
			
		</header>
	);
}

export default Header;

function HeaderTxt() {
	const headerTxt = useRef(null);

	useEffect(function () {
		const tl = gsap.timeline();

		tl.to(headerTxt.current, {
			opacity: 1,
			scale: 1.2,
			duration: 2,
		}).to(headerTxt.current, { scale: 1, duration: 2 });
	}, []);

	useEffect(function () {
		const texts = new SplitType(headerTxt.current, { types: 'words' });
		gsap.from(texts.words, {
			opacity: 0,
			y: 140,
			stagger: 0.4,
		});
	}, []);

	return (
		<div className='header-txt' ref={headerTxt}>
			<h1>
				<span>RED</span> CORRIDOR
			</h1>
			<h2>
				GALLERY<sup> TM</sup>
			</h2>
		</div>
	);
}

function HeaderDesc() {
	const headerDesc = useRef(null);

	useEffect(function () {
		const description = headerDesc.current;

		gsap.fromTo(
			description.children,
			{
				opacity: 0,
				y: '+=30',
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.1,
				delay: 3.7,
				ease: 'easeInOut',
			}
		);
	}, []);

	return (
		<div className='header-desc' ref={headerDesc}>
			<p>We create mordern art.</p>
			<p>We change the world around us</p>
			<p>Minimalism, beauty in a simple form</p>
		</div>
	);
}

function HeaderLink() {
	return (
		<div className='header-link'>
			<Link to='/contact' className='header-link--link'>
				Make an appointment and visit us
			</Link>
			<p>(Scroll)</p>
		</div>
	);
}
