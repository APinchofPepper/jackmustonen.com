---
layout: default
title: About
permalink: /about/
---

<!-- Hero Section with Animated Introduction -->
<section class="about-hero">
    <div class="hero-container">
        <div class="profile-container">
            <div class="profile-image"> <!-- 200x200 px recommended -->
                <!-- You can replace this with your actual profile photo -->
                <div class="profile-placeholder">
                    <i class="fas fa-user"></i>
                </div>
                <div class="profile-backdrop"></div>
            </div>
            <div class="profile-details">
                <h1 class="profile-name">Jack Mustonen</h1>
                <div class="profile-title-wrapper">
                    <span class="profile-title">Software Developer</span>
                    <span class="profile-title">Machine Learning Engineer</span>
                    <span class="profile-title">Problem Solver</span>
                </div>
                <div class="profile-stats">
                    <div class="stat-item">
                        <span class="stat-icon"><i class="fas fa-code-branch"></i></span>
                        <span class="stat-value">3+</span>
                        <span class="stat-label">Years Coding</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon"><i class="fas fa-project-diagram"></i></span>
                        <span class="stat-value">10+</span>
                        <span class="stat-label">Projects</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon"><i class="fas fa-graduation-cap"></i></span>
                        <span class="stat-value">CS</span>
                        <span class="stat-label">Degree</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.journey-section .timeline::before {
    left: 50%;
    transform: translateX(-50%);
}

.journey-section .timeline-item:nth-child(odd) {
    left: 46.5%;
    padding-right: 3rem;
}

.journey-section .timeline-item:nth-child(even) {
    left: 44%;
    padding-left: 3rem;
}

.journey-section .timeline-item:nth-child(odd) .timeline-content {
    left: -50%; /* Move content box to the left */
    transform: translateX(-72%); /* Push it away from the marker */
}

.journey-section .timeline-item:nth-child(even) .timeline-content {
    left: 50%; /* Move content box to the right */
    transform: translateX(-40%); /* Push it away from the marker */
}


</style>

