/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					cyan: "hsl(179, 62%, 43%)",
					brightYellow: "hsl(71, 73%, 54%)",
				},
				neutral: {
					lightGray: "hsl(0, 0%, 98%)",
					grayishBlue: "hsl(217, 19%, 38%)",
				},
			},
			fontFamily: {
				karla: ["Karla", "sans-serif"],
			},
		},
	},
	plugins: [],
};
