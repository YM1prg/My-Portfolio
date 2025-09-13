import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Github, ExternalLink, Mail, Linkedin, Code, Brain, Database, Cpu, Globe, Award, User, Briefcase, Lightbulb, Download, Leaf } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // GSAP ScrollTrigger animations
    const ctx = gsap.context(() => {
      // Nature lighting pulse animation
      gsap.to('.nature-light', {
        opacity: 0.3,
        scale: 1.2,
        duration: 3,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });
      
      // Floating leaves animation
      gsap.utils.toArray('.floating-leaf').forEach((leaf: any, index) => {
        gsap.set(leaf, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5
        });
        
        gsap.to(leaf, {
          y: '-=100vh',
          x: `+=${Math.random() * 200 - 100}`,
          rotation: '+=360',
          duration: 15 + Math.random() * 10,
          ease: 'none',
          repeat: -1,
          delay: index * 2
        });
        
        gsap.to(leaf, {
          opacity: 0.7,
          duration: 2,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.5
        });
      });
      
      // Organic glow effects
      gsap.to('.organic-glow', {
        boxShadow: '0 0 60px rgba(139, 195, 74, 0.4), 0 0 120px rgba(139, 195, 74, 0.2)',
        duration: 4,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });
      
      // Hero section animations
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );
      
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
      
      gsap.fromTo('.hero-description', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 }
      );
      
      gsap.fromTo('.hero-buttons', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      );
      
      gsap.fromTo('.hero-icon', 
        { opacity: 0, scale: 0.5, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)', delay: 0.1 }
      );
      
      // Floating elements parallax
      gsap.to('.floating-element-1', {
        y: -100,
        rotation: 360,
        scrollTrigger: {
          trigger: '.floating-element-1',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
      
      gsap.to('.floating-element-2', {
        y: 150,
        rotation: -360,
        scrollTrigger: {
          trigger: '.floating-element-2',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });
      
      gsap.to('.floating-element-3', {
        y: -80,
        rotation: 180,
        scrollTrigger: {
          trigger: '.floating-element-3',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8
        }
      });
      
      // Section animations
      gsap.utils.toArray('.section-title').forEach((title: any) => {
        gsap.fromTo(title,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
      
      // Project cards stagger animation
      gsap.utils.toArray('.project-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
      
      // Skills cards animation
      gsap.utils.toArray('.skill-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50, rotationY: 15 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: (index % 3) * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
      
      // About section content
      gsap.fromTo('.about-content',
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      gsap.fromTo('.about-sidebar',
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: '.about-sidebar',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Experience section
      gsap.fromTo('.experience-card',
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.experience-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Contact buttons stagger
      gsap.utils.toArray('.contact-button').forEach((button: any, index) => {
        gsap.fromTo(button,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: '.contact-buttons',
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
      
      // Navbar animation on scroll
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'scrolled', targets: '.navbar' }
      });
    });
    
    const handleScrollSection = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSection);
    
    return () => {
      window.removeEventListener('scroll', handleScrollSection);
      ctx.revert(); // Clean up GSAP animations
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'C++', 'HTML/CSS', 'SQL'],
    'ML/AI': ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Evaluation', 'Neural Networks'],
    'Data Analysis': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
    'Generative AI': ['Google Gemini API', 'Prompt Engineering', 'LLM Integration', 'AI Ethics'],
    'Web Development': ['React', 'Flask', 'Django', 'REST APIs', 'Full-Stack Architecture'],
    'Tools & Platforms': ['Git/GitHub', 'Jupyter', 'VS Code', 'Docker', 'Cloud Platforms']
  };

  return (
    <div className="bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white min-h-screen font-serif relative overflow-hidden">
      {/* Animated Nature Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Nature lighting effects */}
        <div className="nature-light absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-[#8BC34A]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="nature-light absolute bottom-40 right-32 w-80 h-80 bg-gradient-radial from-[#4CAF50]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="nature-light absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-[#66BB6A]/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating leaves */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="floating-leaf absolute opacity-30">
            <Leaf className="w-6 h-6 text-[#8BC34A]" style={{ filter: 'drop-shadow(0 0 8px rgba(139, 195, 74, 0.5))' }} />
          </div>
        ))}
        
        {/* Organic mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20]/30 via-transparent to-[#2E7D32]/20"></div>
      </div>
      
      {/* Navigation */}
      <nav className="navbar fixed top-0 w-full bg-black/10 backdrop-blur-xl border-b border-[#8BC34A]/20 z-50 transition-all duration-300 relative">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-normal tracking-wide text-white">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-16">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-lg font-normal tracking-wide transition-colors duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden"
      >
        {/* Floating glassmorphism elements */}
        <div className="floating-element-1 absolute top-20 left-20 w-32 h-32 bg-[#8BC34A]/10 backdrop-blur-md rounded-full border border-[#8BC34A]/30 organic-glow"></div>
        <div className="floating-element-2 absolute bottom-40 right-32 w-24 h-24 bg-[#4CAF50]/10 backdrop-blur-md rounded-full border border-[#4CAF50]/30 organic-glow"></div>
        <div className="floating-element-3 absolute top-1/2 right-20 w-16 h-16 bg-[#66BB6A]/10 backdrop-blur-md rounded-full border border-[#66BB6A]/30 organic-glow"></div>
        
        <div className="text-center max-w-4xl relative z-20">
          {/* Glassmorphism card for main content */}
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl border border-[#8BC34A]/30 p-16 shadow-2xl organic-glow">
          <div className="mb-20">
            <div className="hero-icon w-28 h-28 bg-[#8BC34A]/20 backdrop-blur-md rounded-full mx-auto mb-16 flex items-center justify-center shadow-lg border border-[#8BC34A]/40 organic-glow">
              <Brain className="w-14 h-14 text-[#8BC34A]" style={{ filter: 'drop-shadow(0 0 10px rgba(139, 195, 74, 0.7))' }} />
            </div>
            
            <h1 className="hero-title text-7xl md:text-9xl font-light mb-12 text-white tracking-tight leading-none drop-shadow-lg">
              Your Name Here
            </h1>
            
            <div className="space-y-6 mb-20">
              <p className="hero-subtitle text-3xl md:text-4xl font-normal text-[#8BC34A] tracking-wide drop-shadow-md" style={{ filter: 'drop-shadow(0 0 8px rgba(139, 195, 74, 0.5))' }}>
                AI/ML Engineer
              </p>
              <p className="hero-description text-xl text-white/80 font-normal tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                Computer Science @ Nile University — Building intelligent systems that bridge data and human understanding
              </p>
            </div>
          </div>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-8 justify-center mb-24">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-[#8BC34A]/20 hover:bg-[#8BC34A]/30 backdrop-blur-md px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 border border-[#8BC34A]/40 hover:border-[#8BC34A]/60 text-white hover:shadow-lg rounded-lg organic-glow"
            >
              View Work
            </button>
            <button className="border border-[#8BC34A]/30 hover:border-[#8BC34A]/50 px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4 hover:bg-[#8BC34A]/10 backdrop-blur-md text-white rounded-lg">
              <Download className="w-5 h-5" />
              Resume
            </button>
          </div>

          <div className="animate-bounce mt-8">
            <ChevronDown 
              className="w-8 h-8 text-[#8BC34A]/70 mx-auto cursor-pointer hover:text-[#8BC34A] transition-colors duration-300 drop-shadow-md"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-8 bg-gradient-to-br from-[#1B5E20]/30 to-[#2E7D32]/20 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-6xl font-light text-center mb-24 text-white tracking-tight">
            About
          </h2>
          
          <div className="grid md:grid-cols-5 gap-20 items-start">
            <div className="about-content md:col-span-3 space-y-10">
              <p className="text-2xl font-normal text-white/90 leading-relaxed">
                I'm a Computer Science sophomore at Nile University (GPA: 3.76) driven by the belief that data tells profound stories—I help decode them into actionable insights that solve real problems.
              </p>
              
              <p className="text-2xl font-normal text-white/90 leading-relaxed">
                My journey began with a fundamental question: "How can intelligent systems make healthcare more accessible?" This inquiry has guided me through machine learning pipelines, generative AI applications, and hardware integration projects.
              </p>
              
              <p className="text-2xl font-normal text-white/90 leading-relaxed">
                I build ethical, impactful AI solutions that serve underserved communities—developing diagnostic tools for remote healthcare and creating educational platforms powered by generative AI.
              </p>
            </div>
            
            <div className="about-sidebar md:col-span-2">
              <div className="bg-black/30 backdrop-blur-md p-10 border border-[#8BC34A]/30 rounded-lg organic-glow">
                <h3 className="text-xl font-normal mb-10 text-[#307672] tracking-wide">
                  Current Focus
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                    <span className="font-normal text-white leading-relaxed text-lg">End-to-end ML pipeline development</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                    <span className="font-normal text-white leading-relaxed text-lg">Generative AI integration</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                    <span className="font-normal text-white leading-relaxed text-lg">Healthcare AI applications</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                    <span className="font-normal text-white leading-relaxed text-lg">Full-stack AI systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 px-8 bg-gradient-to-br from-[#0F2027]/80 to-[#203A43]/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-6xl font-light text-center mb-24 text-white tracking-tight">
            Projects
          </h2>
          
          {/* Project 1: Heart Disease Predictor */}
          <div className="project-card mb-40">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-[#8BC34A]/20 backdrop-blur-md flex items-center justify-center rounded-lg border border-[#8BC34A]/30 organic-glow">
                    <Database className="w-8 h-8 text-[#8BC34A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-normal text-white tracking-wide">
                      ML Heart Disease Predictor
                    </h3>
                    <p className="text-[#8BC34A] font-normal tracking-wide text-lg">
                      Sprints x Microsoft Summer Camp 2025
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-normal text-[#8BC34A] mb-4 tracking-wide text-xl">Problem Statement</h4>
                    <p className="text-white/90 font-normal leading-relaxed text-lg">
                      Cardiovascular disease remains the leading cause of death globally. Early detection through data-driven risk assessment can save lives by enabling preventive interventions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal text-[#8BC34A] mb-4 tracking-wide text-xl">Technical Approach</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'K-Means', 'PCA'].map(tech => (
                        <span key={tech} className="bg-black/30 backdrop-blur-md px-4 py-2 text-sm font-normal tracking-wide text-white border border-[#8BC34A]/30 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/90 font-normal leading-relaxed text-lg">
                      Built complete end-to-end ML pipeline implementing supervised learning (Random Forest, SVM) and unsupervised techniques (K-Means clustering, PCA) to identify risk patterns and reduce dimensionality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-normal text-[#8BC34A] mb-8 tracking-wide text-xl">Results & Impact</h4>
                  <div className="bg-black/30 backdrop-blur-md p-10 border border-[#8BC34A]/30 rounded-lg organic-glow">
                    <div className="grid grid-cols-2 gap-10 text-center mb-8">
                      <div>
                        <div className="text-4xl font-normal text-[#8BC34A] mb-3">92%</div>
                        <div className="text-base font-normal text-white/70 tracking-wide">Model Accuracy</div>
                      </div>
                      <div>
                        <div className="text-4xl font-normal text-[#8BC34A] mb-3">40%</div>
                        <div className="text-base font-normal text-white/70 tracking-wide">Faster Processing</div>
                      </div>
                    </div>
                    <p className="text-white font-normal leading-relaxed text-center text-lg">
                      Delivered actionable insights identifying key risk factors for preventive care focus
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <button className="flex items-center gap-4 bg-black/30 backdrop-blur-md hover:bg-black/40 px-8 py-4 transition-all duration-300 font-normal tracking-wide border border-[#8BC34A]/30 hover:border-[#8BC34A]/50 rounded">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                  <button className="flex items-center gap-4 bg-[#8BC34A]/80 hover:bg-[#8BC34A] px-8 py-4 transition-all duration-300 font-normal tracking-wide rounded organic-glow">
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Generative AI Web App */}
          <div className="project-card mb-40">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-[#8BC34A]/20 backdrop-blur-md flex items-center justify-center rounded-lg border border-[#8BC34A]/30 organic-glow">
                    <Brain className="w-8 h-8 text-[#8BC34A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-normal text-white tracking-wide">
                      Generative AI Academic Assistant
                    </h3>
                    <p className="text-[#8BC34A] font-normal tracking-wide text-lg">
                      May 2024
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-normal text-[#8BC34A] mb-4 tracking-wide text-xl">Problem Statement</h4>
                    <p className="text-white/90 font-normal leading-relaxed text-lg">
                      Students need personalized, intelligent academic support providing detailed explanations, study materials generation, and adaptive learning—available 24/7.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal text-[#8BC34A] mb-4 tracking-wide text-xl">Technical Approach</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['React', 'Flask', 'Google Gemini API', 'Prompt Engineering', 'PDF Generation'].map(tech => (
                        <span key={tech} className="bg-black/30 backdrop-blur-md px-4 py-2 text-sm font-normal tracking-wide text-white border border-[#8BC34A]/30 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/90 font-normal leading-relaxed text-lg">
                      Architected full-stack solution with sophisticated prompt templates for educational contexts, real-time API communication, and seamless user experience across frontend and AI layers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-normal text-[#8BC34A] mb-8 tracking-wide text-xl">Key Features</h4>
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                      <span className="font-normal text-white leading-relaxed text-lg">Context-aware academic responses with subject expertise</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                      <span className="font-normal text-white leading-relaxed text-lg">PDF export for study materials and session summaries</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                      <span className="font-normal text-white leading-relaxed text-lg">Responsive design for mobile study sessions</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                      <span className="font-normal text-white leading-relaxed text-lg">Real-time advanced language model integration</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <button className="flex items-center gap-4 bg-black/30 backdrop-blur-md hover:bg-black/40 px-8 py-4 transition-all duration-300 font-normal tracking-wide border border-[#8BC34A]/30 hover:border-[#8BC34A]/50 rounded">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                  <button className="flex items-center gap-4 bg-[#8BC34A]/80 hover:bg-[#8BC34A] px-8 py-4 transition-all duration-300 font-normal tracking-wide rounded organic-glow">
                    <ExternalLink className="w-5 h-5" />
                    App
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Arduino Line-Follower */}
          <div className="project-card mb-20">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-[#8BC34A]/20 backdrop-blur-md flex items-center justify-center rounded-lg border border-[#8BC34A]/30 organic-glow">
                    <Cpu className="w-8 h-8 text-[#8BC34A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-normal text-white tracking-wide">
                      Arduino Line-Follower Car
                    </h3>
                    <p className="text-[#8BC34A] font-normal tracking-wide text-lg">
                      Hardware-Software Integration
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-normal text-[#8BC34A] mb-4 tracking-wide text-xl">Problem Statement</h4>
                    <p className="text-white/90 font-normal leading-relaxed text-lg">
                      Autonomous navigation requires real-time sensor processing and decision-making algorithms. Building from scratch demonstrates systems thinking and hardware-software integration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal text-[#8BC34A] mb-4 tracking-wide text-xl">Technical Approach</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['Arduino C++', 'Sensor Integration', 'PID Control', 'Real-time Processing'].map(tech => (
                        <span key={tech} className="bg-black/30 backdrop-blur-md px-4 py-2 text-sm font-normal tracking-wide text-white border border-[#8BC34A]/30 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/90 font-normal leading-relaxed text-lg">
                      Implemented PID control algorithms for smooth path following, optimized sensor reading frequency, and developed robust error-handling for various track conditions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-normal text-[#8BC34A] mb-8 tracking-wide text-xl">AI/ML Relevance</h4>
                  <p className="text-white/90 font-normal leading-relaxed mb-8 text-lg">
                    Demonstrates foundational understanding of sensor-data processing and real-time decision-making—core skills directly transferable to robotics, edge AI, and autonomous systems development.
                  </p>
                  
                  <div className="bg-black/30 backdrop-blur-md p-8 border border-[#8BC34A]/30 rounded-lg organic-glow">
                    <h5 className="font-normal text-white mb-6 tracking-wide text-lg">Transferable Skills</h5>
                    <div className="space-y-4 text-base text-white/80 font-normal">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#8BC34A] rounded-full"></div>
                        <span>Real-time data processing and filtering</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#8BC34A] rounded-full"></div>
                        <span>Algorithm optimization under constraints</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#8BC34A] rounded-full"></div>
                        <span>Sensor fusion and calibration techniques</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <button className="flex items-center gap-4 bg-black/30 backdrop-blur-md hover:bg-black/40 px-8 py-4 transition-all duration-300 font-normal tracking-wide border border-[#8BC34A]/30 hover:border-[#8BC34A]/50 rounded">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                  <button className="flex items-center gap-4 bg-[#8BC34A]/80 hover:bg-[#8BC34A] px-8 py-4 transition-all duration-300 font-normal tracking-wide rounded organic-glow">
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-40 px-8 bg-gradient-to-br from-[#1B5E20]/30 to-[#2E7D32]/20 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-6xl font-light text-center mb-24 text-white tracking-tight">
            Experience
          </h2>
          
          <div className="experience-card bg-black/30 backdrop-blur-md p-16 border border-[#8BC34A]/30 rounded-lg organic-glow">
            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-[#8BC34A]/20 backdrop-blur-md flex items-center justify-center rounded-lg border border-[#8BC34A]/30 organic-glow">
                <Award className="w-10 h-10 text-[#8BC34A]" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-normal text-white mb-4 tracking-wide">
                  Machine Learning Intensive Program
                </h3>
                <p className="text-[#8BC34A] font-normal tracking-wide mb-12 text-xl">
                  Sprints x Microsoft Summer Camp 2025
                </p>
                
                <div className="space-y-12">
                  <p className="text-2xl font-normal text-white leading-relaxed">
                    Completed intensive 6-week bootcamp-level training in machine learning and data science, working on real-world healthcare datasets with industry mentors from Microsoft.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h4 className="font-normal text-[#8BC34A] mb-8 tracking-wide text-xl">Key Achievements</h4>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                          <span className="font-normal text-white leading-relaxed text-lg">Built end-to-end ML pipeline with 92% accuracy</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                          <span className="font-normal text-white leading-relaxed text-lg">Mastered supervised & unsupervised learning techniques</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                          <span className="font-normal text-white leading-relaxed text-lg">Developed interpretable models for healthcare applications</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                          <span className="font-normal text-white leading-relaxed text-lg">Collaborated on cross-functional data strategy</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-normal text-[#8BC34A] mb-8 tracking-wide text-xl">Skills Developed</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {['Python', 'Scikit-learn', 'Pandas', 'Feature Engineering', 'Model Evaluation', 'Data Visualization', 'Statistical Analysis', 'Business Intelligence'].map(skill => (
                          <span key={skill} className="bg-black/40 backdrop-blur-md px-4 py-3 text-sm font-normal text-white text-center tracking-wide border border-[#8BC34A]/30 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 px-8 bg-gradient-to-br from-[#0F2027]/80 to-[#203A43]/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-6xl font-light text-center mb-24 text-white tracking-tight">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="skill-card bg-black/30 backdrop-blur-md p-10 border border-[#8BC34A]/30 rounded-lg organic-glow">
                <h3 className="text-2xl font-normal text-white mb-10 flex items-center gap-4 tracking-wide">
                  {category === 'Programming Languages' && <Code className="w-6 h-6 text-[#8BC34A]" />}
                  {category === 'ML/AI' && <Brain className="w-6 h-6 text-[#8BC34A]" />}
                  {category === 'Data Analysis' && <Database className="w-6 h-6 text-[#8BC34A]" />}
                  {category === 'Generative AI' && <Lightbulb className="w-6 h-6 text-[#8BC34A]" />}
                  {category === 'Web Development' && <Globe className="w-6 h-6 text-[#8BC34A]" />}
                  {category === 'Tools & Platforms' && <Cpu className="w-6 h-6 text-[#8BC34A]" />}
                  {category}
                </h3>
                <div className="space-y-6">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-[#8BC34A] rounded-full"></div>
                      <span className="font-normal text-white tracking-wide text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-black/30 backdrop-blur-md p-16 border border-[#8BC34A]/30 rounded-lg organic-glow">
            <h3 className="text-3xl font-normal text-center mb-16 text-white tracking-wide">
              Professional Skills & Languages
            </h3>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="font-normal text-[#8BC34A] mb-8 tracking-wide text-xl">Professional Skills</h4>
                <div className="space-y-6">
                  {['Problem-solving & analytical thinking', 'Cross-functional collaboration', 'Technical communication', 'Project management', 'Creative design thinking'].map(skill => (
                    <div key={skill} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                      <span className="font-normal text-white leading-relaxed text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-normal text-[#8BC34A] mb-8 tracking-wide text-xl">Languages & Interests</h4>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#8BC34A] rounded-full mt-2"></div>
                    <span className="font-normal text-white leading-relaxed text-lg">Arabic (Native), English (Fluent)</span>
                  </div>
                </div>
                <p className="text-xl text-white/80 font-normal tracking-wide max-w-3xl mx-auto leading-relaxed">
                  <span className="text-[#8BC34A]">Beyond Code:</span> Graphic design reviewer at NU Book Club, combining aesthetic sensibility with technical precision. Gaming and digital design fuel creative problem-solving approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-32 px-8 bg-gradient-to-br from-[#1B5E20]/30 to-[#2E7D32]/20 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-16 text-white tracking-tight">
            Future Vision
          </h2>
          <p className="text-3xl font-normal text-white leading-relaxed">
            In three years, I envision myself building AI-powered diagnostic tools that make healthcare accessible in underserved regions, combining technical expertise with social impact to create systems that save lives through intelligent data analysis.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-8 bg-gradient-to-br from-[#0F2027]/80 to-[#203A43]/60 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title text-6xl font-light mb-16 text-white tracking-tight">
            Contact
          </h2>
          <p className="text-2xl font-normal text-white mb-20 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss AI/ML projects, research opportunities, or innovative ideas that create real-world impact.
          </p>
          
          <div className="contact-buttons flex flex-col sm:flex-row gap-8 justify-center mb-24">
            <button className="contact-button bg-[#8BC34A]/80 hover:bg-[#8BC34A] px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4 rounded organic-glow">
              <Mail className="w-6 h-6" />
              Email
            </button>
            <button className="contact-button border border-[#8BC34A]/30 hover:border-[#8BC34A] px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4 hover:bg-[#8BC34A]/10 backdrop-blur-md rounded">
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </button>
            <button className="contact-button border border-[#8BC34A]/30 hover:border-[#8BC34A] px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4 hover:bg-[#8BC34A]/10 backdrop-blur-md rounded">
              <Github className="w-6 h-6" />
              GitHub
            </button>
          </div>
          
          <div className="text-white/70 space-y-4 text-lg font-normal">
            <p>📍 Nile University, Egypt</p>
            <p>💼 Open to internships, research opportunities, and collaborations</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-[#8BC34A]/30 bg-gradient-to-br from-[#1B5E20]/30 to-[#2E7D32]/20 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 font-normal tracking-wide text-lg">
            © 2025 Your Name. Built with React, TypeScript, and passion for AI.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;