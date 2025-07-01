"use client";
import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">

          {/* 🚀 Programming Languages */}
          <div className="skill-category">
            <h3>🚀 Programming Languages</h3>
            {[
              { name: "Python", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "C++", level: 80 },
              { name: "Java", level: 75 },
            ].map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* 🛠 Tools & Frameworks */}
          <div className="skill-category">
            <h3>🛠 Tools & Frameworks</h3>
            {[
              { name: "React", level: 85 },
              { name: "Node.js", level: 80 },
              { name: "Git", level: 90 },
              { name: "Docker", level: 70 },
            ].map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* 📊 Other Skills */}
          <div className="skill-category">
            <h3>📊 Other Skills</h3>
            {[
              { name: "Data Analysis", level: 80 },
              { name: "System Design", level: 75 },
              { name: "Testing", level: 85 },
            ].map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
