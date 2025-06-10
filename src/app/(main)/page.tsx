import StyledLines from '@/components/ui/styled-lines'
import { righteous_font, black_ops_one_font } from '@/utils/fonts'

export default function Home() {
	return (
		<section
			id="home"
			className="flex flex-col w-full h-full min-h-screen overflow-hidden justify-start items-center pt-[10%] max-sm:pt-[30%]"
		>
			<div className={`w-fit text-8xl max-sm:text-6xl font-bold text-gray-300 ${black_ops_one_font.className}`}>
				CHINMAYA V
			</div>
			<StyledLines />
			<div className={`w-fit text-4xl max-sm:text-3xl font-bold text-gray-300 ${righteous_font.className}`}>
				A Fullstack Developer.
			</div>
		</section>
	)
}
