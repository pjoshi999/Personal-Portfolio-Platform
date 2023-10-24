import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <nav className="h-24 bg-[#4383E8] shadow-xl shadow-black">
        <ul className="flex text-white items-center h-full justify-evenly">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact Me</Link>
          </li>
          <li>
            <Link to="/">Certifications</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Skills</Link>
          </li>
          <li>
            <Link to="/">Experience</Link>
          </li>
          <li>
            <Link to="/">Achievements</Link>
          </li>
          <li>
            <img src="" alt="Theme" />
          </li>
        </ul>
      </nav>

      <main className="bg-[#21262E] h-[calc(100vh-96px)] w-screen flex flex-col items-center justify-center">
        <div className="flex justify-center py-5">
          <h1 className="text-white font-medium text-2xl">My Projects</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center w-[60%] gap-9">
          <div className="relative w-64 h-66 shadow-3xl shadow-[#4383E8] rounded-3xl">
            <img
              src="/img/project-bg.jpeg"
              alt=""
              className="w-64 h-60 rounded-3xl"
            />
            <div className="absolute top-0 text-white flex flex-col items-center justify-evenly w-full h-full">
              <p className="text-3xl font-semibold">Project Title</p>
              <p className="text-xl">Project Description</p>
            </div>
          </div>
          <div className="relative w-64 h-66 shadow-3xl shadow-[#4383E8] rounded-3xl">
            <img
              src="/img/project-bg.jpeg"
              alt=""
              className="w-64 h-60 rounded-3xl"
            />
            <div className="absolute top-0 text-white flex flex-col items-center justify-evenly w-full h-full">
              <p className="text-3xl font-semibold">Project Title</p>
              <p className="text-xl">Project Description</p>
            </div>
          </div>
          <div className="relative w-64 h-66 shadow-3xl shadow-[#4383E8] rounded-3xl">
            <img
              src="/img/project-bg.jpeg"
              alt=""
              className="w-64 h-60 rounded-3xl"
            />
            <div className="absolute top-0 text-white flex flex-col items-center justify-evenly w-full h-full">
              <p className="text-3xl font-semibold">Project Title</p>
              <p className="text-xl">Project Description</p>
            </div>
          </div>
          <div className="relative w-64 h-66 shadow-3xl shadow-[#4383E8] rounded-3xl">
            <img
              src="/img/project-bg.jpeg"
              alt=""
              className="w-64 h-60 rounded-3xl"
            />
            <div className="absolute top-0 text-white flex flex-col items-center justify-evenly w-full h-full">
              <p className="text-3xl font-semibold">Project Title</p>
              <p className="text-xl">Project Description</p>
            </div>
          </div>
          <div className="relative w-64 h-66 shadow-3xl shadow-[#4383E8] rounded-3xl">
            <img
              src="/img/project-bg.jpeg"
              alt=""
              className="w-64 h-60 rounded-3xl"
            />
            <div className="absolute top-0 text-white flex flex-col items-center justify-evenly w-full h-full">
              <p className="text-3xl font-semibold">Project Title</p>
              <p className="text-xl">Project Description</p>
            </div>
          </div>
          <div className="relative w-64 h-66 shadow-3xl shadow-[#4383E8] rounded-3xl">
            <img
              src="/img/project-bg.jpeg"
              alt=""
              className="w-64 h-60 rounded-3xl"
            />
            <div className="absolute top-0 text-white flex flex-col items-center justify-evenly w-full h-full">
              <p className="text-3xl font-semibold">Project Title</p>
              <p className="text-xl">Project Description</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