<!-- About Me Section with Interactive Elements -->
<section class="about-content">
    <div class="container">
        <div class="about-intro">
            <div class="section-header">
                <h2>My Story</h2>
                <div class="section-underline"></div>
            </div>
            
            <div class="bio-content">
                <p class="lead">I'm a Computer Science student at Oregon State University with a focus on machine learning and artificial intelligence. I thrive at the intersection of technology and innovation, combining technical expertise with creative problem-solving.</p>
                
                <p>My technical journey spans full-stack development, distributed systems, data science, and cybersecurity. I've built projects that tackle real-world challenges, from creating fault-tolerant distributed systems to implementing blockchain solutions for supply chain transparency.</p>
                
                <div class="key-strengths">
                    <div class="key-strength">
                        <div class="strength-icon">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <div class="strength-content">
                            <h4>Innovation-Driven</h4>
                            <p>I create novel solutions to challenging technical problems by combining knowledge across domains.</p>
                        </div>
                    </div>
                    
                    <div class="key-strength">
                        <div class="strength-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="strength-content">
                            <h4>Collaborative Leader</h4>
                            <p>I excel in team environments, leveraging diverse perspectives to create better systems.</p>
                        </div>
                    </div>
                    
                    <div class="key-strength">
                        <div class="strength-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <div class="strength-content">
                            <h4>Rapid Learner</h4>
                            <p>I quickly master new technologies and frameworks, adapting to evolving project requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Interactive Journey Timeline -->
        <div class="journey-section">
            <div class="section-header">
                <h2>My Journey</h2>
                <div class="section-underline"></div>
            </div>
            
            <div class="interactive-timeline">
                <div class="timeline-nav">
                    <button class="timeline-tab active" data-target="coding">Coding Journey</button>
                    <button class="timeline-tab" data-target="entrepreneurial">Entrepreneurial</button>
                    <button class="timeline-tab" data-target="industry">Industry Experience</button>
                    <button class="timeline-tab" data-target="education">Education</button>
                </div>
                
                <div class="timeline-content">
                    <!-- Coding Journey Timeline -->
                    <div class="timeline-panel active" id="coding-panel">
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-code"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2020</span>
                                    <h3>Early Programming Projects</h3>
                                    <p>Started coding journey with Python, creating small automation tools and data analysis scripts that solved personal productivity challenges.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2021</span>
                                    <h3>Web Development</h3>
                                    <p>Expanded skills to include JavaScript, React, and modern web development, building interactive web applications and e-commerce platforms.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-brain"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2022</span>
                                    <h3>Machine Learning Focus</h3>
                                    <p>Dove into AI and ML, implementing neural networks for data analysis projects and exploring NLP techniques for text processing applications.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-project-diagram"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2023</span>
                                    <h3>Complex Systems Design</h3>
                                    <p>Developed advanced distributed systems and blockchain implementations, focusing on scalability, security, and fault tolerance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Entrepreneurial Timeline -->
                    <div class="timeline-panel" id="entrepreneurial-panel">
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-cookie"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2018</span>
                                    <h3>Cookie Town Cookies Founded</h3>
                                    <p>Started a cookie company from the ground up, developing unique recipes and building an initial customer base through farmers markets.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-store"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2019</span>
                                    <h3>Retail Expansion</h3>
                                    <p>Expanded to retail locations, placing products in local grocery stores and scaling production while maintaining consistent quality.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2020</span>
                                    <h3>E-Commerce Platform</h3>
                                    <p>Launched online store to reach national customers, implementing digital marketing strategies that increased revenue by 40%.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2021-2022</span>
                                    <h3>Multi-Location Management</h3>
                                    <p>Managed operations across eight retail locations while maintaining product consistency and developing inventory management systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Industry Experience Timeline -->
                    <div class="timeline-panel" id="industry-panel">
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-industry"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2022</span>
                                    <h3>Process Engineering Intern</h3>
                                    <p>Interned at Jacobs Engineering, supporting semiconductor fabrication projects with technical documentation and process analysis.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-tasks"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2022</span>
                                    <h3>Technical Documentation</h3>
                                    <p>Created comprehensive documentation for complex engineering systems, improving cross-team communication and project workflows.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-clipboard-check"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2022</span>
                                    <h3>Process Optimization</h3>
                                    <p>Collaborated on optimizing water treatment services for clients, implementing data-driven improvements to system efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Education Timeline -->
                    <div class="timeline-panel" id="education-panel">
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-university"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2021-2023</span>
                                    <h3>Pepperdine University</h3>
                                    <p>Started Computer Science program, building a foundation in programming fundamentals, data structures, and algorithms.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">2023-Present</span>
                                    <h3>Oregon State University</h3>
                                    <p>Pursuing Bachelor of Science in Computer Science with focus on machine learning and artificial intelligence.</p>
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-marker">
                                    <i class="fas fa-certificate"></i>
                                </div>
                                <div class="timeline-content">
                                    <span class="timeline-date">Ongoing</span>
                                    <h3>Continuous Learning</h3>
                                    <p>Regularly completing specialized courses in machine learning, distributed systems, and blockchain technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- What Drives Me - Interactive Cards -->
        <div class="passions-section">
            <div class="section-header">
                <h2>What Drives Me</h2>
                <div class="section-underline"></div>
            </div>
            
            <div class="passion-cards">
                <div class="passion-card">
                    <div class="passion-front">
                        <div class="passion-icon">
                            <i class="fas fa-robot"></i>
                        </div>
                        <h3>Artificial Intelligence</h3>
                        <div class="card-flip-prompt">
                            <span>Learn More</span>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div class="passion-back">
                        <p>I'm passionate about leveraging AI to design solutions that solve real-world problems and push technological boundaries. My focus areas include:</p>
                        <ul>
                            <li>Natural Language Processing</li>
                            <li>Computer Vision Systems</li>
                            <li>Predictive Analytics</li>
                            <li>AI Ethics & Responsible Implementation</li>
                        </ul>
                        <div class="card-flip-prompt">
                            <i class="fas fa-arrow-left"></i>
                            <span>Back</span>
                        </div>
                    </div>
                </div>
                
                <div class="passion-card">
                    <div class="passion-front">
                        <div class="passion-icon">
                            <i class="fas fa-sitemap"></i>
                        </div>
                        <h3>Distributed Systems</h3>
                        <div class="card-flip-prompt">
                            <span>Learn More</span>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div class="passion-back">
                        <p>Building resilient, scalable distributed systems fascinates me. I focus on:</p>
                        <ul>
                            <li>Fault-Tolerant Architecture</li>
                            <li>Data Consistency Models</li>
                            <li>Distributed Consensus</li>
                            <li>System Scalability & Performance</li>
                        </ul>
                        <div class="card-flip-prompt">
                            <i class="fas fa-arrow-left"></i>
                            <span>Back</span>
                        </div>
                    </div>
                </div>
                
                <div class="passion-card">
                    <div class="passion-front">
                        <div class="passion-icon">
                            <i class="fas fa-chart-bar"></i>
                        </div>
                        <h3>Data Science</h3>
                        <div class="card-flip-prompt">
                            <span>Learn More</span>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div class="passion-back">
                        <p>I enjoy working with complex datasets to uncover patterns, make predictions, and drive informed decisions through:</p>
                        <ul>
                            <li>Advanced Statistical Modeling</li>
                            <li>Data Visualization Techniques</li>
                            <li>Feature Engineering</li>
                            <li>Time Series Analysis</li>
                        </ul>
                        <div class="card-flip-prompt">
                            <i class="fas fa-arrow-left"></i>
                            <span>Back</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-spacer"></div>
        
        <!-- Final CTA Section -->
        <div class="about-cta">
            <div class="cta-content">
                <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                <a href="{{ site.baseurl }}/contact/" class="btn">Get In Touch</a>
            </div>
        </div>
    </div>
</section>

<script>
// Timeline tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    // Timeline tab switching
    const timelineTabs = document.querySelectorAll('.timeline-tab');
    const timelinePanels = document.querySelectorAll('.timeline-panel');
    
    timelineTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            timelineTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all panels
            timelinePanels.forEach(panel => panel.classList.remove('active'));
            // Show panel corresponding to clicked tab
            const targetPanel = document.getElementById(`${this.dataset.target}-panel`);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });
    
    // Flip cards functionality
    const passionCards = document.querySelectorAll('.passion-card');
    
    passionCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
    
    // Carousel functionality
    const slides = document.querySelectorAll('.project-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevButton = document.querySelector('[data-direction="prev"]');
    const nextButton = document.querySelector('[data-direction="next"]');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');
        // Remove active class from all indicators
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Show slide at index
        slides[index].style.display = 'flex';
        // Add active class to indicator at index
        indicators[index].classList.add('active');
        currentSlide = index;
    }
    
    // Initialize carousel
    showSlide(0);
    
    // Next button click
    nextButton.addEventListener('click', function() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    });
    
    // Previous button click
    prevButton.addEventListener('click', function() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = slides.length - 1;
        showSlide(newIndex);
    });
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto-rotate every 5 seconds
    setInterval(function() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    }, 10000);
});
</script>