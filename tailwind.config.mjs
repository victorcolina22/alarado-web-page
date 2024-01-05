/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				floating: 'floating 5s linear infinite'
			},
			keyframes: {
				floating: {
					'0%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(20px)' },
					'50%': { transform: 'translateY(0)' },
					'70%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0)' },
				}
			}
		},
	},
	plugins: [],
}
