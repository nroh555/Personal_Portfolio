"use client";
import React from "react";
import { useState, useRef } from "react";
import Typed from "react-typed";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Naren",
          from_email: form.email,
          to_email: "naren.rohan@gmail.com",
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Oops.Something went wrong!");
        }
      );
  };

  return (
    <section className="sm: pt-20" id="contact">
      <div className="my-10 pb-10 lg:pt-10 lg:pb-10">
        <Typed
          className="flex items-center justify-center font-bold text-4xl"
          strings={["Contact"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <hr className="w-10 h-1 mx-auto my-4 bg-[#006AFA] border-0 rounded"></hr>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-7"
        >
          <label className="flex flex-col">
            <span className="text-bold font-medium mb-5 dark:text-white">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-slate-100 py-4 px-6 shadow-sm shadow-[#050816] placeholder:text-slate-900 rounded-lg outlined-none border-2 border-white font-medium dark:bg-[#151030] dark:placeholder:text-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-bold font-medium mb-4 dark:text-white">
              Your email
            </span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-slate-100 py-4 px-6 shadow-sm shadow-[#050816] placeholder:text-slate-900 rounded-lg outlined-none border-2 border-white font-medium dark:bg-[#151030] dark:placeholder:text-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-bold font-medium mb-4 dark:text-white">
              Your message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What is your message?"
              className="bg-slate-100 py-4 px-6 shadow-sm shadow-[#050816] placeholder:text-slate-900 rounded-lg outlined-none border-2 border-white font-medium dark:bg-[#151030] dark:placeholder:text-white"
            />
          </label>
          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="mt-5 bg-slate-100 py-3 px-10 text-center outline-none border-2 border-white w-fit text-slate-900 font-semibold shadow-sm shadow-[#050816] rounded-xl hover:bg-slate-400 dark:bg-[#151030] dark:text-white"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
