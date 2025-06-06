'use client';

import Image from 'next/image';
import { motion, useAnimate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
	{
		id: 1,
		title: 'Dasar Cloud dan Gen AI di AWS',
		issuer: 'Dicoding Indonesia',
		date: '2021',
		image:
			'/assets/certificate/sertifikat_course_251_4507453_210525110309_page-0001.jpg',
		description: 'Cloud fundamentals and Generative AI on AWS platform',
	},
	{
		id: 2,
		title: 'Programming Logic 101',
		issuer: 'Dicoding Indonesia',
		date: '2024',
		image:
			'/assets/certificate/sertifikat_course_302_4507453_061224135236_page-0001.jpg',
		description: 'Understanding the fundamentals of programming logic',
	},
	{
		id: 3,
		title: 'CCNA Switching, Routing, and Wireless Essentials',
		issuer: 'Cisco Networking Academy',
		date: '2025',
		image: '/assets/certificate/CCNASRWEUpdate20250604-26-ottue7_page-0001.jpg',
		description:
			'Advanced networking concepts including switching, routing, and wireless technologies',
		color: 'from-blue-500 to-cyan-500',
	},
	{
		id: 4,
		title: 'Web Penetration Testing',
		issuer: 'Cyber Academy',
		date: '2024',
		image:
			'/assets/certificate/Certificate-of-Completion-Web-Penetration-Testing_page-0001.jpg',
		description:
			'Comprehensive web application security testing and vulnerability assessment',
		color: 'from-red-500 to-pink-500',
	},
	{
		id: 5,
		title: 'Database Course - Basic Level',
		issuer: 'ITBox',
		date: '2025',
		image:
			'/assets/certificate/ITBox-Certificate_Database-Course-Level-Basic_Untara-Eka-Saputra_page-0001.jpg',
		description:
			'Fundamentals of database design, management, and optimization',
		color: 'from-green-500 to-emerald-500',
	},
	{
		id: 6,
		title: 'Deployment Course - Beginner',
		issuer: 'Dicoding Indonesia',
		date: '2025',
		image:
			'/assets/certificate/Sertifikat Deployment - Beginner - Untara Eka Saputra - 8PksNlJxsk_page-0001.jpg',
		description: 'Modern deployment strategies and DevOps practices',
		color: 'from-purple-500 to-violet-500',
	},
];

