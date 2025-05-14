import './styles.css'

const VerticalLine = () => <div className="h-full w-[1px] bg-purple-300 opacity-50" />

const Background = () => {
  return (
    <div className="absolute top-0 right-0 -z-10 h-full w-full home_background_image overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex justify-evenly">
        {[...Array(3)].map((_, i) => (
          <VerticalLine key={i} />
        ))}
        {[...Array(2)].map((_, i) => (
          <div key={i + 3} className="not-lg:hidden">
            <VerticalLine />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[480px] w-[480px] border border-purple-300 rounded-full flex flex-col justify-between items-center">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className={`not-lg:w-full w-96 border-b border-purple-300 ${
                i === 0 ? 'mt-12' : 'mb-12'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  )
}

export default Background
