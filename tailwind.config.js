/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors : {
				'darkest-brown' : '#424242',
				'dark-brown' : '#545454'
			},
			backgroundColor: {
				'primary' : '#CFCFCF',
				'dark-brown' : '#545454',
				'green' : '#159522'
			},
			fontFamily : { 
				'inter' : ['Inter', 'sans-serif']
			},
			borderColor : {
				'dark-brown' : '#545454'
			}
		},
	},
	plugins: [],
}
