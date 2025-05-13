import { staatliches_font, righteous_font, worksans_font } from '@/utils/fonts'

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col relative  overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex justify-evenly">
        <div className="h-full w-[1px] bg-gray-200 opacity-50" />
        <div className="h-full w-[1px] bg-gray-200 opacity-50" />
        <div className="h-full w-[1px] bg-gray-200 opacity-50" />
        <div className="h-full w-[1px] bg-gray-200 opacity-50 not-lg:hidden" />
        <div className="h-full w-[1px] bg-gray-200 opacity-50 not-lg:hidden" />
      </div>
      <main className="flex flex-col h-full w-full justify-center items-center">
        <div className="h-[480px] w-[480px] border border-gray-200 rounded-full flex flex-col justify-between items-center">
          <div className="not-lg:w-full w-96 border-b border-gray-200 mt-12" />
          <div className="not-lg:w-full w-fit px-10 text-gray-300 z-10">
            <h4 className={`${righteous_font.className} text-2xl font-bold`}>Hi I am,</h4>
            <h1 className={`${staatliches_font.className} text-8xl not-lg:text-4xl`}>Chinmaya V</h1>
            <p className={`${worksans_font.className} text-2xl font-bold`}>A Full stack Dev</p>
          </div>
          <div className="not-lg:w-full w-96 border-b border-gray-200 mb-12" />
        </div>
      </main>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  )
}
