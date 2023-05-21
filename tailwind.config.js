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
				primary: {
					DEFAULT: "#0D8C89",
					50: "#DEFCFB",
					100: "#B9F8F7",
					200: "#44EEEB",
					300: "#14D2CF",
					400: "#11B6B3",
					500: "#0D8C89",
					600: "#0C7E7C",
					700: "#0A6B6A",
					800: "#085957",
					900: "#064140",
					950: "#042A29"
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/container-queries'),
	],
}
