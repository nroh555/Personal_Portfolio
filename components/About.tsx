"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { TfiHandPointDown } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";

const skills = [
  {
    image: "/tech/html.png",
    skill: "HTML",
  },
  {
    image: "/tech/css.png",
    skill: "CSS",
  },
  {
    image: "/tech/javascript.png",
    skill: "Javascript",
  },
  {
    image: "/tech/git.png",
    skill: "Git",
  },
  {
    image: "/tech/figma.png",
    skill: "Figma",
  },
  {
    image: "/tech/reactjs.png",
    skill: "ReactJS",
  },
  {
    image: "/tech/tailwind.png",
    skill: "TailwindCSS",
  },
  {
    image: "/tech/typescript.png",
    skill: "Typescript",
  },
  {
    image: "/tech/java.png",
    skill: "Java",
  },
  {
    image: "/tech/python.png",
    skill: "Python",
  },
  {
    image: "/tech/firebase.png",
    skill: "Firebase",
  },
  {
    image: "/tech/aws.png",
    skill: "AWS",
  },
  {
    image: "/tech/gcp.png",
    skill: "GCP",
  },
];

const About = () => {
  return (
    <section className="sm:pt-20" id="about">
      <div className="my-10 pb-10 lg:pt-10 lg:pb-10">
        <h1 className="text-center font-bold text-4xl">
          About Me!
          <hr className="w-10 h-1 mx-auto my-4 bg-blue-700 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-5 items-stretch jusitfy-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Summary
            </h1>
            <p>
              Hi, my name is Naren and I am an aspiring software engineer based
              in Auckland, New Zealand. Currently, I am pursuing a Bachelor of
              Engineering (Honours) in Software Engineering at University of
              Auckland.
            </p>
            <br />
            <p>
              I enjoy working in within the realm of web development and machine
              learning and am really looking for opportunities to gain practical
              experience in full-stack development and learn the entire software
              development life cycle.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that often times keep
              me busy apart from engineering. From playing sports, working out
              to hiking while relishing the beautiful New Zealand nature.
            </p>
            <br />
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold mb-6 ml-4 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, index) => {
                return (
                  <Image
                    className="px-2 py-1 mr-1 mt-1"
                    src={item.image}
                    alt={item.skill}
                    width={85}
                    height={85}
                    key={index}
                  />
                );
              })}
               <BsGithub size={75} className="ml-2 px-2 py-1 mr-1 mt-1"/>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-1">
            <Link
               to = "projects"
               activeClass="active"
               smooth = {true}
               duration={400}
            >
                <TfiHandPointDown className = "animate-bounce" size = {50}/>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
