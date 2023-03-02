import React from "react";
import { Footer } from "../components";
import { SpotifyIcon } from "../components/Icons";

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://spotify-profile-stats.herokuapp.com/login";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-primary_text mt-10">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-2">
          <SpotifyIcon width="60" height="50" color="secondary" />
          <p className="font-montserrat text-4xl font-bold my-10">
            Spotify Profile
          </p>
        </div>
        <a
          href={LOGIN_URI}
          className="inline-block bg-secondary rounded-full font-semibold text-lg py-4 px-10 font-montserrat hover:filter hover:brightness-110 ease-in-out duration-200 text-center tracking-widest"
        >
          LOG IN TO SPOTIFY
        </a>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
