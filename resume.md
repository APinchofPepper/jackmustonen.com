---
layout: default
title: Resume
permalink: /resume/
---

<style>
:root {
  --primary-color: #0a2342;
  --secondary-color: #2a628f;
  --accent-color: #3e92cc;
  --text-color: #333333;
  --light-text: #555555;
  --gradient-start: #0a2342;
  --gradient-end: #3e92cc;
  --background-light: #f5f8fa;
  --card-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

body {
  color: var(--text-color);
  background: var(--background-light);
  scroll-behavior: smooth;
}

/* Resume-specific styles */
.resume-header {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color:rgb(23, 132, 204); /* Changed from white to light gray */
  padding: 6rem 0 3rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.resume-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f5f8fa' fill-opacity='0.1' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") no-repeat bottom;
  background-size: cover;
  opacity: 0.15;
  animation: wave 15s ease-in-out infinite alternate;
}

@keyframes wave {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}

.resume-header h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: fadeInDown 0.8s ease-out;
}

.resume-header .subtitle {
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
  opacity: 0;
}

.btn-gradient {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.3);
  color:rgb(18, 111, 173); /* Changed from white to light gray */
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out 0.5s forwards;
  opacity: 0;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.resume-content {
  padding: 0 0 4rem;
}

.resume-section {
  margin-bottom: 3rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  padding-bottom: 0.5rem;
  position: relative;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  animation: expandWidth 1s ease-out forwards;
  transform-origin: left;
}

@keyframes expandWidth {
  from { width: 0; }
  to { width: 60px; }
}

.section-header i {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: var(--gradient-start);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.timeline {
  position: relative;
  max-width: 1000px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  height: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--gradient-start), var(--gradient-end));
  animation: growLine 1.5s ease-out forwards;
}

@keyframes growLine {
  from { height: 0; }
  to { height: 100%; }
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 2.5rem;
  padding-bottom: 1rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.6s ease-out forwards;
  animation-delay: calc(var(--item-index, 0) * 0.2s);
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f8fa; /* Changed from white to light gray */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 4px solid #f5f8fa; /* Changed from white to light gray */
  z-index: 1;
  transition: all 0.3s ease;
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: calc(var(--item-index, 0) * 0.2s + 0.2s);
  opacity: 0;
  transform: scale(0.5);
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.1) rotate(360deg);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.timeline-content {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--gradient-start), var(--gradient-end));
  opacity: 0.7;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.content-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: var(--primary-color);
  position: relative;
  display: inline-block;
}

.content-header h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  transition: width 0.3s ease;
}

.timeline-content:hover .content-header h3::after {
  width: 100%;
}

.timeline-date {
  background: linear-gradient(135deg, rgba(10, 35, 66, 0.05), rgba(28, 69, 135, 0.05));
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gradient-start);
  position: relative;
  overflow: hidden;
}

.timeline-date::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.timeline-content:hover .timeline-date::before {
  opacity: 0.1;
}

.company {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.degree {
  font-size: 1.1rem;
  font-style: italic;
  color: #444;
  margin-bottom: 1rem;
}

.achievements {
  list-style: none;
  padding-left: 0;
}

.achievements li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.5;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(0);
}

.achievements li:hover {
  opacity: 1;
  transform: translateX(5px);
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--gradient-start);
  font-weight: bold;
}

.project-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-list li {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-top: 4px solid var(--gradient-start);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: calc(var(--card-index, 0) * 0.2s);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-list li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-list li:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  color: white;
}

.project-list li:hover::before {
  opacity: 1;
}

.project-list li strong {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

.project-list li:hover strong {
  color: #f5f8fa; /* Changed from white to light gray */
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease-out forwards;
  animation-delay: calc(var(--card-index, 0) * 0.15s);
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.skill-category:hover::before {
  transform: scaleX(1);
}

.skill-category h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
  position: relative;
  transition: color 0.3s ease;
}

.skill-category:hover h3 {
  color: var(--gradient-start);
}

.skill-category h3::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
}

.skill-category p {
  line-height: 1.6;
  color: #555;
}

/* Floating animation for skill tags */
.skill-tags {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: linear-gradient(135deg, rgba(10, 35, 66, 0.05), rgba(28, 69, 135, 0.05));
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--primary-color);
  display: inline-block;
  transition: all 0.3s ease;
}

