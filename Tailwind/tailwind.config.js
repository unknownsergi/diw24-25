/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "#0B0C10",
				"dark-gray": "#1F2833",
				"light-gray": "#C5C6C7",
				"light-blue": "#66FCF1",
				"light-green": "#45A29E",
				"light-red": "#FF2E63",
			},
		},
	},
	plugins: [],
};
