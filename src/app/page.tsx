import { staatliches_font } from '@/utils/fonts'

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col bg-amber-300">
      <nav>Navbar</nav>

      <main>
        <div className={`${staatliches_font.className} text-6xl italic font-bold`}>Chinmaya V</div>
      </main>
    </div>
  )
}
