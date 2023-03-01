import React from "react";
import { Footer } from "../components";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-primary_text mt-10">
      <div>
        <p className="font-montserrat text-3xl font-bold mb-10">
          Spotify Dashboard
        </p>
        <a
          href="http://localhost:8888/login"
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
