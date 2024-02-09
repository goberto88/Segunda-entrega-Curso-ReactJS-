import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 w-full mt-auto">
      <div className="bg-gradient-to-b from-yellow-300 to-neutral-50 mx-0 px-2 md:px-4 w-full p-2 md:p-4 py-2 md:py-6">
        <hr className="my-2 md:my-4 border-zinc-700" />

        <div className="sm:flex sm:items-center sm:justify-between mx-2 md:mx-5">
          <span className="text-base md:text-lg text-zinc-700 sm:text-center">
            Roberto Rivas A. © 2023
          </span>

          <div className="flex mt-2 sm:justify-center sm:mt-0 space-x-6 md:space-x-10">
            <a
              href="https://www.linkedin.com/in/roberto-rivas-arteaga-a4a76b108/"
              className="text-lg md:text-3xl text-zinc-700 hover:text-gray-900 transition hover:-translate-y-1 hover:scale-110"
            >
              <i className="bi bi-linkedin"></i>
              <span className="sr-only">Linkedin</span>
            </a>

            <a
              href="https://www.instagram.com/goberto66/"
              className="text-lg md:text-3xl text-zinc-700 ms-1 md:ms-2 hover:text-gray-900 transition hover:-translate-y-1 hover:scale-110"
            >
              <i className="bi bi-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>

            <a
              href="https://github.com/goberto88"
              className="text-lg md:text-3xl text-zinc-700 ms-1 md:ms-2 hover:text-gray-900 transition hover:-translate-y-1 hover:scale-110"
            >
              <i className="bi bi-github"></i>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
