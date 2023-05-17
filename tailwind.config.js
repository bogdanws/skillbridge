/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			width: {
				'screen': '100dvw',
			},
			height: {
				'screen': '100dvh',
			},
			colors: {
				primary: '#0D8C89',
				secondary: '#003542',
			},
		},
	},
	plugins: [],
}
