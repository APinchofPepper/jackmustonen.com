---
layout: default
title: Integrated Design
permalink: /integrated-design/
---

<!-- Immersive Hero Section with Animated Background -->
<section class="design-hero">
    <div class="hero-bg-animation">
        <div class="animated-grid">
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
        </div>
    </div>
    <div class="hero-container">
        <h1 class="animate-reveal-text"><span>Frontend <em>Engineering</em></span> <span class="highlight">Showcase</span></h1>
        <p class="hero-subtitle animate-fade-up delay-1">Building exceptional digital experiences with cutting-edge technologies</p>
        <div class="hero-cta animate-fade-up delay-2">
            <a href="#project-details" class="btn btn-gradient">Explore the Project</a>
            <a href="https://integrateddigitaldesign.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Visit Live Site</a>
        </div>
    </div>
</section>

<style>
/* Custom link styling to keep the link always blue */
.lead a {
    color: #0050ff; /* Same blue as your design primary color */
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 80, 255, 0.3);
    transition: border-bottom-color 0.3s ease;
}

.lead a:hover {
    border-bottom-color: #0050ff;
}

/* Prevents the link from changing color when visited */
.lead a:visited {
    color: #0050ff;
}
</style>

<style>
.device-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.device-screen img:hover {
    transform: scale(1.02);
}
</style>

<style>
.device-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.device-screen img:hover {
    transform: scale(1.02);
}
</style>

<!-- Project Overview with Floating Cards -->
<section id="project-details" class="project-overview">
    <style>
    .performance-showcase {
        display: flex;
        align-items: center;
        gap: 4rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }
    .device-container {
        position: relative;
        width: 60%;
        aspect-ratio: 16/9;
        perspective: 1000px;
    }
    .device-frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1a1a1a;
        border-radius: 16px;
        box-shadow: 
            0 20px 40px rgba(0,0,0,0.2),
            0 10px 20px rgba(0,0,0,0.1);
        overflow: hidden;
        transform: rotateX(8deg) rotateY(-12deg) scale(0.95);
        transition: transform 0.5s ease;
    }
    .device-frame:hover {
        transform: rotateX(0) rotateY(0) scale(1);
    }
    .device-screen {
        position: absolute;
        top: 2%;
        left: 2%;
        right: 2%;
        bottom: 2%;
        background: white;
        border-radius: 8px;
        overflow: hidden;
    }
    .device-screen img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    .device-screen img:hover {
        transform: scale(1.02);
    }
    </style>
    <div class="container">
        <div class="overview-grid">
            <div class="overview-content animate-fade-right">
                <h2 class="section-title">Project <span class="text-gradient">Overview</span></h2>
                <p class="lead">I designed and developed <a href="https://integrateddigitaldesign.com" target="_blank" rel="noopener noreferrer">integrateddigitaldesign.com</a>, a sophisticated frontend project that showcases modern web development at its finest.</p>
                
                <p>This case study explores the technical challenges and innovative solutions implemented to create a high-performance, visually stunning, and accessible digital experience.</p>
                
                <div class="key-metrics">
                    <div class="metric">
                        <div class="metric-value">97<span class="metric-unit">/100</span></div>
                        <div class="metric-label">Performance Score</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">2.4<span class="metric-unit">s</span></div>
                        <div class="metric-label">LCP Load Time</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">0.02</div>
                        <div class="metric-label">CLS Score</div>
                    </div>
                </div>
            </div>
            
            <div class="overview-showcase animate-fade-left">
                <div class="performance-showcase">
                    <div class="device-container">
                        <div class="device-frame">
                            <div class="device-screen">
                                <img 
                                    src="/assets/images/integrated-design-screenshot.png" 
                                    alt="Integrated Digital Design Website Screenshot"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Interactive Tech Stack Showcase -->
