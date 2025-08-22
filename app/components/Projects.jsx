
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { items } from '../Data';

export default function Projects() {
  
  return (
    <>
    <div className='bg-gradient-to-r from-slate-900 to-blue-950'>
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
             {items.map((project, index) => (
            <div key={index} className="project-card">
                <div className="project-image">
                    <img src={project.image} alt="" />
                     <div className="absolute bottom-0 w-full bg-gradient-to-br from-black/60 via-black/40 to-transparent  border-t border-white/10 p-6">
                <h3 className="text-2xl font-bold text-center">
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent drop-shadow-md">
                    {project.title}
                  </span>
                </h3>
                 <p className="text-sm flex justify-center text-gray-300">A featured project showcase</p>
                   
              </div>
                </div>
                <div className="project-content">
                   
                   
                    <div className="project-links flex justify-center">
                      <Link 
                     href={`/Project-details?project=${project.projectName}`} 
                             className="cta-button">
                          View Project
                          </Link>

                    </div>
                </div>
            </div>
             ))}
             


        </div>
      </div>
    </section>
    </div>
    </>
  )
}
