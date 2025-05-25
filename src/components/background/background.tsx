import "./styles.css";

const Background = () => {
  return (
    <div className="absolute top-0 right-0 -z-30 h-full w-full overflow-hidden">
      <div className="h-full w-full home_background_image" />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, #16273b 20%, #000 100%)",
          zIndex: -10,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  );
};

export default Background;
