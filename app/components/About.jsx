import React from 'react'

export default function ABout() {
  return (
     <section id="about">
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <div className="profile-photo">
                       <img src="/Admin_photo.jpg" alt="" />
                    </div>
                </div>
                <div className="about-text">
                    <h3>Engineering the Future</h3>
                    <p>I'm a driven engineering student with a strong foundation in software development, full-stack web and mobile apps, and AI-powered solutions. My passion lies in using technology to solve real-world challenges—from building voice-guided tools for the visually impaired to creating intelligent learning and environmental awareness platforms..</p>
                    <p>Currently pursuing my Engineering degree, I'm constantly experimenting with tools like React, Next.js, OpenCV, Unreal Engine, and Python-based AI models. I enjoy diving deep into system design, innovative UIs, and automation.</p>
                    <p>When I’m not coding or brainstorming hackathon ideas, I love contributing to open-source, exploring emerging tech, and building impactful projects with like-minded peers. I believe in learning by doing, staying future-ready, and making a difference through tech..</p>
                </div>
            </div>
        </div>
      </section>
    
  )
}
