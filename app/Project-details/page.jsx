"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { items } from "./../Data";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Hero() {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("project");
  const project = items.find((item) => item.projectName === projectName);

  // Optional: handle if project not found
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section id="Project-details" className="min-h-screen flex flex-col">
      <div className="container flex-1">
        <h2 className="section-title">{project.title}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
         
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={project.image || "/placeholder.jpg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              
            </div>

            {/* Links */}
            <div className="flex gap-20 justify-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <FaGithub size={50} />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <FaLink size={50} />
                </a>
              )}
            </div>
          </div>

          {/* Project Description */}
          <div className="about-text">
            <h3 className="text-2xl font-semibold mb-4">{project.heading}</h3>
            <p className="mb-10">{project.desc}</p>
            <h5 className="  text-gray-500">tech stack:</h5>
             <div className="project-tech">
              
            {project.techstack.map((feature,index)=>(
                  <div key={index}>

                        <span className="tech-tag">{feature}</span>
                        
                 </div>
            ))}
              </div>
            <p className="text-sm text-gray-500 mb-10">
              Created on: {new Date(project.time).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <footer className="mt-12 bg-black/80 text-green-600 py-6 text-center backdrop-blur-md">
        <p className="text-sm">
          © {new Date().getFullYear()} Syed Owais — All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
