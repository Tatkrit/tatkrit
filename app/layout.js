import '../public/assets/css/animate.min.css'

import '../public/assets/css/tailwind-built.css'

import { Poppins, Montserrat } from 'next/font/google'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--poppins",
	display: 'swap',
})

const montserrat = Montserrat({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--montserrat",
	display: 'swap',
})


export const metadata = {
	title: 'Tatkrit',
	description: 'Brining code to life.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${montserrat.variable}`}>{children}</body>
		</html>
	)
}