<section class="tech-stack-showcase">
    <div class="container">
        <h2 class="section-title animate-fade-up">Technology <span class="text-gradient">Stack</span></h2>
        
        <div class="tech-stack-container">
            <div class="tech-cards">
                <!-- Each card should flip on hover or click -->
                <div class="tech-flip-card animate-pop-in" style="--anim-delay: 0.1s;">
                    <div class="tech-flip-card-inner">
                        <div class="tech-flip-card-front">
                            <div class="tech-icon">
                                <i class="fab fa-html5"></i>
                            </div>
                            <h3>HTML5</h3>
                            <div class="flip-prompt">Click to learn more</div>
                        </div>
                        <div class="tech-flip-card-back">
                            <h3>HTML5 Features</h3>
                            <ul>
                                <li>Semantic markup for better accessibility</li>
                                <li>Structured data implementation</li>
                                <li>Proper document outlining</li>
                                <li>ARIA attributes for enhanced accessibility</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="tech-flip-card animate-pop-in" style="--anim-delay: 0.2s;">
                    <div class="tech-flip-card-inner">
                        <div class="tech-flip-card-front">
                            <div class="tech-icon">
                                <i class="fab fa-css3-alt"></i>
                            </div>
                            <h3>Advanced CSS</h3>
                            <div class="flip-prompt">Click to learn more</div>
                        </div>
                        <div class="tech-flip-card-back">
                            <h3>CSS Techniques</h3>
                            <ul>
                                <li>CSS Grid & Flexbox layouts</li>
                                <li>Custom properties for theming</li>
                                <li>Fluid typography with clamp()</li>
                                <li>High-performance animations</li>
                                <li>CSS custom properties</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="tech-flip-card animate-pop-in" style="--anim-delay: 0.3s;">
                    <div class="tech-flip-card-inner">
                        <div class="tech-flip-card-front">
                            <div class="tech-icon">
                                <i class="fab fa-js"></i>
                            </div>
                            <h3>Vanilla JavaScript</h3>
                            <div class="flip-prompt">Click to learn more</div>
                        </div>
                        <div class="tech-flip-card-back">
                            <h3>JavaScript Features</h3>
                            <ul>
                                <li>Intersection Observer API</li>
                                <li>Custom component architecture</li>
                                <li>Event delegation patterns</li>
                                <li>Optimized animation system</li>
                                <li>Async/await for API interactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="tech-flip-card animate-pop-in" style="--anim-delay: 0.4s;">
                    <div class="tech-flip-card-inner">
                        <div class="tech-flip-card-front">
                            <div class="tech-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <h3>Responsive Design</h3>
                            <div class="flip-prompt">Click to learn more</div>
                        </div>
                        <div class="tech-flip-card-back">
                            <h3>Responsive Techniques</h3>
                            <ul>
                                <li>Mobile-first methodology</li>
                                <li>Container queries</li>
                                <li>Fluid layouts and typography</li>
                                <li>Adaptive images with srcset</li>
                                <li>Touch-optimized interactions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Interactive Code Features Showcase -->
