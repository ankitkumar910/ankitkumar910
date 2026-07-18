import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { personalInfo, navLinks } from "../data/portfolio";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 dark:bg-[#0f0e0c] text-gray-400 py-10 mb-12 sm:mb-0 sm:py-12 px-4 sm:px-6 transition-colors duration-300">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col gap-8 mb-8">
					<div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
						<h3 className="stack-sans-headline-500 text-white text-lg sm:text-xl mb-3">
							{personalInfo.name}
						</h3>
						<p className="ubuntu-regular text-sm leading-6 max-w-xs mx-auto sm:mx-0">
							{personalInfo.tagline}
						</p>
					</div>

					<div className="flex  justify-between flex-col  flex-wrap gap-8">
						<div className="text-center sm:text-left  lg:col-span-1">
							<h4 className="ubuntu-medium text-white  text-sm mb-4">Connect</h4>
							<div className="flex gap-3 justify-center sm:justify-start">
								<a
									href={personalInfo.social.github}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2. text-white transition-colors"
									aria-label="GitHub">
									<GitHub fontSize="large" />
								</a>
								<a
									href={personalInfo.social.linkedin}
									target="_blank"
									rel="noopener noreferrer"
										className="p-2. text-white transition-colors"
									aria-label="LinkedIn">
									<LinkedIn fontSize="large" />
								</a>
								<a
									href={`mailto:${personalInfo.email}`}
										className="p-2. text-white transition-colors"
									aria-label="Email">
									<Email fontSize="large" />
								</a>
							</div>
							
						</div>
						<div className="text-center sm:text-left  lg:col-span-1
						
						
						">
							<h4 className="ubuntu-medium text-white text-sm mb-4">
								Quick Links
							</h4>
							<ul className="flex flex-col gap-2 md:flex-wrap">
								{navLinks.map((link) => (
									<li key={link.id}>
										<a
											href={`#${link.id}`}
											className="ubuntu-regular text-sm hover:text-amber-400 transition-colors inline-block py-0.5">
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 dark:border-gray-800/80 pt-6 text-center px-2">
					<p className="ubuntu-regular text-xs leading-5 sm:text-sm">
						© {year} {personalInfo.name}. Built with React & Tailwind CSS.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
