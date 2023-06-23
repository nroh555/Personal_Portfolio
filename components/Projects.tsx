"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Typed from "react-typed"

const projects = [
  {
    name: "Taitamariki Potentia",
    description:
      "Project manager and developer of the web application with the aim of easing students wanting to step foot into the tech industry. This project was created using NextJS, Typescript and Firebase.",
    image: "/projects/taitamariki.png",
    github: "https://github.com/nroh555/taitam-portal",
  },
  {
    name: "ASPA V2",
    description:
      "Full-stack developer in an agile team of 10 to develop the event registration web application for Auckland University Pool Association (ASPA) using MERN.",
    image: "/projects/aspa.png",
    github: "https://github.com/nroh555/aspa-portal-v2",
  },
  {
    name: "Quick Draw",
    description:
      "A game to improve children's speed drawing skills. JavaFx and CSS was used to build the functionality and the UI while PyTorch was used to implement a ML model that predicts the users drawing.",
    image: "/projects/quick-draw.png",
    github: "https://github.com/nroh555/Quick-Draw-App",
  },
  {
    name: "This Website",
    description:
      "The website that your are looking at right now. This website was created using NextJS, Typescript and Tailwind CSS.",
    image: "/projects/portfolio.png",
    github: "https://github.com/nroh555/Personal_Portfolio",
  },
];

const Projects = () => {
  return (
    <section className="sm: pt-20" id="projects">
      <div className="text-center my-10 pb-10 lg:pt-10 lg:pb-10">
      <Typed
           className="font-bold text-4xl"
           strings = {["Projects"]}
           typeSpeed={40}
           backSpeed={60}
           loop
        />
        <hr className="w-10 h-1 mx-auto my-4 bg-blue-700 border-0 rounded"></hr>
        <div className="flex flex-col space-y-5">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:space-x-12">
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
                    <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                    <p className="text-xl leading-7 mb-8 text-neutral-700 dark:text-neutral-100">
                      {project.description}
                    </p>
                    <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="float-right hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