<section class="code-features-showcase">
    <div class="container">
        <h2 class="section-title animate-fade-up">Key <span class="text-gradient">Technical</span> Features</h2>
        
        <div class="code-tabs">
            <div class="tabs-nav">
                <button class="tab-btn active" data-tab="animations">Animations</button>
                <button class="tab-btn" data-tab="templates">Dynamic Templates</button>
                <button class="tab-btn" data-tab="grid">Responsive Grid</button>
                <button class="tab-btn" data-tab="performance">Performance</button>
            </div>
            
            <div class="tab-content">
                <div class="tab-pane active" id="animations-pane">
                    <div class="code-feature-container">
                        <div class="code-feature-header">
                            <h3>High-Performance Animations</h3>
                            <div class="tags">
                                <span class="tag">CSS Animations</span>
                                <span class="tag">IntersectionObserver</span>
                                <span class="tag">will-change</span>
                            </div>
                        </div>
                        
                        <div class="code-feature-content">
                            <p>Implemented hardware-accelerated animations using CSS transforms and opacity properties with the Intersection Observer API to create smooth 60fps animations that only trigger when elements enter the viewport.</p>
                            
                            <div class="code-demo">
                                <div class="code-snippet-container">
                                    <div class="code-header">
                                        <div class="editor-dots">
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                        </div>
                                        <span class="file-name">animations.js</span>
                                    </div>
                                    <div class="code-block">
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
                                    </div>
                                </div>
                                
                                <div class="code-result">
                                    <div class="result-preview">
                                        <div class="animation-demo-container">
                                            <div class="animation-element animation-fade"></div>
                                            <div class="animation-element animation-slide"></div>
                                            <div class="animation-element animation-scale"></div>
                                        </div>
                                    </div>
                                    <button class="demo-reset-btn">Reset Animation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane" id="templates-pane">
                    <div class="code-feature-container">
                        <div class="code-feature-header">
                            <h3>Dynamic Template Previews</h3>
                            <div class="tags">
                                <span class="tag">JavaScript</span>
                                <span class="tag">DOM Manipulation</span>
                                <span class="tag">Event Delegation</span>
                            </div>
                        </div>
                        
                        <div class="code-feature-content">
                            <p>Engineered an interactive template showcase system that allows users to preview different designs, using efficient event delegation and smooth transitions.</p>
                            
                            <div class="code-demo">
                                <div class="code-snippet-container">
                                    <div class="code-header">
                                        <div class="editor-dots">
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                        </div>
                                        <span class="file-name">templates.js</span>
                                    </div>
                                    <div class="code-block">
const templateContainer = document.querySelector('.template-container');
const templatePreviews = document.querySelectorAll('.template-preview');

// Event delegation for better performance
templateContainer.addEventListener('click', (e) => {
  const button = e.target.closest('.preview-button');
  if (!button) return;
  
  const templateId = button.dataset.template;
  
  // Transition out current template
  const currentTemplate = document.querySelector('.template-active');
  if (currentTemplate) {
    currentTemplate.classList.add('template-exit');
    currentTemplate.addEventListener('animationend', () => {
      currentTemplate.classList.remove('template-active', 'template-exit');
    }, { once: true });
  }
  
  // Transition in new template
  const newTemplate = document.getElementById(templateId);
  if (newTemplate) {
    newTemplate.classList.add('template-active', 'template-enter');
    newTemplate.addEventListener('animationend', () => {
      newTemplate.classList.remove('template-enter');
    }, { once: true });
  }
});
                                    </div>
                                </div>
                                
                                <div class="code-result">
                                    <div class="result-preview">
                                        <div class="template-demo">
                                            <div class="template-selector">
                                                <button class="template-btn active" data-template="template1">Template 1</button>
                                                <button class="template-btn" data-template="template2">Template 2</button>
                                                <button class="template-btn" data-template="template3">Template 3</button>
                                            </div>
                                            <div class="template-preview-container">
                                                <div class="template-preview active" id="template1-preview"></div>
                                                <div class="template-preview" id="template2-preview"></div>
                                                <div class="template-preview" id="template3-preview"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane" id="grid-pane">
                    <!-- Similar structure for Grid tab -->
                    <div class="code-feature-container">
                        <div class="code-feature-header">
                            <h3>Responsive Grid Layout System</h3>
                            <div class="tags">
                                <span class="tag">CSS Grid</span>
                                <span class="tag">Flexbox</span>
                                <span class="tag">Custom Properties</span>
                            </div>
                        </div>
                        
                        <div class="code-feature-content">
                            <p>Designed a flexible grid system using CSS Grid and custom properties to create a consistent layout that adapts to any viewport size without relying on external frameworks.</p>
                            
                            <div class="code-demo">
                                <div class="code-snippet-container">
                                    <div class="code-header">
                                        <div class="editor-dots">
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                        </div>
                                        <span class="file-name">grid.css</span>
                                    </div>
                                    <div class="code-block">
