import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Projects() {
  return (
    <>
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
            
            <div className="project-card">
                <div className="project-image">
                    <img src="/Projects_img/Donation-project.png" alt="" />
                </div>
                <div className="project-content">
                    <h3>Hope-Foundation</h3>
                    <p>Hope Foundation is a web platform designed to connect donors with underprivileged communities, enabling transparent and efficient support. It simplifies donations, volunteer efforts, and outreach using a user-friendly interface built with React and Node.js.</p>
                    <div className="project-tech">
                        <span className="tech-tag">NextJs</span>
                        <span className="tech-tag">Tailwindcss</span>
                        <span className="tech-tag">Javascript</span>
                        <span className="tech-tag">Html</span>
                    </div>
                    <div className="project-links">
                       
                        <Link href="https://github.com/Syedowais312/Hope-Foundation" className="project-link" target="_blank" rel="noopener noreferrer">
  GitHub
</Link>

                    </div>
                </div>
            </div>
             <div className="project-card">
                <div className="project-image">
                   <img src="/Projects_img/BlindNav_photo.png" alt="" />
                </div>
                <div className="project-content">
                    <h3>Blind Navigation Website</h3>
                    <p>Blind Navigation Assistant – A voice-guided web application designed for the visually impaired. It combines real-time object detection with GPS navigation to provide obstacle alerts and step-by-step audio directions, enabling safe and independent movement.</p>
                    <div className="project-tech">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Javascript</span>
                        <span className="tech-tag">Html</span>
                        <span className="tech-tag">tenserflow</span>
                    </div>
                    <div className="project-links">
                        <a href="#" className="project-link"> Live Demo</a>
                         <a href="" className="project-link"> GitHub</a>
                    </div>
                </div>
            </div>
             <div className="project-card">
                <div className="project-image">
                   <img src="/Projects_img/smat-helmet.png" alt="" />
                </div>
                <div className="project-content">
                    <h3>smart IOT Helmet</h3>
                    <p>Smart Helmet – An intelligent safety helmet equipped with obstacle detection 
                        and voice alerts for construction workers and bikers. It uses real-time sensors
                         and AI to detect potential hazards and instantly notifies the wearer through audio
                          feedback, enhancing safety in dynamic environments.(Esp32 code is not in github for now).</p>
                    <div className="project-tech">
                        <span className="tech-tag">NextJS</span>
                        <span className="tech-tag">Javascript</span>
                        <span className="tech-tag">Html</span>
                        <span className="tech-tag">Css</span>
                         <span className="tech-tag">C++</span>
                    </div>
                    <div className="Project-links">
                        <a href="#" className="project-link"> Live Demo</a>
                         <a href="https://github.com/Syedowais312/Smart_Helmet" className="project-link"> GitHub</a>
                    </div>
                </div>
            </div>
 <div className="project-card">
                <div className="project-image">
                   <img src="/Projects_img/Farmer_game.png" alt="" />
                </div>
                <div className="project-content">
                    <h3>Farmer-Hunter Game</h3>
                    <p>Farmer Escape Adventure – A 3D action-survival game built in Unreal Engine where the main
                         farmer must collect hidden treasures and reach the destination while being chased by enemy 
                         farmers. With dynamic AI pursuit, immersive rural environments, and strategic movement, the 
                         game offers a thrilling farming-themed challenge.(no code).</p>
                    <div className="project-tech">
                        <span className="tech-tag">Unreal Engine</span>
                        <span className="tech-tag">Blueprints</span>
                        
                    </div>
                    <div className="project-links">
                        <a href="#" className="project-link"> Live Demo</a>
                         <a href="https://github.com/Syedowais312/" className="project-link"> GitHub</a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image">
                   <img src="/Projects_img/Textutilies.png" alt="" />
                </div>
                <div className="project-content">
                    <h3>Smart Text Converter | Word Count, Case Tools & Reading Time</h3>
                    <p>Smart Helmet – An intelligent safety helmet equipped with obstacle detection 
                        and voice alerts for construction workers and bikers. It uses real-time sensors
                         and AI to detect potential hazards and instantly notifies the wearer through audio
                          feedback, enhancing safety in dynamic environments.(Esp32 code is not in github for now).</p>
                    <div className="project-tech">
                        <span className="tech-tag">Reactjs</span>
                        <span className="tech-tag">Javascript</span>
                        <span className="tech-tag">Html</span>
                        <span className="tech-tag">Css</span>
                       
                    </div>
                    <div className="project-links">
                        <a href="#" className="project-link"> Live Demo</a>
                         <a href="https://github.com/Syedowais312/Smart_Helmet" className="project-link"> GitHub</a>
                    </div>
                </div>
            </div>
<div className="project-card">
                <div className="project-image">
                   <img src="/Projects_img/News_website.png" alt="" />
                </div>
                <div className="project-content">
                    <h3>TechNewsX – A Dynamic News Aggregator</h3>
                    <p>TechNewsX is a modern React-based web app that delivers 
                        real-time news articles across multiple categories including Technology,
                         Business, Entertainment, Health, Science, and Sports. It fetches live data 
                         from a news API and presents it in a clean, responsive card layout with smooth 
                         navigation and category-wise filtering. Built to enhance reading experience and stay
                          updated with trending headlines.</p>
                    <div className="project-tech">
                        <span className="tech-tag">Reactjs</span>
                        <span className="tech-tag">Javascript</span>
                        <span className="tech-tag">Html</span>
                        <span className="tech-tag">Css</span>
                        
                    </div>
                    <div className="project-links">
                        <a href="#" className="project-link"> Live Demo</a>
                         <a href="https://github.com/Syedowais312/Smart_Helmet" className="project-link"> GitHub</a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
    </>
  )
}
