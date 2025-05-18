import { staatliches_font, righteous_font } from '@/utils/fonts'

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center h-[20000px]">
        <div className={`w-full text-8xl font-bold text-gray-300 ${staatliches_font.className}`}>
          CHINMAYA V
        </div>
        <div className={`w-full text-4xl font-bold text-gray-300 ${righteous_font.className}`}>
          A Fullstack Developer.
        </div>
      </main>
    </div>
  )
}
