"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  title: string;
  page: string;
}

const NAV_TITLES: Array<NavItem> = [
  {
    title: "About",
    page: "about",
  },
  {
    title: "Projects",
    page: "projects",
  },
  {
    title: "Experience",
    page: "experience",
  },
  {
    title: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navBar, setNavBar] = useState(false); //State responsible for mobile or desktop view

  return (
    <header className="w-full mx-auto sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between lg:items-center lg:flex">
        <div>
          <div className="flex items-center justify-between">
            <Link to="home" onClick = {() => {setActive("")}}>
              <div className="sm:py-6 mt-2 ml-1 sm:block">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={50}
                  height={50}
                  className="mb-3 inline-block"
                />
                <h1 className="inline-block ps-5 text-3xl text-[#006AFA] font-bold">
                  Naren Rohan
                </h1>
              </div>
            </Link>
            <div className="lg:hidden">
              <button onClick={() => setNavBar(!navBar)}>
                {navBar ? <IoMdClose size={40} /> : <IoMdMenu size={40} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navBar ? "block" : "hidden"
            }`}
          >
            <div className="lg:flex lg:space-x-10 space-y-8 lg:space-y-0">
              {NAV_TITLES.map((label, index) => {
                return (
                  <Link
                    key={index}
                    to={label.page}
                    className={`${
                      active === label.page ? "font-bold" : "text-neutral-900"}
                      block lg:inline-block text-xl text-neutral-900 hover:text-[#006AFA] dark:text-neutral-100 dark:hover:text-[#4B91F1]`
                    }
                    activeClass="active"
                    onClick={() => {
                        setNavBar(!navBar)
                        setActive(label.page)
                    }}
                  >
                    {label.title}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="border-2 border-solid border-white rounded-lg"
                >
                  <RiSunLine size={30} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="border-2 border-solid border-black rounded-lg"
                >
                  <RiMoonFill size={30} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