:root {
  --grid-columns: 12;
  --grid-gap: clamp(1rem, 2vw, 2rem);
  --container-max-width: 1200px;
  --container-padding: clamp(1rem, 5vw, 3rem);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Responsive column spans */
.col-span-12 { grid-column: span 12; }
.col-span-6 { grid-column: span 6; }
.col-span-4 { grid-column: span 4; }

@media (max-width: 768px) {
  .col-span-6 { grid-column: span 12; }
  .col-span-4 { grid-column: span 6; }
}

@media (max-width: 480px) {
  .col-span-4 { grid-column: span 12; }
}
                                    </div>
                                </div>
                                
                                <div class="code-result">
                                    <div class="result-preview">
                                        <div class="grid-demo">
                                            <div class="demo-grid">
                                                <div class="demo-grid-item span-12"></div>
                                                <div class="demo-grid-item span-6"></div>
                                                <div class="demo-grid-item span-6"></div>
                                                <div class="demo-grid-item span-4"></div>
                                                <div class="demo-grid-item span-4"></div>
                                                <div class="demo-grid-item span-4"></div>
                                            </div>
                                            <div class="demo-controls">
                                                <button class="viewport-btn active" data-width="desktop">Desktop</button>
                                                <button class="viewport-btn" data-width="tablet">Tablet</button>
                                                <button class="viewport-btn" data-width="mobile">Mobile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane" id="performance-pane">
                    <!-- Similar structure for Performance tab -->
                    <div class="code-feature-container">
                        <div class="code-feature-header">
                            <h3>Performance Optimization</h3>
                            <div class="tags">
                                <span class="tag">Lazy Loading</span>
                                <span class="tag">Code Splitting</span>
                                <span class="tag">Resource Hints</span>
                            </div>
                        </div>
                        
                        <div class="code-feature-content">
                            <p>Implemented various performance techniques including lazy loading of images and components, code splitting, and resource hints to achieve excellent Lighthouse scores.</p>

                            <div class="code-demo">
                                <div class="code-snippet-container">
                                    <div class="code-header">
                                        <div class="editor-dots">
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                            <span class="editor-dot"></span>
                                        </div>
                                        <span class="file-name">performance.js</span>
                                    </div>
                                    <div class="code-block">
                            // Lazy loading images implementation
                            document.addEventListener("DOMContentLoaded", function() {
                            const lazyImages = document.querySelectorAll(".lazy-image");
                            
                            if ("IntersectionObserver" in window) {
                                const imageObserver = new IntersectionObserver((entries) => {
                                entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                    const image = entry.target;
                                    image.src = image.dataset.src;
                                    imageObserver.unobserve(image);
                                    }
                                });
                                });
                                
                                lazyImages.forEach(image => imageObserver.observe(image));
                            } else {
                                // Fallback for browsers without IntersectionObserver
                                lazyImages.forEach(image => {
                                image.src = image.dataset.src;
                                });
                            }
                            });

                            // Resource preloading for critical assets
                            function preloadCriticalAssets() {
                            const preloads = [
                                { href: '/assets/css/main.css', as: 'style' },
                                { href: '/assets/js/main.js', as: 'script' }
                            ];
                            
                            preloads.forEach(resource => {
                                const link = document.createElement('link');
                                link.rel = 'preload';
                                link.href = resource.href;
                                link.as = resource.as;
                                document.head.appendChild(link);
                            });
                            }

                            // Execute performance optimizations
                            preloadCriticalAssets();
                            </div>
                                </div>
                                
                                <div class="code-result">
                                    <div class="result-preview">
                                        <div class="performance-demo">
                                            <div class="lighthouse-scores">
                                                <div class="score-item">
                                                    <svg viewBox="0 0 120 120" class="score-ring">
                                                        <circle class="score-background" r="56" cx="60" cy="60" />
                                                        <circle class="score-circle" r="56" cx="60" cy="60" style="--score: 97" />
                                                        <text x="60" y="65" class="score-text">97</text>
                                                    </svg>
                                                    <div class="score-label">Performance</div>
                                                </div>
                                                <div class="score-item">
                                                    <svg viewBox="0 0 120 120" class="score-ring">
                                                        <circle class="score-background" r="56" cx="60" cy="60" />
                                                        <circle class="score-circle" r="56" cx="60" cy="60" style="--score: 100" />
                                                        <text x="60" y="65" class="score-text">100</text>
                                                    </svg>
                                                    <div class="score-label">Accessibility</div>
                                                </div>
                                                <div class="score-item">
                                                    <svg viewBox="0 0 120 120" class="score-ring">
                                                        <circle class="score-background" r="56" cx="60" cy="60" />
                                                        <circle class="score-circle" r="56" cx="60" cy="60" style="--score: 100" />
                                                        <text x="60" y="65" class="score-text">100</text>
                                                    </svg>
                                                    <div class="score-label">Best Practices</div>
                                                </div>
                                                <div class="score-item">
                                                    <svg viewBox="0 0 120 120" class="score-ring">
                                                        <circle class="score-background" r="56" cx="60" cy="60" />
                                                        <circle class="score-circle" r="56" cx="60" cy="60" style="--score: 98" />
                                                        <text x="60" y="65" class="score-text">98</text>
                                                    </svg>
                                                    <div class="score-label">SEO</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Responsive Design Implementation with Interactive Showcase -->
