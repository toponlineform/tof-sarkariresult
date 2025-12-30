/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Aapke brand colors yahan define kar sakte hain (Optional)
				// Isse aap 'bg-brand-red' ya 'text-brand-yellow' use kar payenge
				'brand-red': '#b91c1c', 
				'brand-yellow': '#facc15',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Agar koi custom font ho
			}
		},
	},
	plugins: [],
}