.skill-category:hover .skill-tag {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .resume-header {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
  
  .resume-header h1 {
    font-size: 2.5rem;
  }
  
  .resume-header .subtitle {
    font-size: 1.2rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-marker {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .timeline-item {
    padding-left: 50px;
  }
  
  .skills-grid, .project-list {
    grid-template-columns: 1fr;
  }
}

/* Keyframe Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animated background for header */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.animated-bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: float 8s infinite;
}

.shape1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape2 {
  width: 150px;
  height: 150px;
  top: 60%;
  left: 15%;
  animation-delay: 1s;
}

.shape3 {
  width: 70px;
  height: 70px;
  top: 40%;
  left: 80%;
  animation-delay: 2s;
}

.shape4 {
  width: 120px;
  height: 120px;
  top: 10%;
  left: 70%;
  animation-delay: 3s;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotate(360deg);
    opacity: 0.8;
  }
}

/* Hover effect for timeline items */
.timeline-item:hover .timeline-content {
  transform: translateY(-5px) scale(1.01);
}

/* Typing animation for subtitle */
.typing-animation {
  border-right: 2px solid rgba(255,255,255,0.75);
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  letter-spacing: 0.1em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgba(255,255,255,0.75) }
}

/* Skill bar animation */
.skill-bar {
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  border-radius: 4px;
  width: 0;
  transition: width 1.5s ease;
}



/* GSAP-like scroll trigger effect handled by JS */
.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<section class="resume-header">
    <div class="animated-bg">
        <div class="animated-bg-shape shape1"></div>
        <div class="animated-bg-shape shape2"></div>
        <div class="animated-bg-shape shape3"></div>
        <div class="animated-bg-shape shape4"></div>
    </div>
    <div class="container">
        <h1>Resume</h1>
        <div class="subtitle-container">
            <p class="subtitle">Software Developer with expertise in AI/ML,</p>
            <p class="subtitle typing-animation">Full-Stack Development, and Data-Driven Systems</p>
        </div>
        <a href="/assets/resumeJanuary.pdf" class="btn btn-gradient" target="_blank" download>
            <i class="fas fa-download"></i> Download PDF
        </a>
    </div>
</section>

<style>
/* Updated styles for subtitle */
.subtitle-container {
  max-width: 800px;
  margin: 0 auto;
}

.subtitle {
  font-size: 1.5rem;
  margin: 0 auto 2rem;
  line-height: 1.4;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
  text-align: center;
}