<section class="responsive-implementation">
    <div class="container">
        <h2 class="section-title animate-fade-up">Responsive <span class="text-gradient">Design</span> Implementation</h2>
        
        <div class="responsive-showcase-container">
            <div class="device-switcher animate-fade-up delay-1">
                <button class="device-btn active" data-device="desktop">
                    <i class="fas fa-desktop"></i>
                    <span>Desktop</span>
                </button>
                <button class="device-btn" data-device="tablet">
                    <i class="fas fa-tablet-alt"></i>
                    <span>Tablet</span>
                </button>
                <button class="device-btn" data-device="mobile">
                    <i class="fas fa-mobile-alt"></i>
                    <span>Mobile</span>
                </button>
            </div>
            
            <div class="devices-container animate-fade-up delay-2">
                <div class="device-frame desktop active">
                    <div class="device-screen">
                        <!-- Animated site preview for desktop -->
                        <div class="site-preview desktop-preview"></div>
                    </div>
                </div>
                
                <div class="device-frame tablet">
                    <div class="device-screen">
                        <!-- Animated site preview for tablet -->
                        <div class="site-preview tablet-preview"></div>
                    </div>
                </div>
                
                <div class="device-frame mobile">
                    <div class="device-screen">
                        <!-- Animated site preview for mobile -->
                        <div class="site-preview mobile-preview"></div>
                    </div>
                </div>
            </div>
            
            <div class="responsive-features animate-fade-up delay-3">
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-text-height"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Fluid Typography</h3>
                        <p>Text that scales smoothly between viewport sizes using CSS clamp()</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-box"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Container Queries</h3>
                        <p>Component-based responsiveness rather than just viewport-based</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Progressive Enhancement</h3>
                        <p>Core functionality first, then advanced features for capable browsers</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">
                        <i class="fas fa-image"></i>
                    </div>
                    <div class="feature-content">
                        <h3>Adaptive Images</h3>
                        <p>Optimized images for each device using srcset and sizes attributes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Accessibility & Best Practices with Animated Icons -->
