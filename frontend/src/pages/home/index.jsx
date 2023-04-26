export default function Home() {
	return (
		<>
			<div className="relative bg-gray-800">
				{/* Background Image */}
				<div className="absolute inset-0">
					<img
						className="w-full h-full object-cover opacity-75"
						src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80"
						alt="Background"
					/>
					<div className="absolute inset-0 bg-gray-800" style={{ mixBlendMode: "multiply" }}></div>
				</div>

				{/* Content */}
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="py-24 md:py-32">
						<h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
							Discover the Power of Herbs
						</h1>
						<p className="mt-6 max-w-3xl text-xl text-gray-300">
							Explore our wide range of herbal products, from natural remedies to organic supplements, and unlock the
							full potential of your body and mind.
						</p>
						<div className="mt-10">
							<a
								href="/product-display"
								className="inline-block bg-primary-green py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-green-700"
							>
								Shop Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
