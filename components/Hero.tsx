"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import {TfiHandPointDown} from "react-icons/tfi"
import{MdWavingHand} from "react-icons/md"
import Typed from "react-typed"

const Hero = () => {
  return (
    <section className = "pt-1" id="home">
      <div className="my-20 py-20 flex flex-col text-center items-center justify-center">
        <div>
          <Image
            className="rounded-s-3xl rounded-e-3xl"
            src={"/photo.jpg"}
            alt="profile photo"
            width={300}
            height={300}
          />
        </div>
        <div>
          <Typed 
             className="font-semibold lg:text-[55px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2"
             strings={["Hey there, I am Naren Rohan!"]}
             typeSpeed={40}
            />
          <p className= "font-medium lg:text-[20px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I am a penultimate year <span className = "text-[#006AFA]">software engineering student </span> at the University of Auckland. <span><MdWavingHand className = "text-[#006AFA] inline-block" size = {30}></MdWavingHand></span>
          </p>
        </div>
        <div className="flex flex-row justify-center mt-10">
            <Link
               to = "about"
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

export default Hero;