<section class="accessibility-section">
    <div class="container">
        <h2 class="section-title animate-fade-up">Accessibility & <span class="text-gradient">Best Practices</span></h2>
        
        <div class="a11y-cards">
            <div class="a11y-card animate-fade-up" style="--anim-delay: 0.1s;">
                <div class="a11y-icon">
                    <div class="icon-animation">
                        <i class="fas fa-universal-access"></i>
                    </div>
                </div>
                <div class="a11y-content">
                    <h3>WCAG Compliance</h3>
                    <p>Implemented WCAG 2.1 AA standards throughout the site, ensuring proper color contrast, keyboard navigation, and ARIA attributes for users with disabilities.</p>
                </div>
            </div>
            
            <div class="a11y-card animate-fade-up" style="--anim-delay: 0.2s;">
                <div class="a11y-icon">
                    <div class="icon-animation">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div class="a11y-content">
                    <h3>SEO Architecture</h3>
                    <p>Built with a solid SEO foundation using semantic HTML, optimized metadata, structured data, and proper heading hierarchy for improved search visibility.</p>
                </div>
            </div>
            
            <div class="a11y-card animate-fade-up" style="--anim-delay: 0.3s;">
                <div class="a11y-icon">
                    <div class="icon-animation">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                </div>
                <div class="a11y-content">
                    <h3>Security Best Practices</h3>
                    <p>Implemented security headers, content security policy, and input sanitization to protect against common web vulnerabilities and enhance user safety.</p>
                </div>
            </div>
            
            <div class="a11y-card animate-fade-up" style="--anim-delay: 0.4s;">
                <div class="a11y-icon">
                    <div class="icon-animation">
                        <i class="fas fa-tachometer-alt"></i>
                    </div>
                </div>
                <div class="a11y-content">
                    <h3>Core Web Vitals</h3>
                    <p>Optimized for Google's Core Web Vitals metrics, ensuring excellent Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) scores.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Technical Challenges & Solutions with Animated Timeline -->
<section class="challenges-section">
    <div class="container">
        <h2 class="section-title animate-fade-up">Technical <span class="text-gradient">Challenges</span> & Solutions</h2>
        
        <div class="challenges-timeline">
            <div class="timeline-item animate-from-left" style="--anim-delay: 0.1s;">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-marker">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Interactive Templates Without Framework</h3>
                    <div class="timeline-challenge">
                        <strong>Challenge:</strong> Creating rich, interactive templates without relying on heavy frameworks.
                    </div>
                    <div class="timeline-solution">
                        <strong>Solution:</strong> Developed a lightweight custom JavaScript component system that handles template previews and interactions, improving load times and reducing bundle size.
                    </div>
                </div>
            </div>
            
            <div class="timeline-item animate-from-right" style="--anim-delay: 0.2s;">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-marker">
                        <i class="fas fa-film"></i>
                    </div>
                    <h3>Complex Animations with Performance</h3>
                    <div class="timeline-challenge">
                        <strong>Challenge:</strong> Implementing complex animations without sacrificing performance.
                    </div>
                    <div class="timeline-solution">
                        <strong>Solution:</strong> Created an animation pipeline that prioritizes compositor-only properties (transform, opacity) and uses requestAnimationFrame for JavaScript animations, ensuring smooth 60fps performance.
                    </div>
                </div>
            </div>
            
            <div class="timeline-item animate-from-left" style="--anim-delay: 0.3s;">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-marker">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h3>Maintaining Visual Consistency</h3>
                    <div class="timeline-challenge">
                        <strong>Challenge:</strong> Ensuring visual consistency across different components and screen sizes.
                    </div>
                    <div class="timeline-solution">
                        <strong>Solution:</strong> Developed a custom design system with CSS custom properties for colors, spacing, typography, and shadows to maintain visual consistency while enabling easy theming.
                    </div>
                </div>
            </div>
            
            <div class="timeline-item animate-from-right" style="--anim-delay: 0.4s;">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-marker">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3>Cross-Browser Compatibility</h3>
                    <div class="timeline-challenge">
                        <strong>Challenge:</strong> Ensuring consistent experience across different browsers and devices.
                    </div>
                    <div class="timeline-solution">
                        <strong>Solution:</strong> Implemented a robust testing strategy with targeted polyfills and fallbacks for specific features, ensuring consistent experience across Chrome, Firefox, Safari, and Edge.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Performance Metrics with Animated Data Visualization -->
