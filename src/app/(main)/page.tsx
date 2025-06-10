import { staatliches_font, righteous_font } from '@/utils/fonts'

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col w-full h-full min-h-screen overflow-hidden justify-start pt-[15%] max-sm:pt-[30%]">
      <div
        className={`w-full text-center text-8xl max-sm:text-6xl font-bold text-gray-300 ${staatliches_font.className}`}>
        CHINMAYA V
      </div>
      <div
        className={`w-full text-center text-4xl max-sm:text-3xl font-bold text-gray-300 ${righteous_font.className}`}>
        A Fullstack Developer.
      </div>
    </section>
  )
}
