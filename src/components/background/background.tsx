import { SparklesCore } from '../ui/sparkles'
import './styles.css'

const Background = () => {
  return (
    <div className="absolute top-0 right-0 -z-30 h-full w-full overflow-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at center, #1e1b4b 20%, #000 100%)',
          zIndex: -10,
        }}
      />
      <div className="absolute h-full w-full z-10 home_background_image" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  )
}

export default Background
