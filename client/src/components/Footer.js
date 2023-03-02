import { Github } from "./Icons";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mx-auto max-w-[900px] mt-auto pt-20 mb-10 flex-col font-montserrat text-xs text-primary_text/30 gap-2">
      <p>Built by Jacob Lager</p>
      <p>Built with React, Tailwind & Express</p>
      <div className="mt-2">
        <a
          href="https://github.com/Lagge111/spotify-dashboard"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Footer;
