"use client";
import React from "react";
import Typed from "react-typed";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Spark Business Group",
    icon: "/projects/code.png",
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: ["Worked on Automated Road Inspection (ARI) for Fulton Hogan by assisting in the development of a machine-learning model that would determine cracks on roads using AWS Sagemaker, PyTorch and OpenCV.",
             "Implemented semantic segmentation algorithm which predicted the mask model at 50% accuracy",
             "Assisted in the development and migration of a Landing Zone Test codebase to AWS SDK Go V2."
            ]
  },
  {
    title: "Project Manager",
    company_name: "Taitamariki Potentia",
    icon: "/projects/manager.png",
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Oct 2023",
    points: ["Leading an agile scrum team of 9 developers to build a web application to promote Taitamariki Potentia using Next.js and Firebase to 1000+ users.",
            "The application has a content management system (CMS) using Notion that allows non-technical users to effortlessly change content on the website.",
            "Working cross-functionally to define product roadmap,  requirements and deliverables with stakeholders, developers and designers."]
  },
];

const ExperienceCard = ({ experience }: any) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#006AFA", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #006AFA" }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          height = {100}
          width = {100}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {experience.date}
        <p className = "text-secondary text-[16px] font-semibold" style = {{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">{experience.points[0]}</li>
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">{experience.points[1]}</li>
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">{experience.points[2]}</li>
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section className ="sm: pt-20" id="experience">
      <div className="my-5 pb-10 lg:pt-10 lg:pb-10">
        <Typed
          className="flex items-center justify-center font-bold text-4xl"
          strings={["Experience"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <hr className="w-10 h-1 mx-auto my-4 bg-blue-700 border-0 rounded"></hr>
      </div>
      <div className="flex flex-col">
        <VerticalTimeline
           lineColor ="#006AFA"
           layout = {'2-columns'}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
