const Footer = () => {
	return (
		<>
			<footer className="body-font text-gray-600">
				<div className="border-t border-gray-200">
					<div className="container mx-auto flex flex-wrap items-center px-5 py-8">
						<div className="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start">
							<div className="relative mr-2 w-40 sm:mr-4 sm:w-64">
								<label htmlFor="footer-field" className="text-sm leading-7 text-gray-600">
									Placeholder
								</label>
								<input
									type="text"
									id="footer-field"
									name="footer-field"
									className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
								/>
							</div>
							<button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-white hover:bg-indigo-600 focus:outline-none">
								Button
							</button>
							<p className="mt-2 text-center text-sm text-gray-500 sm:text-left md:ml-6 md:mt-0">
								Bitters chicharrones fanny pack
								<br className="hidden lg:block" />
								waistcoat green juice
							</p>
						</div>
						<span className="mt-6 inline-flex w-full justify-center md:w-auto md:justify-start lg:ml-auto lg:mt-0">
							<a className="text-gray-500">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-500">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-500">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a className="ml-3 text-gray-500">
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="0"
									className="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path
										stroke="none"
										d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
									></path>
									<circle cx="4" cy="4" r="2" stroke="none"></circle>
								</svg>
							</a>
						</span>
					</div>
				</div>
				<div className="bg-gray-100">
					<div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
						<p className="text-center text-sm text-gray-500 sm:text-left">
							© 2023 iHurb —
							<a
								href="https://binarymatter.vercel.app/"
								className="ml-1 text-gray-600"
								target="_blank"
								rel="noopener noreferrer"
							>
								BinaryMatter
							</a>
						</p>
						<span className="mt-2 w-full text-center text-sm text-gray-500 sm:ml-auto sm:mt-0 sm:w-auto sm:text-left">
							Enamel pin tousled raclette tacos irony
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
