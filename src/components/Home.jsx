import React from "react";
import myImage from "../assets/my-image.jpeg";
import { Button } from "@heroui/react";


function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:ml-20 min-h-screen px-6 md:px-16 gap-15  transition-colors duration-300">
      {/* Text Section */}
      <div className="max-w-xl space-y-4 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
          Al Jihad
        </h1>
        <p className="text-gray-400 leading-relaxed text-lg">
          I am a passionate and results-driven Software Engineer specializing in
          full-stack web development using the MERN stack (MongoDB, Express.js,
          React, and Node.js). With hands-on experience in building dynamic,
          responsive, and high-performance web applications, I focus on
          delivering scalable solutions and clean, maintainable code. As a React
          developer, I have a strong understanding of component-based
          architecture, state management (Redux, Context API), and modern
          front-end practices. My goal is to create impactful digital
          experiences that solve real-world problems and contribute to
          meaningful projects.
        </p>
        <div className="flex gap-5 mt-4 justify-center md:justify-start">
          <Button color="primary">Book a Meeting</Button>
          <Button color="primary">Watch my cv</Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative group">
        <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
        <img
          src={myImage}
          alt="Profile"
          className="relative w-[450px] h-[450px] object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Home;
