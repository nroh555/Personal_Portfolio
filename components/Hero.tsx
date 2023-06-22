"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import {TfiHandPointDown} from "react-icons/tfi"
import{MdWavingHand} from "react-icons/md"

const Hero = () => {
  return (
    <section id="home">
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
          <h1 className="font-semibold lg:text-[55px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[98px] mt-2">
            Hey there, I am <span className="text-[#006AFA]">Naren! <MdWavingHand className = "inline-block" size = {30}></MdWavingHand></span>
          </h1>
          <p className= "font-medium lg:text-[20px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I am a penultimate year <span className = "text-[#006AFA]">software engineering student </span> at the University of Auckland.
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