<section class="performance-metrics">
    <div class="container">
        <h2 class="section-title animate-fade-up">Performance <span class="light-text">Metrics</span></h2>
        
        <div class="metric-visualization animate-fade-up delay-1">
            <div class="metric-charts">
                <div class="chart-container">
                    <div class="chart-header">
                        <h3>Page Speed Insights</h3>
                    </div>
                    <div class="circular-chart">
                        <svg viewBox="0 0 200 200" class="score-chart">
                            <circle class="score-chart-bg" cx="100" cy="100" r="80"></circle>
                            <circle class="score-chart-ring" cx="100" cy="100" r="80" style="--percent: 97"></circle>
                            <text x="100" y="100" class="score-chart-value">97</text>
                            <text x="100" y="125" class="score-chart-label">Performance</text>
                        </svg>
                    </div>
                </div>
                
                <div class="chart-container">
                    <div class="chart-header">
                        <h3>Core Web Vitals</h3>
                    </div>
                    <div class="metrics-grid">
                        <div class="metric-item">
                            <div class="metric-label">FCP</div>
                            <div class="metric-bar">
                                <div class="metric-progress" style="--percent: 80; --color: #0CCE6B">1.2s</div>
                            </div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-label">LCP</div>
                            <div class="metric-bar">
                                <div class="metric-progress" style="--percent: 75; --color: #0CCE6B">2.4s</div>
                            </div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-label">FID</div>
                            <div class="metric-bar">
                                <div class="metric-progress" style="--percent: 95; --color: #0CCE6B">12ms</div>
                            </div>
                        </div>
                        <div class="metric-item">
                            <div class="metric-label">CLS</div>
                            <div class="metric-bar">
                                <div class="metric-progress" style="--percent: 98; --color: #0CCE6B">0.02</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="metric-results">
                <div class="result-card">
                    <div class="result-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="result-value">97<span class="result-unit">/100</span></div>
                    <div class="result-label">Performance Score</div>
                </div>
                
                <div class="result-card">
                    <div class="result-icon">
                        <i class="fas fa-universal-access"></i>
                    </div>
                    <div class="result-value">100<span class="result-unit">/100</span></div>
                    <div class="result-label">Accessibility</div>
                </div>
                
                <div class="result-card">
                    <div class="result-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="result-value">98<span class="result-unit">/100</span></div>
                    <div class="result-label">SEO Score</div>
                </div>
                
                <div class="result-card">
                    <div class="result-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="result-value">100<span class="result-unit">/100</span></div>
                    <div class="result-label">Best Practices</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Future Developments with Animated Illustrations -->
