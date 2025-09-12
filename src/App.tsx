import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Linkedin, Code, Brain, Database, Cpu, Globe, Award, User, Briefcase, Lightbulb, Download } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-950/90 backdrop-blur-sm border-b border-stone-800/50 z-50">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-light tracking-wide text-emerald-400">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-12">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-emerald-400' 
                      : 'text-stone-400 hover:text-stone-200'
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
      <section id="hero" className="min-h-screen flex items-center justify-center px-8">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-16">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full mx-auto mb-12 flex items-center justify-center">
              <Brain className="w-12 h-12 text-stone-100" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 text-stone-100 tracking-tight">
              Your Name Here
            </h1>
            
            <div className="space-y-4 mb-16">
              <p className="text-2xl md:text-3xl font-light text-emerald-400 tracking-wide">
                AI/ML Engineer
              </p>
              <p className="text-lg text-stone-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Computer Science @ Nile University — Building intelligent systems that bridge data and human understanding
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-700 hover:bg-emerald-600 px-12 py-4 font-light tracking-wide transition-colors duration-300"
            >
              View Work
            </button>
            <button className="border border-stone-600 hover:border-emerald-400 px-12 py-4 font-light tracking-wide transition-colors duration-300 flex items-center justify-center gap-3">
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown 
              className="w-6 h-6 text-stone-500 mx-auto cursor-pointer hover:text-emerald-400 transition-colors duration-300"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extralight text-center mb-20 text-stone-200 tracking-tight">
            About
          </h2>
          
          <div className="grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-3 space-y-8">
              <p className="text-xl font-light text-stone-300 leading-relaxed">
                I'm a Computer Science sophomore at Nile University (GPA: 3.76) driven by the belief that data tells profound stories—I help decode them into actionable insights that solve real problems.
              </p>
              
              <p className="text-xl font-light text-stone-300 leading-relaxed">
                My journey began with a fundamental question: "How can intelligent systems make healthcare more accessible?" This inquiry has guided me through machine learning pipelines, generative AI applications, and hardware integration projects.
              </p>
              
              <p className="text-xl font-light text-stone-300 leading-relaxed">
                I build ethical, impactful AI solutions that serve underserved communities—developing diagnostic tools for remote healthcare and creating educational platforms powered by generative AI.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-stone-900/50 p-8 border border-stone-800/50">
                <h3 className="text-lg font-light mb-8 text-emerald-400 tracking-wide">
                  Current Focus
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                    <span className="font-light text-stone-300 leading-relaxed">End-to-end ML pipeline development</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                    <span className="font-light text-stone-300 leading-relaxed">Generative AI integration</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                    <span className="font-light text-stone-300 leading-relaxed">Healthcare AI applications</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                    <span className="font-light text-stone-300 leading-relaxed">Full-stack AI systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-stone-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extralight text-center mb-20 text-stone-200 tracking-tight">
            Projects
          </h2>
          
          {/* Project 1: Heart Disease Predictor */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-800 rounded-sm flex items-center justify-center">
                    <Database className="w-6 h-6 text-stone-100" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-stone-200 tracking-wide">
                      ML Heart Disease Predictor
                    </h3>
                    <p className="text-emerald-400 font-light tracking-wide">
                      Sprints x Microsoft Summer Camp 2025
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-light text-emerald-400 mb-3 tracking-wide">Problem Statement</h4>
                    <p className="text-stone-300 font-light leading-relaxed">
                      Cardiovascular disease remains the leading cause of death globally. Early detection through data-driven risk assessment can save lives by enabling preventive interventions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-light text-emerald-400 mb-3 tracking-wide">Technical Approach</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'K-Means', 'PCA'].map(tech => (
                        <span key={tech} className="bg-stone-800 px-3 py-1 text-sm font-light tracking-wide text-stone-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-stone-300 font-light leading-relaxed">
                      Built complete end-to-end ML pipeline implementing supervised learning (Random Forest, SVM) and unsupervised techniques (K-Means clustering, PCA) to identify risk patterns and reduce dimensionality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-light text-emerald-400 mb-6 tracking-wide">Results & Impact</h4>
                  <div className="bg-stone-900/50 p-8 border border-stone-800/50">
                    <div className="grid grid-cols-2 gap-8 text-center mb-6">
                      <div>
                        <div className="text-3xl font-light text-emerald-400 mb-2">92%</div>
                        <div className="text-sm font-light text-stone-400 tracking-wide">Model Accuracy</div>
                      </div>
                      <div>
                        <div className="text-3xl font-light text-emerald-400 mb-2">40%</div>
                        <div className="text-sm font-light text-stone-400 tracking-wide">Faster Processing</div>
                      </div>
                    </div>
                    <p className="text-stone-300 font-light leading-relaxed text-center">
                      Delivered actionable insights identifying key risk factors for preventive care focus
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 bg-stone-800 hover:bg-stone-700 px-6 py-3 transition-colors duration-300 font-light tracking-wide">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-600 px-6 py-3 transition-colors duration-300 font-light tracking-wide">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Generative AI Web App */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-800 rounded-sm flex items-center justify-center">
                    <Brain className="w-6 h-6 text-stone-100" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-stone-200 tracking-wide">
                      Generative AI Academic Assistant
                    </h3>
                    <p className="text-emerald-400 font-light tracking-wide">
                      May 2024
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-light text-emerald-400 mb-3 tracking-wide">Problem Statement</h4>
                    <p className="text-stone-300 font-light leading-relaxed">
                      Students need personalized, intelligent academic support providing detailed explanations, study materials generation, and adaptive learning—available 24/7.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-light text-emerald-400 mb-3 tracking-wide">Technical Approach</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['React', 'Flask', 'Google Gemini API', 'Prompt Engineering', 'PDF Generation'].map(tech => (
                        <span key={tech} className="bg-stone-800 px-3 py-1 text-sm font-light tracking-wide text-stone-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-stone-300 font-light leading-relaxed">
                      Architected full-stack solution with sophisticated prompt templates for educational contexts, real-time API communication, and seamless user experience across frontend and AI layers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-light text-emerald-400 mb-6 tracking-wide">Key Features</h4>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                      <span className="font-light text-stone-300 leading-relaxed">Context-aware academic responses with subject expertise</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                      <span className="font-light text-stone-300 leading-relaxed">PDF export for study materials and session summaries</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                      <span className="font-light text-stone-300 leading-relaxed">Responsive design for mobile study sessions</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                      <span className="font-light text-stone-300 leading-relaxed">Real-time advanced language model integration</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 bg-stone-800 hover:bg-stone-700 px-6 py-3 transition-colors duration-300 font-light tracking-wide">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-600 px-6 py-3 transition-colors duration-300 font-light tracking-wide">
                    <ExternalLink className="w-4 h-4" />
                    App
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Arduino Line-Follower */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-800 rounded-sm flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-stone-100" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-stone-200 tracking-wide">
                      Arduino Line-Follower Car
                    </h3>
                    <p className="text-emerald-400 font-light tracking-wide">
                      Hardware-Software Integration
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-light text-emerald-400 mb-3 tracking-wide">Problem Statement</h4>
                    <p className="text-stone-300 font-light leading-relaxed">
                      Autonomous navigation requires real-time sensor processing and decision-making algorithms. Building from scratch demonstrates systems thinking and hardware-software integration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-light text-emerald-400 mb-3 tracking-wide">Technical Approach</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Arduino C++', 'Sensor Integration', 'PID Control', 'Real-time Processing'].map(tech => (
                        <span key={tech} className="bg-stone-800 px-3 py-1 text-sm font-light tracking-wide text-stone-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-stone-300 font-light leading-relaxed">
                      Implemented PID control algorithms for smooth path following, optimized sensor reading frequency, and developed robust error-handling for various track conditions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-light text-emerald-400 mb-6 tracking-wide">AI/ML Relevance</h4>
                  <p className="text-stone-300 font-light leading-relaxed mb-6">
                    Demonstrates foundational understanding of sensor-data processing and real-time decision-making—core skills directly transferable to robotics, edge AI, and autonomous systems development.
                  </p>
                  
                  <div className="bg-stone-900/50 p-6 border border-stone-800/50">
                    <h5 className="font-light text-stone-200 mb-4 tracking-wide">Transferable Skills</h5>
                    <div className="space-y-3 text-sm text-stone-400 font-light">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                        <span>Real-time data processing and filtering</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                        <span>Algorithm optimization under constraints</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                        <span>Sensor fusion and calibration techniques</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 bg-stone-800 hover:bg-stone-700 px-6 py-3 transition-colors duration-300 font-light tracking-wide">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-600 px-6 py-3 transition-colors duration-300 font-light tracking-wide">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extralight text-center mb-20 text-stone-200 tracking-tight">
            Experience
          </h2>
          
          <div className="bg-stone-900/30 p-12 border border-stone-800/50">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-emerald-800 rounded-sm flex items-center justify-center">
                <Award className="w-8 h-8 text-stone-100" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-stone-200 mb-3 tracking-wide">
                  Machine Learning Intensive Program
                </h3>
                <p className="text-emerald-400 font-light tracking-wide mb-8">
                  Sprints x Microsoft Summer Camp 2025
                </p>
                
                <div className="space-y-8">
                  <p className="text-xl font-light text-stone-300 leading-relaxed">
                    Completed intensive 6-week bootcamp-level training in machine learning and data science, working on real-world healthcare datasets with industry mentors from Microsoft.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="font-light text-emerald-400 mb-6 tracking-wide">Key Achievements</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                          <span className="font-light text-stone-300 leading-relaxed">Built end-to-end ML pipeline with 92% accuracy</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                          <span className="font-light text-stone-300 leading-relaxed">Mastered supervised & unsupervised learning techniques</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                          <span className="font-light text-stone-300 leading-relaxed">Developed interpretable models for healthcare applications</span>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                          <span className="font-light text-stone-300 leading-relaxed">Collaborated on cross-functional data strategy</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-light text-emerald-400 mb-6 tracking-wide">Skills Developed</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Python', 'Scikit-learn', 'Pandas', 'Feature Engineering', 'Model Evaluation', 'Data Visualization', 'Statistical Analysis', 'Business Intelligence'].map(skill => (
                          <span key={skill} className="bg-stone-800 px-3 py-2 text-sm font-light text-stone-300 text-center tracking-wide">
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
      <section id="skills" className="py-32 px-8 bg-stone-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extralight text-center mb-20 text-stone-200 tracking-tight">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-stone-900/50 p-8 border border-stone-800/50">
                <h3 className="text-xl font-light text-stone-200 mb-8 flex items-center gap-3 tracking-wide">
                  {category === 'Programming Languages' && <Code className="w-5 h-5 text-emerald-400" />}
                  {category === 'ML/AI' && <Brain className="w-5 h-5 text-emerald-400" />}
                  {category === 'Data Analysis' && <Database className="w-5 h-5 text-emerald-400" />}
                  {category === 'Generative AI' && <Lightbulb className="w-5 h-5 text-emerald-400" />}
                  {category === 'Web Development' && <Globe className="w-5 h-5 text-emerald-400" />}
                  {category === 'Tools & Platforms' && <Cpu className="w-5 h-5 text-emerald-400" />}
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="font-light text-stone-300 tracking-wide">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-stone-900/50 p-12 border border-stone-800/50">
            <h3 className="text-2xl font-light text-center mb-12 text-stone-200 tracking-wide">
              Professional Skills & Languages
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-light text-emerald-400 mb-6 tracking-wide">Professional Skills</h4>
                <div className="space-y-4">
                  {['Problem-solving & analytical thinking', 'Cross-functional collaboration', 'Technical communication', 'Project management', 'Creative design thinking'].map(skill => (
                    <div key={skill} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                      <span className="font-light text-stone-300 leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-light text-emerald-400 mb-6 tracking-wide">Languages & Interests</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                    <span className="font-light text-stone-300 leading-relaxed">English (Fluent) • Arabic (Native)</span>
                  </div>
                </div>
                <p className="text-stone-400 font-light leading-relaxed">
                  <span className="text-emerald-400">Beyond Code:</span> Graphic design reviewer at NU Book Club, combining aesthetic sensibility with technical precision. Gaming and digital design fuel creative problem-solving approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extralight mb-12 text-stone-200 tracking-tight">
            Future Vision
          </h2>
          <p className="text-2xl font-light text-stone-300 leading-relaxed">
            In three years, I envision myself building AI-powered diagnostic tools that make healthcare accessible in underserved regions, combining technical expertise with social impact to create systems that save lives through intelligent data analysis.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-stone-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extralight mb-12 text-stone-200 tracking-tight">
            Contact
          </h2>
          <p className="text-xl font-light text-stone-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss AI/ML projects, research opportunities, or innovative ideas that create real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="bg-emerald-700 hover:bg-emerald-600 px-12 py-4 font-light tracking-wide transition-colors duration-300 flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              Email
            </button>
            <button className="border border-stone-600 hover:border-emerald-400 px-12 py-4 font-light tracking-wide transition-colors duration-300 flex items-center justify-center gap-3">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </button>
            <button className="border border-stone-600 hover:border-emerald-400 px-12 py-4 font-light tracking-wide transition-colors duration-300 flex items-center justify-center gap-3">
              <Github className="w-5 h-5" />
              GitHub
            </button>
          </div>
          
          <div className="text-stone-400 font-light space-y-2">
            <p>📍 Nile University, Egypt</p>
            <p>💼 Open to internships, research opportunities, and collaborations</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-stone-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-500 font-light tracking-wide">
            © 2025 Your Name. Built with React, TypeScript, and passion for AI.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;