import SpotifyLogo from "../assets/spotify-icon.png";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[50vh]">
      <div className="flex justify-center items-end w-[100px] min-w-[100px] h-[50px] mx-0 my-auto z-10 relative left-0 right-0 animate-pulse">
        <img
          src={SpotifyLogo}
          alt="Spotify Icon"
          className="w-[80px] h-[80px]"
        />
      </div>
    </div>
  );
};

export default Loader;
