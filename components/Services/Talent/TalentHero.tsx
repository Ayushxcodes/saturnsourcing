"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Button } from "@/components/ui/button";
import { Flower } from "@phosphor-icons/react/dist/ssr";

export default function TalentHero() {
	return (
		<section className="relative mt-32 md:mt-44">
			{/* Background Gradients */}
			<div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
				<div
					className="absolute top-[40%] md:top-[35%] left-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full blur-2xl md:blur-3xl -translate-y-1/2 -translate-x-1/3 md:-translate-x-1/4"
					style={{
						background:
							"radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, rgba(147, 197, 253, 0.05) 50%, transparent 100%)",
					}}
				/>
				<div
					className="absolute bottom-[20%] md:bottom-[15%] right-0 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full blur-2xl md:blur-3xl translate-x-1/3 md:translate-x-1/4"
					style={{
						background:
							"radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, rgba(253, 224, 71, 0.05) 50%, transparent 100%)",
					}}
				/>
			</div>

			<Container className="relative z-10">
				<div className="flex flex-col items-center justify-center gap-6 py-10 md:py-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="flex flex-col items-center gap-3"
					>
						
						<h1 className="text-2xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-center bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
							Simplify global hiring with SaturnConsultingGroup’s all-in-one employer of record solution.
						</h1>
						<p className="text-xs md:text-lg text-muted-foreground max-w-xl text-center">
							Reduce compliance risks with access to deep local knowledge and expert support, so you can hire, pay, and reward your distributed team, without setting up entities.
						</p>
						<div className="flex flex-col md:flex-row gap-3 mt-4">
							<Link href="/contact">
								<Button variant="default" size="lg">
									Join us
								</Button>
							</Link>
						</div>
						{/* Hero Image below CTA */}
						<div className="w-full flex justify-center mt-6">
							<img
								src="/about_1.png"
								alt="Global hiring illustration"
								className="w-[320px] md:w-[420px] lg:w-[520px] h-auto drop-shadow-xl border-2 border-primary rounded-xl bg-white"
								loading="lazy"
							/>
						</div>
					</motion.div>

					{/* Animated Bullet Section for Talent Solutions */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
						className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mt-10"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
							{[
								{
									title: "Find skilled talent and fill vacancies in days",
									text: "SaturnConsultingGroup has partnered with a diverse group of talent solutions to help you build a high-performing team",
								},
								{
									title: "Access a vetted list of partners",
									text: "Access job boards, marketplaces, agencies, diversity recruitment solutions, and more.",
								},
								{
									title: "Get personalized support",
									text: "Each company has unique talent needs. We'll match you with a partner that fits your needs.",
								},
								{
									title: "Hire and retain top talent",
									text: "Use SaturnConsultingGroup to compliantly hire, pay, reward, and care for talent around the world.",
								},
							].map((item, idx) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.1 * idx, ease: "easeOut" }}
									className="bg-white/90 border border-gray-100 rounded-xl shadow-md p-5 flex flex-col gap-2 min-h-[120px] hover:shadow-lg transition-shadow duration-300"
								>
									<div className="flex items-center gap-2">
										<Flower size={22} className="text-primary shrink-0" />
										<span className="font-semibold text-base md:text-lg text-gray-900">
											{item.title}
										</span>
									</div>
									<p className="text-sm text-gray-700 leading-relaxed">
										{item.text}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
					>
						{/* Image Left */}
						<div className="flex-1 flex justify-center items-center max-w-lg mb-8 md:mb-0">
							<img
								src="/os.png"
								alt="SaturnConsultingGroup platform illustration"
								className="w-[320px] md:w-[400px] lg:w-[480px] h-auto rounded-xl shadow-lg border-2 border-primary bg-white"
								loading="lazy"
							/>
						</div>
						{/* Info/Features Right */}
						<div className="flex-1 flex flex-col gap-4 max-w-lg">
							<h2 className="text-xl md:text-2xl font-semibold text-primary">
								Navigate global hiring with peace of mind
							</h2>
							<p className="text-sm md:text-base text-muted-foreground">
								SaturnConsultingGroup is more than a platform—it’s your strategic partner for global expansion. Our technology, backed by expert support, allows you to focus on your team while we manage the intricacies of payroll, benefits, and compliance.
							</p>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm md:text-base mt-6">
								<li className="flex items-start gap-3">
									<span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary" />
									Remove barriers to global expansion
								</li>
								<li className="flex items-start gap-3">
									<span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary" />
									Eliminate legal and financial risks with built-in compliance
								</li>
								<li className="flex items-start gap-3">
									<span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary" />
									Access local knowledge and expert support everywhere you hire
								</li>
								<li className="flex items-start gap-3">
									<span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary" />
									Scale your HR processes with ease
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
						className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
					>
						{/* Info Left */}
						<div className="flex-1 flex flex-col gap-4 max-w-lg">
							<h2 className="text-xl md:text-2xl font-semibold text-primary">
								Simplify hiring, payroll compliance & benefits for talent anywhere
							</h2>
							<ul className="grid grid-cols-1 gap-3 text-sm md:text-base mt-2">
								<li>Hire and pay compliantly in 120+ countries</li>
								<li>Streamline global payments in 120+ currencies</li>
								<li>Generate 100% legal-reviewed compliant agreements</li>
								<li>Onboard new talent in as fast as 48 hours</li>
								<li>Offer competitive salary, equity, and benefits</li>
							</ul>
							<Button variant="link" size="sm" className="w-fit mt-2">
								Learn More
							</Button>
						</div>
						{/* Image Right */}
						<div className="flex-1 flex justify-center items-center max-w-lg mb-8 md:mb-0">
							<img
								src="/accountOutsourcing.png"
								alt="Platform features illustration"
								className="w-[320px] md:w-[400px] lg:w-[480px] h-auto rounded-xl shadow-lg border-2 border-primary bg-white"
								loading="lazy"
							/>
						</div>
					</motion.div>
				</div>
			</Container>
				{/* Contractor Section */}
				<section className="relative mt-20">
					<Container className="relative z-10">
						<div className="flex flex-col items-center justify-center gap-6 py-10 md:py-16">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: 'easeOut' }}
								className="flex flex-col items-center gap-3"
							>
								
								<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-gradient text-center">
									Hire, onboard, and pay international contractors with SaturnConsultingGroup.
								</h2>
								<p className="text-xs md:text-lg text-muted-foreground max-w-xl text-center">
									Ensure contract compliance globally while simplifying paperwork and HR processes.
								</p>
								
							</motion.div>

							{/* Platform Features Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
								className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
							>
								{/* Image Left */}
								<div className="flex-1 flex justify-center items-center max-w-lg mb-8 md:mb-0">
									<img
										src="/contact.png"
										alt="Contractor platform illustration"
										className="w-[320px] md:w-[400px] lg:w-[480px] h-auto rounded-xl shadow-lg border-2 border-primary bg-white"
										loading="lazy"
									/>
								</div>
								{/* Info/Features Right */}
								<div className="flex-1 flex flex-col gap-4 max-w-lg">
									
									<p className="text-sm md:text-base text-muted-foreground">
										SaturnConsultingGroup’s easy-to-use self-serve platform puts everything you need at your fingertips, allowing you to hire, pay, and manage contractors across 180+ countries—all in one place.
									</p>
									<ul className="grid grid-cols-1 gap-3 text-sm md:text-base mt-4">
										<li>Hire contractors compliantly across 180+ countries.</li>
										<li>Pay contractors in 120+ currencies with &gt;99% accuracy.</li>
										<li>Generate compliant contracts in minutes.</li>
										<li>Manage invoices, expenses, and contract terms in one dashboard.</li>
										<li>Add misclassification protection up to USD 500,000.</li>
									</ul>
								</div>
							</motion.div>

							{/* Compliant Contracts Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
								className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
							>
								{/* Info Left */}
								<div className="flex-1 flex flex-col gap-4 max-w-lg">
									<h3 className="text-xl md:text-2xl font-semibold text-primary">
										Create compliant contracts with a few clicks
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Hire contractors from all over the world, hassle-free. Generate, edit, and sign country-specific, compliant contracts to hire freelance, pay-as-you-go, and project-based talent.
									</p>
									{/* Removed 'Start hiring for free' button */}
								</div>
								{/* Image Right */}
								<div className="flex-1 flex justify-center items-center max-w-lg mb-8 md:mb-0">
									<img
										src="/outsourcing.png"
										alt="Compliant contracts illustration"
										className="w-[320px] md:w-[400px] lg:w-[480px] h-auto rounded-xl shadow-lg border-2 border-primary bg-white"
										loading="lazy"
									/>
								</div>
							</motion.div>

							{/* Onboarding Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
								className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
							>
								{/* Image Left */}
								<div className="flex-1 flex justify-center items-center max-w-lg mb-8 md:mb-0">
									<img
										src="/pre-entry.png"
										alt="Onboarding contractors illustration"
										className="w-[320px] md:w-[400px] lg:w-[480px] h-auto rounded-xl shadow-lg border-2 border-primary bg-white"
										loading="lazy"
									/>
								</div>
								{/* Info Right */}
								<div className="flex-1 flex flex-col gap-4 max-w-lg">
									<h3 className="text-xl md:text-2xl font-semibold text-primary">
										Onboard contractors in minutes
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										SaturnConsultingGroup streamlines every step. From identity verification to contract signing, our platform eliminates manual tasks, so you can focus on building a powerful team to support your company’s needs.
									</p>
									{/* Removed 'Start hiring for free' button */}
								</div>
							</motion.div>

							{/* Fast Payments Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
								className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
							>
								{/* Info Left */}
								<div className="flex-1 flex flex-col gap-4 max-w-lg">
									<h3 className="text-xl md:text-2xl font-semibold text-primary">
										Fast payments in 120+ currencies
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Whether it's pay-as-you-go (PAYG), or fixed payment schedules, SaturnConsultingGroup simplifies payments across borders. Pay your contractors on-time and in the right currency, no matter the payment structure.
									</p>
									{/* Removed 'Start hiring for free' button */}
								</div>
								{/* Image Right */}
								<div className="flex-1 flex justify-center items-center max-w-lg mb-8 md:mb-0">
									<img
										src="/post-entry.png"
										alt="Fast payments illustration"
										className="w-[320px] md:w-[400px] lg:w-[480px] h-auto rounded-xl shadow-lg border-2 border-primary bg-white"
										loading="lazy"
									/>
								</div>
							</motion.div>

							{/* Streamlined Management Section */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
								className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
							>
								{/* Image Left */}
								<div className="flex-1 flex justify-center items-center max-w-lg mb-8 md:mb-0">
									<img
										src="/about_1.png"
										alt="Streamlined management illustration"
										className="w-[320px] md:w-[400px] lg:w-[480px] h-auto rounded-xl shadow-lg border-2 border-primary bg-white"
										loading="lazy"
									/>
								</div>
								{/* Info Right */}
								<div className="flex-1 flex flex-col gap-4 max-w-lg">
									<h3 className="text-xl md:text-2xl font-semibold text-primary">
										Streamlined contractor management
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Navigating invoices, payments, and other contractor terms across multiple locations is a daunting task. SaturnConsultingGroup provides a single source of truth and saves you from the complex, administrative workload of managing tax forms, payroll expenses, allowances, and reports.
									</p>
									{/* Removed 'Starting hiring for free' button (typo) */}
								</div>
							</motion.div>

							{/* SaturnConsultingGroup Shell Protection Section */}
							
						</div>
					</Container>
				</section>
			{/* SaturnConsultingGroup Talent Network Simple Section */}
			
		</section>
	);
}
