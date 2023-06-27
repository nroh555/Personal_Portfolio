"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Typed from "react-typed";
import Slide from "./Slide";

const projects = [
  {
    name: "Taitamariki Potentia",
    description:
      "Project manager and developer of the web application with the aim of easing 1000+ students wanting to step foot into the tech industry.",
    image: "/projects/taitamariki.png",
    github: "https://github.com/nroh555/taitam-portal",
    skills: ["Next.js", "Typescript", "Firebase"],
  },
  {
    name: "ASPA V2",
    description:
      "Full-stack developer in an agile team of 10 to develop the event registration web application for Auckland University Pool Association (ASPA) which supports payment of events through Stripe.",
    image: "/projects/aspa.png",
    github: "https://github.com/nroh555/aspa-portal-v2",
    skills: ["MERN", "Javascript", "TailwindCSS"],
  },
  {
    name: "Quick Draw",
    description:
      "Game to improve young children's speed drawing abilities through a range of words with varying difficulties and modes in a team of 3 for SOFTENG 206. A ML model was implemented using PyTorch to predict the drawings.",
    image: "/projects/quick-draw.png",
    github: "https://github.com/nroh555/Quick-Draw-App",
    skills: ["Java", "CSS", "PyTorch"],
  },
  {
    name: "This Website",
    description:
      "This website that your are looking at right now. It also responsive too and was made using Next.js while the contact form below utilises EmailJS.",
    image: "/projects/portfolio.png",
    github: "https://github.com/nroh555/Personal_Portfolio",
    skills: ["Next.js", "Typescript", "TailwindCSS"],
  },
];

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <div className="my-10 pb-10 lg:pt-10 lg:pb-10">
        <Typed
          className="flex items-center justify-center font-bold text-4xl"
          strings={["Projects"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <hr className="w-10 h-1 mx-auto my-4 bg-[#006AFA] border-0 rounded"></hr>
        <div className="flex flex-col space-y-5">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <Slide offset="-300px 0px -300px 0px">
                  <div className="flex flex-col animate-slideUpCubicBezier animation-delay-5 md:flex-row md:space-x-12">
                    <div className="mt-12 md:w-1/2">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl"
                      />
                    </div>
                    <div className="mt-12 md:w-1/2">
                      <h1 className="text-2xl font-bold mb-2">
                        {project.name}
                      </h1>
                      <p className="text-xl leading-7 mb-8 text-neutral-700 dark:text-neutral-100">
                        {project.description}
                      </p>
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="mt-4 flex float-right hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <div className="flex flex-wrap flex-row justify-start">
                      <ul className="bg-gray-200 px-4 py-2 mr-2 mt-2 rounded text-gray-600 font-semibold">
                          {project.skills[0]}
                        </ul>
                        <ul className="bg-gray-200 px-4 py-2 mr-2 mt-2 rounded text-gray-600 font-semibold">
                          {project.skills[1]}
                        </ul>
                        <ul className="bg-gray-200 px-4 py-2 mr-2 mt-2 rounded text-gray-600 font-semibold">
                          {project.skills[2]}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
