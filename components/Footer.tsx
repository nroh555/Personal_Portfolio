"use client";
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-2xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-1 mx-auto mt-8 bg-[#006AFA] border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-xl dark:text-white">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={40}
            height={40}
            className="mb-3 mr-5 inline-block"
          />
          © 2024 Naren Rohan
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/nroh555" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor pointer dark:text-white"
              size={40}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/naren-rohan/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor pointer dark:text-white"
              size={40}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
