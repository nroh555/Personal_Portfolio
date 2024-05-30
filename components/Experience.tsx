"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

type ExperienceProps = {
  experience: Experience;
};

type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "EROAD",
    icon: "/projects/code.png",
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Feb 2024",
    points: [
      "Created a Jobs Support Tool that allowed tier 2,3 and product managers to investigate the full route lifecycle and troubleshoot issues for Sysco (our largest customer), decreasing investigation time by 100%",
      "Worked on full-stack web development using React, Typescript and Tailwind CSS for the front-end as well as .NET and MongoDB for the REST backend following OpenAPI specification. This included unit and integration testing using React Testing Library and xUnit",
      "Leveraged GitHub Actions for CI/CD deployment of containerised application using Docker into Azure Kubernetes Cluster",
    ],
  },
  {
    title: "Machine Learning Engineering Intern",
    company_name: "Spark Business Group",
    icon: "/projects/code.png",
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Worked on Automated Road Inspection (ARI) for Fulton Hogan by assisting in the development of a machine-learning model that would determine cracks on roads using AWS Sagemaker, PyTorch and OpenCV.",
      "Implemented semantic segmentation algorithm which predicted the mask model at 50% accuracy",
      "Assisted in the development and migration of a Landing Zone Test codebase to AWS SDK Go V2.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Taitamariki Potentia",
    icon: "/projects/manager.png",
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Oct 2023",
    points: [
      "Leading an agile scrum team of 9 developers to build a web application to promote Taitamariki Potentia using Next.js and Firebase to 1000+ users.",
      "The application has a content management system (CMS) using Notion that allows non-technical users to effortlessly change content on the website.",
      "Working cross-functionally to define product roadmap,  requirements and deliverables with stakeholders, developers and designers.",
    ],
  },
];

const ExperienceCard = ({ experience }: ExperienceProps) => (
  <>
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "#006AFA", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #006AFA" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            height={100}
            width={100}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
        {experience.date}
        <p className="text-2xl font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">
          {experience.points[0]}
        </li>
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">
          {experience.points[1]}
        </li>
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">
          {experience.points[2]}
        </li>
      </ul>
    </VerticalTimelineElement>
  </>
);

const Experience = () => {
  return (
    <section className="pt-20" id="experience">
      <div className="my-10 pb-10 lg:pt-10 lg:pb-10">
        <ReactTyped
          className="flex items-center justify-center font-bold text-4xl"
          strings={["Experience"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <hr className="w-10 h-1 mx-auto my-4 bg-[#006AFA] border-0 rounded"></hr>
      </div>
      <div className="flex flex-col">
        <VerticalTimeline lineColor="#006AFA" layout={"2-columns"}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
