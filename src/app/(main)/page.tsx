import { staatliches_font, righteous_font } from "@/utils/fonts";

export default function Home() {
  return (
    <div id="home" className="min-h-screen w-full flex flex-col justify-center items-center overflow-y-auto">
      <main className="flex flex-col justify-center items-center">
        <div
          className={`w-full text-8xl font-bold text-gray-300 ${staatliches_font.className}`}
        >
          CHINMAYA V
        </div>
        <div
          className={`w-full text-4xl font-bold text-gray-300 ${righteous_font.className}`}
        >
          A Fullstack Developer.
        </div>
      </main>
    </div>
  );
}
