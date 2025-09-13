import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Linkedin, Code, Brain, Database, Cpu, Globe, Award, User, Briefcase, Lightbulb, Download } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
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
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScrollSection);
    return () => window.removeEventListener('scroll', handleScrollSection);
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
    <div className="bg-[#1A3C40] text-[#E4EDDB] min-h-screen font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1A3C40]/20 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
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
        style={{
          background: `linear-gradient(45deg, 
            #1A3C40 0%, 
            #144D53 25%, 
            #307672 50%, 
            #144D53 75%, 
            #1A3C40 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease-in-out infinite'
        }}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        
        {/* Floating glassmorphism elements */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
          }}
        ></div>
        <div 
          className="absolute bottom-40 right-32 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          style={{
            transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.08}deg)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.1}deg)`
          }}
        ></div>
        
        <div className={`text-center max-w-4xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } relative z-10`}>
          {/* Glassmorphism card for main content */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-16 shadow-2xl">
          <div className="mb-20">
            <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-full mx-auto mb-16 flex items-center justify-center shadow-lg border border-white/30">
              <Brain className="w-14 h-14 text-white" />
            </div>
            
            <h1 className="text-7xl md:text-9xl font-light mb-12 text-white tracking-tight leading-none drop-shadow-lg">
              Your Name Here
            </h1>
            
            <div className="space-y-6 mb-20">
              <p className="text-3xl md:text-4xl font-normal text-white/90 tracking-wide drop-shadow-md">
                AI/ML Engineer
              </p>
              <p className="text-xl text-white/80 font-normal tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                Computer Science @ Nile University — Building intelligent systems that bridge data and human understanding
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 border border-white/30 hover:border-white/50 text-white hover:shadow-lg rounded-lg"
            >
              View Work
            </button>
            <button className="border border-white/30 hover:border-white/50 px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4 hover:bg-white/10 backdrop-blur-md text-white rounded-lg">
              <Download className="w-5 h-5" />
              Resume
            </button>
          </div>

          <div className="animate-bounce mt-8">
            <ChevronDown 
              className="w-8 h-8 text-white/70 mx-auto cursor-pointer hover:text-white transition-colors duration-300 drop-shadow-md"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-8 bg-[#144D53]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-light text-center mb-24 text-[#E4EDDB] tracking-tight">
            About
          </h2>
          
          <div className="grid md:grid-cols-5 gap-20 items-start">
            <div className="md:col-span-3 space-y-10">
              <p className="text-2xl font-normal text-[#E4EDDB] leading-relaxed">
                I'm a Computer Science sophomore at Nile University (GPA: 3.76) driven by the belief that data tells profound stories—I help decode them into actionable insights that solve real problems.
              </p>
              
              <p className="text-2xl font-normal text-[#E4EDDB] leading-relaxed">
                My journey began with a fundamental question: "How can intelligent systems make healthcare more accessible?" This inquiry has guided me through machine learning pipelines, generative AI applications, and hardware integration projects.
              </p>
              
              <p className="text-2xl font-normal text-[#E4EDDB] leading-relaxed">
                I build ethical, impactful AI solutions that serve underserved communities—developing diagnostic tools for remote healthcare and creating educational platforms powered by generative AI.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-[#1A3C40]/60 p-10 border border-[#307672]/30">
                <h3 className="text-xl font-normal mb-10 text-[#307672] tracking-wide">
                  Current Focus
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                    <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">End-to-end ML pipeline development</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                    <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Generative AI integration</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                    <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Healthcare AI applications</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                    <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Full-stack AI systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 px-8 bg-[#1A3C40]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-light text-center mb-24 text-[#E4EDDB] tracking-tight">
            Projects
          </h2>
          
          {/* Project 1: Heart Disease Predictor */}
          <div className="mb-40">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-[#307672] flex items-center justify-center">
                    <Database className="w-8 h-8 text-[#E4EDDB]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-normal text-[#E4EDDB] tracking-wide">
                      ML Heart Disease Predictor
                    </h3>
                    <p className="text-[#307672] font-normal tracking-wide text-lg">
                      Sprints x Microsoft Summer Camp 2025
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-normal text-[#307672] mb-4 tracking-wide text-xl">Problem Statement</h4>
                    <p className="text-[#E4EDDB]/90 font-normal leading-relaxed text-lg">
                      Cardiovascular disease remains the leading cause of death globally. Early detection through data-driven risk assessment can save lives by enabling preventive interventions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal text-[#307672] mb-4 tracking-wide text-xl">Technical Approach</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'K-Means', 'PCA'].map(tech => (
                        <span key={tech} className="bg-[#144D53] px-4 py-2 text-sm font-normal tracking-wide text-[#E4EDDB] border border-[#307672]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-[#E4EDDB]/90 font-normal leading-relaxed text-lg">
                      Built complete end-to-end ML pipeline implementing supervised learning (Random Forest, SVM) and unsupervised techniques (K-Means clustering, PCA) to identify risk patterns and reduce dimensionality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-normal text-[#307672] mb-8 tracking-wide text-xl">Results & Impact</h4>
                  <div className="bg-[#144D53]/60 p-10 border border-[#307672]/30">
                    <div className="grid grid-cols-2 gap-10 text-center mb-8">
                      <div>
                        <div className="text-4xl font-normal text-[#307672] mb-3">92%</div>
                        <div className="text-base font-normal text-[#E4EDDB]/70 tracking-wide">Model Accuracy</div>
                      </div>
                      <div>
                        <div className="text-4xl font-normal text-[#307672] mb-3">40%</div>
                        <div className="text-base font-normal text-[#E4EDDB]/70 tracking-wide">Faster Processing</div>
                      </div>
                    </div>
                    <p className="text-[#E4EDDB] font-normal leading-relaxed text-center text-lg">
                      Delivered actionable insights identifying key risk factors for preventive care focus
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <button className="flex items-center gap-4 bg-[#144D53] hover:bg-[#144D53]/80 px-8 py-4 transition-all duration-300 font-normal tracking-wide border border-[#307672]/20 hover:border-[#307672]/50">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                  <button className="flex items-center gap-4 bg-[#307672] hover:bg-[#307672]/80 px-8 py-4 transition-all duration-300 font-normal tracking-wide">
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Generative AI Web App */}
          <div className="mb-40">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-[#307672] flex items-center justify-center">
                    <Brain className="w-8 h-8 text-[#E4EDDB]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-normal text-[#E4EDDB] tracking-wide">
                      Generative AI Academic Assistant
                    </h3>
                    <p className="text-[#307672] font-normal tracking-wide text-lg">
                      May 2024
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-normal text-[#307672] mb-4 tracking-wide text-xl">Problem Statement</h4>
                    <p className="text-[#E4EDDB]/90 font-normal leading-relaxed text-lg">
                      Students need personalized, intelligent academic support providing detailed explanations, study materials generation, and adaptive learning—available 24/7.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal text-[#307672] mb-4 tracking-wide text-xl">Technical Approach</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['React', 'Flask', 'Google Gemini API', 'Prompt Engineering', 'PDF Generation'].map(tech => (
                        <span key={tech} className="bg-[#144D53] px-4 py-2 text-sm font-normal tracking-wide text-[#E4EDDB] border border-[#307672]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-[#E4EDDB]/90 font-normal leading-relaxed text-lg">
                      Architected full-stack solution with sophisticated prompt templates for educational contexts, real-time API communication, and seamless user experience across frontend and AI layers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-normal text-[#307672] mb-8 tracking-wide text-xl">Key Features</h4>
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                      <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Context-aware academic responses with subject expertise</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                      <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">PDF export for study materials and session summaries</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                      <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Responsive design for mobile study sessions</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                      <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Real-time advanced language model integration</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <button className="flex items-center gap-4 bg-[#144D53] hover:bg-[#144D53]/80 px-8 py-4 transition-all duration-300 font-normal tracking-wide border border-[#307672]/20 hover:border-[#307672]/50">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                  <button className="flex items-center gap-4 bg-[#307672] hover:bg-[#307672]/80 px-8 py-4 transition-all duration-300 font-normal tracking-wide">
                    <ExternalLink className="w-5 h-5" />
                    App
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Arduino Line-Follower */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-[#307672] flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-[#E4EDDB]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-normal text-[#E4EDDB] tracking-wide">
                      Arduino Line-Follower Car
                    </h3>
                    <p className="text-[#307672] font-normal tracking-wide text-lg">
                      Hardware-Software Integration
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-normal text-[#307672] mb-4 tracking-wide text-xl">Problem Statement</h4>
                    <p className="text-[#E4EDDB]/90 font-normal leading-relaxed text-lg">
                      Autonomous navigation requires real-time sensor processing and decision-making algorithms. Building from scratch demonstrates systems thinking and hardware-software integration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-normal text-[#307672] mb-4 tracking-wide text-xl">Technical Approach</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['Arduino C++', 'Sensor Integration', 'PID Control', 'Real-time Processing'].map(tech => (
                        <span key={tech} className="bg-[#144D53] px-4 py-2 text-sm font-normal tracking-wide text-[#E4EDDB] border border-[#307672]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-[#E4EDDB]/90 font-normal leading-relaxed text-lg">
                      Implemented PID control algorithms for smooth path following, optimized sensor reading frequency, and developed robust error-handling for various track conditions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h4 className="font-normal text-[#307672] mb-8 tracking-wide text-xl">AI/ML Relevance</h4>
                  <p className="text-[#E4EDDB]/90 font-normal leading-relaxed mb-8 text-lg">
                    Demonstrates foundational understanding of sensor-data processing and real-time decision-making—core skills directly transferable to robotics, edge AI, and autonomous systems development.
                  </p>
                  
                  <div className="bg-[#144D53]/60 p-8 border border-[#307672]/30">
                    <h5 className="font-normal text-[#E4EDDB] mb-6 tracking-wide text-lg">Transferable Skills</h5>
                    <div className="space-y-4 text-base text-[#E4EDDB]/80 font-normal">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#307672] rounded-full"></div>
                        <span>Real-time data processing and filtering</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#307672] rounded-full"></div>
                        <span>Algorithm optimization under constraints</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#307672] rounded-full"></div>
                        <span>Sensor fusion and calibration techniques</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <button className="flex items-center gap-4 bg-[#144D53] hover:bg-[#144D53]/80 px-8 py-4 transition-all duration-300 font-normal tracking-wide border border-[#307672]/20 hover:border-[#307672]/50">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                  <button className="flex items-center gap-4 bg-[#307672] hover:bg-[#307672]/80 px-8 py-4 transition-all duration-300 font-normal tracking-wide">
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
      <section id="experience" className="py-40 px-8 bg-[#144D53]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-light text-center mb-24 text-[#E4EDDB] tracking-tight">
            Experience
          </h2>
          
          <div className="bg-[#1A3C40]/60 p-16 border border-[#307672]/30">
            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-[#307672] flex items-center justify-center">
                <Award className="w-10 h-10 text-[#E4EDDB]" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-normal text-[#E4EDDB] mb-4 tracking-wide">
                  Machine Learning Intensive Program
                </h3>
                <p className="text-[#307672] font-normal tracking-wide mb-12 text-xl">
                  Sprints x Microsoft Summer Camp 2025
                </p>
                
                <div className="space-y-12">
                  <p className="text-2xl font-normal text-[#E4EDDB] leading-relaxed">
                    Completed intensive 6-week bootcamp-level training in machine learning and data science, working on real-world healthcare datasets with industry mentors from Microsoft.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h4 className="font-normal text-[#307672] mb-8 tracking-wide text-xl">Key Achievements</h4>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                          <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Built end-to-end ML pipeline with 92% accuracy</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                          <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Mastered supervised & unsupervised learning techniques</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                          <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Developed interpretable models for healthcare applications</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                          <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Collaborated on cross-functional data strategy</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-normal text-[#307672] mb-8 tracking-wide text-xl">Skills Developed</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {['Python', 'Scikit-learn', 'Pandas', 'Feature Engineering', 'Model Evaluation', 'Data Visualization', 'Statistical Analysis', 'Business Intelligence'].map(skill => (
                          <span key={skill} className="bg-[#144D53] px-4 py-3 text-sm font-normal text-[#E4EDDB] text-center tracking-wide border border-[#307672]/20">
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
      <section id="skills" className="py-40 px-8 bg-[#1A3C40]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-light text-center mb-24 text-[#E4EDDB] tracking-tight">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-[#144D53]/60 p-10 border border-[#307672]/30">
                <h3 className="text-2xl font-normal text-[#E4EDDB] mb-10 flex items-center gap-4 tracking-wide">
                  {category === 'Programming Languages' && <Code className="w-6 h-6 text-[#307672]" />}
                  {category === 'ML/AI' && <Brain className="w-6 h-6 text-[#307672]" />}
                  {category === 'Data Analysis' && <Database className="w-6 h-6 text-[#307672]" />}
                  {category === 'Generative AI' && <Lightbulb className="w-6 h-6 text-[#307672]" />}
                  {category === 'Web Development' && <Globe className="w-6 h-6 text-[#307672]" />}
                  {category === 'Tools & Platforms' && <Cpu className="w-6 h-6 text-[#307672]" />}
                  {category}
                </h3>
                <div className="space-y-6">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-[#307672] rounded-full"></div>
                      <span className="font-normal text-[#E4EDDB] tracking-wide text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-[#144D53]/60 p-16 border border-[#307672]/30">
            <h3 className="text-3xl font-normal text-center mb-16 text-[#E4EDDB] tracking-wide">
              Professional Skills & Languages
            </h3>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="font-normal text-[#307672] mb-8 tracking-wide text-xl">Professional Skills</h4>
                <div className="space-y-6">
                  {['Problem-solving & analytical thinking', 'Cross-functional collaboration', 'Technical communication', 'Project management', 'Creative design thinking'].map(skill => (
                    <div key={skill} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                      <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-normal text-[#307672] mb-8 tracking-wide text-xl">Languages & Interests</h4>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#307672] rounded-full mt-2"></div>
                    <span className="font-normal text-[#E4EDDB] leading-relaxed text-lg">Arabic (Native), English (Fluent)</span>
                  </div>
                </div>
                <p className="text-xl text-[#E4EDDB]/80 font-normal tracking-wide max-w-3xl mx-auto leading-relaxed">
                  <span className="text-[#307672]">Beyond Code:</span> Graphic design reviewer at NU Book Club, combining aesthetic sensibility with technical precision. Gaming and digital design fuel creative problem-solving approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-32 px-8 bg-[#144D53]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-16 text-[#E4EDDB] tracking-tight">
            Future Vision
          </h2>
          <p className="text-3xl font-normal text-[#E4EDDB] leading-relaxed">
            In three years, I envision myself building AI-powered diagnostic tools that make healthcare accessible in underserved regions, combining technical expertise with social impact to create systems that save lives through intelligent data analysis.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-8 bg-[#1A3C40]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl font-light mb-16 text-[#E4EDDB] tracking-tight">
            Contact
          </h2>
          <p className="text-2xl font-normal text-[#E4EDDB] mb-20 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss AI/ML projects, research opportunities, or innovative ideas that create real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24">
            <button className="bg-[#307672] hover:bg-[#307672]/80 px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4">
              <Mail className="w-6 h-6" />
              Email
            </button>
            <button className="border border-[#E4EDDB]/30 hover:border-[#307672] px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4 hover:bg-[#307672]/10">
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </button>
            <button className="border border-[#E4EDDB]/30 hover:border-[#307672] px-16 py-5 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-4 hover:bg-[#307672]/10">
              <Github className="w-6 h-6" />
              GitHub
            </button>
          </div>
          
          <div className="text-[#E4EDDB]/70 space-y-4 text-lg font-normal">
            <p>📍 Nile University, Egypt</p>
            <p>💼 Open to internships, research opportunities, and collaborations</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-[#307672]/30 bg-[#144D53]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#E4EDDB]/60 font-normal tracking-wide text-lg">
            © 2025 Your Name. Built with React, TypeScript, and passion for AI.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;