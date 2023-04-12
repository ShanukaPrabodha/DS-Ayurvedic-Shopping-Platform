/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-green": "#458500",
				"primary-gray": "1E1E1E",
			},
			fontFamily: {
				ubuntu: ["Ubuntu", "sans-serif"],
			},
		},
	},
	plugins: [],
};