function CertificationTicker() {
	const [scope, animate] = useAnimate();
	const [duplicates, setDuplicates] = useState(3); // Number of duplicates needed
	const [cardWidth, setCardWidth] = useState(384); // Width of each card including gap
	const animationRef = useRef<number | null>(null); // To store animation reference for cleanup

	// Setup smooth infinite scroll
	useEffect(() => {
		// Measure the actual width of a card including gap
		const measureCardWidth = () => {
			if (scope.current) {
				const firstCard = scope.current.querySelector("[data-card]");
				if (firstCard) {
					// Get the width including margin/gap
					const cardRect = firstCard.getBoundingClientRect();
					const actualWidth = cardRect.width + 24; // 24px is the space-x-6 value
					setCardWidth(actualWidth);
				}
			}
		};

		// Start the infinite scroll animation
		const startScrollAnimation = () => {
			const totalWidth = cardWidth * certifications.length;
			let isRunning = true; // Flag to track if animation should continue

			// Initial setup - move to starting position instantly
			animate(scope.current, { x: 0 }, { duration: 0 });

			// Start the continuous animation
			const scrollAnimation = async () => {
				if (!isRunning) return; // Exit if component unmounted

				try {
					// Animate smoothly to the left by one set width
					await animate(
						scope.current,
						{ x: -totalWidth },
						{ duration: 20, ease: 'linear' }
					);

					// Jump back to start position instantly (not visible to user)
					await animate(
						scope.current,
						{ x: 0 },
						{ duration: 0 }
					);

					// Continue the animation with requestAnimationFrame for smoother looping
					requestAnimationFrame(scrollAnimation);
				} catch (error) {
					// If animation fails (e.g., component unmounted), stop gracefully
					console.log('Animation stopped');
				}
			};

			// Start the animation using requestAnimationFrame for better performance
			animationRef.current = requestAnimationFrame(scrollAnimation);

			// Return cleanup function
			return () => {
				isRunning = false;
				if (animationRef.current) {
					cancelAnimationFrame(animationRef.current);
				}
			};
		};

		// Run once after layout is stable
		const timer = setTimeout(() => {
			measureCardWidth();
			const cleanup = startScrollAnimation();

			return () => {
				if (cleanup) cleanup();
			};
		}, 500);

		// Cleanup function
		return () => {
			clearTimeout(timer);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [scope, animate, cardWidth]);

	return (
		<div className="relative overflow-hidden py-8">
			<div className="flex">
				<div
					ref={scope}
					className="flex space-x-6"
					style={{ width: 'max-content' }}
				>
					{/* Repeat certifications to ensure smooth looping */}
					{Array.from({ length: duplicates }).map((_, arrayIndex) =>
						certifications.map((cert, index) => (
							<motion.div
								key={`cert-${cert.id}-${arrayIndex}-${index}`}
								className="flex-shrink-0 w-80 md:w-96"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
								data-card={
									arrayIndex === 0 && index === 0 ? 'first' : ''
								}
							>
								<div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
									{/* Certificate Image */}
									<div className="relative h-64 overflow-hidden">
										<Image
											src={cert.image}
											alt={cert.title}
											fill
											className="object-contain bg-white"
											priority={arrayIndex === 0 && index < 2}
											loading={
												arrayIndex === 0 && index < 2
													? 'eager'
													: 'lazy'
											}
											sizes="(max-width: 768px) 320px, 384px"
										/>
									</div>

									{/* Certificate Info */}
									<div className="p-4">
										<div className="flex items-center justify-between mb-2">
											<span className="text-xs font-medium text-gray-500">
												{cert.issuer}
											</span>
											<div className="flex items-center text-gray-400">
												<Calendar className="h-3 w-3 mr-1" />
												<span className="text-xs">{cert.date}</span>
											</div>
										</div>

										<h3 className="text-base font-semibold mb-1 text-gray-900 line-clamp-2">
											{cert.title}
										</h3>

										<Button
											variant="outline"
											size="sm"
											className="text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md text-xs mt-2 px-2 py-1 h-auto border border-gray-200 hover:border-red-200"
											onClick={() => window.open(cert.image, '_blank')}
										>
											<ExternalLink className="h-3 w-3 mr-1.5" />
											View Certificate
										</Button>
									</div>
								</div>
							</motion.div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default function CertificationsSection() {
	const [headerVisible, setHeaderVisible] = useState(false);
	const [statsVisible, setStatsVisible] = useState(false);
	const [tickerVisible, setTickerVisible] = useState(false);
	const [buttonVisible, setButtonVisible] = useState(false);
	
	const headerRef = useRef<HTMLDivElement>(null);
	const statsRef = useRef<HTMLDivElement>(null);
	const tickerRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const headerObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setHeaderVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const statsObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setStatsVisible(true), 200);
				}
			},
			{ threshold: 0.1 }
		);

		const tickerObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setTickerVisible(true), 400);
				}
			},
			{ threshold: 0.1 }
		);

		const buttonObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setButtonVisible(true), 600);
				}
			},
			{ threshold: 0.1 }
		);

		if (headerRef.current) headerObserver.observe(headerRef.current);
		if (statsRef.current) statsObserver.observe(statsRef.current);
		if (tickerRef.current) tickerObserver.observe(tickerRef.current);
		if (buttonRef.current) buttonObserver.observe(buttonRef.current);

		return () => {
			headerObserver.disconnect();
			statsObserver.disconnect();
			tickerObserver.disconnect();
			buttonObserver.disconnect();
		};
	}, []);

	return (
		<section
			id="certifications"
			className="py-16 scroll-mt-16 bg-white relative"
		>
			{/* Simple divider */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-10">
					<div 
						ref={headerRef}
						className={`transition-all duration-700 ease-out ${
							headerVisible 
								? 'opacity-100 translate-y-0' 
								: 'opacity-0 translate-y-8'
						}`}
					>
						<h2 className="text-3xl font-semibold mb-4 text-red-600">
							Certifications
						</h2>
						<p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
							Professional certifications that validate my technical expertise
						</p>
					</div>

					{/* Simple stats */}
					<div 
						ref={statsRef}
						className={`flex items-center justify-center space-x-8 mb-6 transition-all duration-700 ease-out ${
							statsVisible 
								? 'opacity-100 translate-y-0' 
								: 'opacity-0 translate-y-8'
						}`}
					>
						<div className="text-center">
							<div className="text-xl font-semibold text-red-600">6+</div>
							<div className="text-xs text-gray-500">Certificates</div>
						</div>
						<div className="w-px h-8 bg-gray-200"></div>
						<div className="text-center">
							<div className="text-xl font-semibold text-red-600">4+</div>
							<div className="text-xs text-gray-500">Specializations</div>
						</div>
						<div className="w-px h-8 bg-gray-200"></div>
						<div className="text-center">
							<div className="text-xl font-semibold text-red-600">2025</div>
							<div className="text-xs text-gray-500">Latest</div>
						</div>
					</div>
				</div>

				{/* Certificate Ticker */}
				<div 
					ref={tickerRef}
					className={`mb-10 transition-all duration-700 ease-out ${
						tickerVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-8'
					}`}
				>
					<CertificationTicker />
				</div>

				{/* LinkedIn Call-to-Action */}
				<div 
					ref={buttonRef}
					className={`text-center transition-all duration-700 ease-out ${
						buttonVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-8'
					}`}
				>
					<Button
						variant="outline"
						className="bg-white text-gray-600 hover:text-red-600 hover:bg-red-100 border border-gray-200 px-8 py-2.5 rounded-full font-medium flex items-center justify-center mx-auto"
						onClick={() =>
							window.open('https://www.linkedin.com/in/untara-eka-saputra', '_blank')
						}
					>
						<Linkedin className="h-4 w-4 mr-2 text-red-600" />
						View More on LinkedIn
					</Button>
				</div>
			</div>
		</section>
	);
}