<section class="future-developments">
    <div class="container">
        <h2 class="section-title animate-fade-up">Future <span class="text-gradient">Developments</span></h2>
        
        <div class="development-cards">
            <div class="development-card animate-pop-in" style="--anim-delay: 0.1s;">
                <div class="dev-icon">
                    <i class="fas fa-sitemap"></i>
                </div>
                <h3>Headless CMS Integration</h3>
                <p>Planning to integrate a headless CMS to allow non-technical users to update content while maintaining the performance benefits of static generation.</p>
                <div class="dev-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="--percent: 35"></div>
                    </div>
                    <div class="progress-label">35% Complete</div>
                </div>
            </div>
            
            <div class="development-card animate-pop-in" style="--anim-delay: 0.2s;">
                <div class="dev-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <h3>Progressive Web App Features</h3>
                <p>Implementing service workers for offline functionality and push notifications to enhance user engagement and accessibility in low-connectivity environments.</p>
                <div class="dev-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="--percent: 50"></div>
                    </div>
                    <div class="progress-label">50% Complete</div>
                </div>
            </div>
            
            <div class="development-card animate-pop-in" style="--anim-delay: 0.3s;">
                <div class="dev-icon">
                    <i class="fas fa-globe"></i>
                </div>
                <h3>Internationalization</h3>
                <p>Adding multi-language support with proper RTL handling to expand the site's reach to international audiences with seamless language switching.</p>
                <div class="dev-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="--percent: 20"></div>
                    </div>
                    <div class="progress-label">20% Complete</div>
                </div>
            </div>
            
            <div class="development-card animate-pop-in" style="--anim-delay: 0.4s;">
                <div class="dev-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <h3>Enhanced Analytics</h3>
                <p>Implementing privacy-focused analytics to better understand user journeys and preferences while respecting user privacy and data protection regulations.</p>
                <div class="dev-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="--percent: 65"></div>
                    </div>
                    <div class="progress-label">65% Complete</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Spacer before Final CTA -->
<div class="section-spacer"></div>

<!-- Final CTA Section -->
<section class="contact-cta">
    <div class="container">
        <div class="cta-content animate-scale-in">
            <h2>Ready to collaborate on your next digital project?</h2>
            <p>I bring technical expertise and creative problem-solving to create outstanding web experiences.</p>
            <div class="cta-buttons">
                <a href="https://integrateddigitaldesign.com" class="btn btn-gradient" target="_blank">Visit the Live Site</a>
                <a href="{{ site.baseurl }}/contact/" class="btn btn-outline">Get in Touch</a>
            </div>
        </div>
    </div>
</section>

<!-- Interactive JavaScript for the page -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Tech flip cards functionality
    const flipCards = document.querySelectorAll('.tech-flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
    
    // Code tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the corresponding pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-pane`).classList.add('active');
        });
    });
    
    // Responsive device switcher
    const deviceButtons = document.querySelectorAll('.device-btn');
    const deviceFrames = document.querySelectorAll('.device-frame');
    
    deviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and frames
            deviceButtons.forEach(btn => btn.classList.remove('active'));
            deviceFrames.forEach(frame => frame.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the corresponding device frame
            const deviceType = this.getAttribute('data-device');
            document.querySelector(`.device-frame.${deviceType}`).classList.add('active');
        });
    });
    
    // Template demo functionality
    const templateButtons = document.querySelectorAll('.template-btn');
    const templatePreviews = document.querySelectorAll('.template-preview');
    
    templateButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and previews
            templateButtons.forEach(btn => btn.classList.remove('active'));
            templatePreviews.forEach(preview => preview.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the corresponding preview
            const templateId = this.getAttribute('data-template');
            document.getElementById(`${templateId}-preview`).classList.add('active');
        });
    });
    
    // Animation demo reset button
    const resetButton = document.querySelector('.demo-reset-btn');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            const animElements = document.querySelectorAll('.animation-element');
            animElements.forEach(el => {
                el.classList.remove('animated');
                // Trigger reflow
                void el.offsetWidth;
                el.classList.add('animated');
            });
        });
    }
    
    // Grid demo viewport switcher
    const viewportButtons = document.querySelectorAll('.viewport-btn');
    const demoGrid = document.querySelector('.demo-grid');
    
    if (viewportButtons.length && demoGrid) {
        viewportButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                viewportButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update grid class
                demoGrid.className = 'demo-grid';
                demoGrid.classList.add(this.getAttribute('data-width'));
            });
        });
    }
    
    // Initialize animations on page load
    const animElements = document.querySelectorAll('.animation-element');
    animElements.forEach(el => el.classList.add('animated'));
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    // Observe all elements with animation classes
    document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale-in, .animate-pop-in, .animate-from-left, .animate-from-right').forEach(el => {
        observer.observe(el);
    });
});
</script>