.resume-header .typing-animation::after {
  content: '|';
  display: inline-block;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
</style>

<section class="resume-content">
    <div class="container">
        <!-- Education Section -->
        <div class="resume-section" id="education-section">
            <div class="section-header">
                <h2><i class="fas fa-graduation-cap"></i> Education</h2>
            </div>
            <div class="timeline">
                <div class="timeline-item" style="--item-index: 0;">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="content-header">
                            <h3>Oregon State University</h3>
                            <p class="timeline-date">September 2023 - Present</p>
                        </div>
                        <p class="degree">Bachelor of Science, Computer Science</p>
                        <ul class="achievements">
                            <li>Focus on Machine Learning and Artificial Intelligence</li>
                            <li>Active Member of Computer Science Club</li>
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-item" style="--item-index: 1;">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="content-header">
                            <h3>Pepperdine University</h3>
                            <p class="timeline-date">August 2021 - May 2023</p>
                        </div>
                        <p class="degree">Bachelor of Science, Computer Science</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Experience Section -->
        <div class="resume-section" id="experience-section">
            <div class="section-header">
                <h2><i class="fas fa-briefcase"></i> Professional Experience</h2>
            </div>
            <div class="timeline">
                <div class="timeline-item" style="--item-index: 0;">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="content-header">
                            <h3>Process Engineering Intern</h3>
                            <p class="timeline-date">May 2022 - September 2022</p>
                        </div>
                        <p class="company">Jacobs Engineering, Portland, OR</p>
                        <ul class="achievements">
                            <li>Supported services during construction for semiconductor fabrication facilities (Fab) in Arizona (Confidential Client)</li>
                            <li>Conducted work within the following software platforms: Bluebeam, Navisworks, Procore, Pipeflo, Autodesk ProjectWise, Revit, excel, word, and PowerPoint</li>
                            <li>Gained familiarity with semiconductor factory project sites and supporting systems</li>
                            <li>Collaborated with technical staff on several different projects (development of RFI responses, creation of PowerPoint presentations)</li>
                            <li>Assisted in the design and implementation of water treatment services for clients</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item" style="--item-index: 1;">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="content-header">
                            <h3>Founder/Owner</h3>
                            <p class="timeline-date">September 2018 - August 2022</p>
                        </div>
                        <p class="company">Cookie Town Cookies, Portland, OR</p>
                        <ul class="achievements">
                            <li>Solicit online sales and sold product in eight New Seasons Market Grocery Stores in three cities</li>
                            <li>Develop and manage the Cookie Town Cookies website</li>
                            <li>Utilize excellent leadership and organizational skills to produce over 500 cookies per day</li>
                            <li>Maintain timely communications with clients and business partners</li>
                            <li>Demonstrate business development skills by expanding product sales into eight New Seasons Grocery Stores, resulting in gross annual revenue of over $156,000</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Projects Section -->
        <div class="resume-section" id="projects-section">
            <div class="section-header">
                <h2><i class="fas fa-project-diagram"></i> Selected Projects</h2>
            </div>
            <ul class="project-list">
                <li style="--card-index: 0;"><strong>Distributed File System</strong> Scalable, fault-tolerant system with automated file replication, tiered storage, and efficient data deduplication using Flask, React, and Python.</li>
                <li style="--card-index: 1;"><strong>Blockchain Supply Chain Tracker</strong> Blockchain-based platform providing real-time tracking and analytics for product journeys, leveraging FastAPI, React, and Recharts.</li>
                <li style="--card-index: 2;"><strong>Algorithm Visualizer</strong> Interactive web tool for visualizing and comparing sorting algorithms, built with HTML, CSS, and JavaScript.</li>
                <li style="--card-index: 3;"><strong>Intelligence Report Generator</strong> Automated NLP pipeline for summarizing news articles, built using Python, Hugging Face Transformers, and Pandas.</li>
            </ul>
        </div>

        <!-- Skills Section -->
        <div class="resume-section" id="skills-section">
            <div class="section-header">
                <h2><i class="fas fa-code"></i> Technical Skills</h2>
            </div>
            <div class="skills-grid">
                <div class="skill-category" style="--card-index: 0;">
                    <h3>Programming Languages</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">TypeScript</span>
                        <span class="skill-tag">HTML</span>
                        <span class="skill-tag">CSS</span>
                        <span class="skill-tag">C++</span>
                        <span class="skill-tag">C</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="85%"></div>
                    </div>
                </div>
                
                <div class="skill-category" style="--card-index: 1;">
                    <h3>Frameworks & Libraries</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">Next.js</span>
                        <span class="skill-tag">Flask</span>
                        <span class="skill-tag">FastAPI</span>
                        <span class="skill-tag">Tailwind CSS</span>
                        <span class="skill-tag">TensorFlow</span>
                        <span class="skill-tag">Keras</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="90%"></div>
                    </div>
                </div>
                
                <div class="skill-category" style="--card-index: 2;">
                    <h3>Data Science & Machine Learning</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Scikit-learn</span>
                        <span class="skill-tag">Pandas</span>
                        <span class="skill-tag">NumPy</span>
                        <span class="skill-tag">Transformers</span>
                        <span class="skill-tag">Matplotlib</span>
                        <span class="skill-tag">Seaborn</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="85%"></div>
                    </div>
                </div>
                
                <div class="skill-category" style="--card-index: 3;">
                    <h3>Databases</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">SQL</span>
                        <span class="skill-tag">MongoDB</span>
                        <span class="skill-tag">DynamoDB</span>
                        <span class="skill-tag">SQLite</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="80%"></div>
                    </div>
                </div>
                
                <div class="skill-category" style="--card-index: 4;">
                    <h3>DevOps & Tools</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Git</span>
                        <span class="skill-tag">Docker</span>
                        <span class="skill-tag">Uvicorn</span>
                        <span class="skill-tag">pytest</span>
                        <span class="skill-tag">Web Scraping</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="75%"></div>
                    </div>
                </div>
                
                <div class="skill-category" style="--card-index: 5;">
                    <h3>Web Development</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">RESTful APIs</span>
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">Next.js</span>
                        <span class="skill-tag">FastAPI</span>
                        <span class="skill-tag">Axios</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="90%"></div>
                    </div>
                </div>
                
                <div class="skill-category" style="--card-index: 6;">
                    <h3>Other Skills</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Data Acquisition</span>
                        <span class="skill-tag">Financial Modeling</span>
                        <span class="skill-tag">Statistical Analysis</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="85%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Function to add 'visible' class to elements in viewport
    function animateOnScroll() {
        const sections = document.querySelectorAll('.resume-section');
        
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    // Initial animation for visible elements
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Animate timeline markers on hover
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });
    
    // Add card index to project and skill items for staggered animation
    const projectItems = document.querySelectorAll('.project-list li');
    projectItems.forEach((item, index) => {
        item.style.setProperty('--card-index', index);
    });
    
    // Add hover effects for projects
    const projects = document.querySelectorAll('.project-list li');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.color = '#f5f8fa';
        });
        project.addEventListener('mouseleave', function() {
            setTimeout(() => {
                this.style.color = '';
            }, 200);
        });
    });
    
    // Typing animation reset on visibility change
    const subtitleContainer = document.querySelector('.subtitle-container');
    const subtitle = document.querySelector('.typing-animation');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                subtitle.classList.add('typing-animation');
            } else {
                subtitle.classList.remove('typing-animation');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe the subtitle container
    if (subtitleContainer) {
        observer.observe(subtitleContainer);
    }
});
</script>