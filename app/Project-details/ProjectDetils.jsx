"use client";
export const dynamic = "force-dynamic";
import React from "react";
import { useSearchParams } from "next/navigation";
import { items } from "./../Data";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

export default function ProjectDetails() {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("project");

  // Safe check if projectName is null
  const project = projectName
    ? items.find(item => item.projectName === projectName)
    : null;

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-center text-lg font-medium mt-20">
          Project not found
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col">
      <div className="container flex-1 py-12">
        <h2 className="section-title mb-12 text-center">{project.title}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Image and Links */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={project.image || "/placeholder.jpg"}
                alt={project.title || "Project image"}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority // optional: preloads image for better UX
              />
            </div>

            <div className="flex justify-center gap-12 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                  aria-label="GitHub Repository"
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
                  aria-label="Live Demo"
                >
                  <FaLink size={50} />
                </a>
              )}
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold">{project.heading || project.title}</h3>
            <p>{project.desc || "No description available."}</p>

            {project.techstack?.length > 0 && (
              <>
                <h5 className="text-gray-500 mt-4">Tech Stack:</h5>
                <div className="flex flex-wrap gap-2">
                  {project.techstack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            {project.time && (
              <p className="text-sm text-gray-500 mt-4">
                Created on: {new Date(project.time).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-12 bg-black/80 text-green-600 py-6 text-center backdrop-blur-md">
        <p className="text-sm">
          © {new Date().getFullYear()} Syed Owais — All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
