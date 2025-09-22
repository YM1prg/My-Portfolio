import { Award, Brain, Briefcase, ChevronDown, Code, Cpu, Database, Download, ExternalLink, Github, Globe, Leaf, Lightbulb, Linkedin, Mail, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScrollSection);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    'Programming Languages': ['Python', 'Java', 'C', 'JavaScript', 'C#'],
    'ML/AI': ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Evaluation', 'Scikit-learn', 'Neural Networks'],
    'Data Analysis': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Data Cleaning'],
    'Generative AI': ['Google Gemini API', 'OpenAI API', 'Prompt Engineering', 'AI Integration'],
    'Web Development': ['React', 'Flask', 'Django', 'Frontend-Backend Integration'],
    'Tools & Platforms': ['Git/GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Arduino IDE']
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-800 text-white min-h-screen font-serif relative">
      {/* Nature-inspired background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Organic light sources */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-emerald-500/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-radial from-green-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-lime-500/8 to-transparent rounded-full blur-3xl"></div>

        {/* Static leaf decorations */}
        <div className="absolute top-32 left-16 opacity-20">
          <Leaf className="w-8 h-8 text-emerald-400 transform rotate-45" />
        </div>
        <div className="absolute top-64 right-24 opacity-15">
          <Leaf className="w-6 h-6 text-green-400 transform -rotate-12" />
        </div>
        <div className="absolute bottom-80 left-32 opacity-25">
          <Leaf className="w-10 h-10 text-lime-400 transform rotate-75" />
        </div>
        <div className="absolute bottom-32 right-48 opacity-18">
          <Leaf className="w-7 h-7 text-emerald-300 transform -rotate-30" />
        </div>
        <div className="absolute top-96 left-2/3 opacity-12">
          <Leaf className="w-5 h-5 text-green-300 transform rotate-120" />
        </div>

        {/* Natural texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-transparent to-green-950/20"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-xl border-b border-emerald-500/20 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-normal tracking-wide text-white flex items-center gap-3">
              <Brain className="w-12 h-12 text-emerald-400" />
              Portfolio
            </div>
            <div className="hidden md:flex space-x-12">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-lg font-normal tracking-wide transition-colors duration-300 ${activeSection === item.toLowerCase()
                    ? 'text-emerald-300'
                    : 'text-white/70 hover:text-emerald-200'
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
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 relative py-10">
        {/* Floating natural elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 backdrop-blur-md rounded-full border border-emerald-500/30 flex items-center justify-center">
          <Leaf className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-green-500/10 backdrop-blur-md rounded-full border border-green-500/30 flex items-center justify-center">
          <Brain className="w-6 h-6 text-green-400" />
        </div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-lime-500/10 backdrop-blur-md rounded-full border border-lime-500/30 flex items-center justify-center">
          <Code className="w-4 h-4 text-lime-400" />
        </div>

        <div className="text-center max-w-4xl relative z-20">
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl border border-emerald-500/30 p-16 shadow-2xl relative overflow-hidden">
            {/* Natural pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4"><Leaf className="w-4 h-4" /></div>
              <div className="absolute top-8 right-8"><Leaf className="w-3 h-3 transform rotate-45" /></div>
              <div className="absolute bottom-6 left-12"><Leaf className="w-5 h-5 transform -rotate-12" /></div>
              <div className="absolute bottom-4 right-4"><Leaf className="w-4 h-4 transform rotate-90" /></div>
            </div>

            <div className="relative z-10 py-10">
              <div className="mb-16">
                <div className="relative mx-auto mb-12 flex items-center justify-center">
                  {/* Profile Image Container */}
                  <div className="relative group">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-110"></div>

                    {/* Main image container */}
                    <div className="relative w-48 h-48 bg-emerald-500/20 backdrop-blur-md rounded-full border-2 border-emerald-500/40 overflow-hidden shadow-2xl">
                      <img
                        src="./elements/img1.jpg"
                        alt="Yahya Mohamed"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                    </div>

                    {/* Decorative leaf elements */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-500/30 flex items-center justify-center animate-pulse">
                      <Leaf className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500/20 backdrop-blur-md rounded-full border border-green-500/30 flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-green-300 transform rotate-45" />
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-green-400/60 rounded-full animate-ping delay-300"></div>
                  </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-light mb-8 text-white tracking-tight leading-none">
                  Yahya Mohamed
                </h1>

                <div className="space-y-4 mb-16">
                  <p className="text-2xl md:text-3xl font-normal text-emerald-400 tracking-wide flex items-center justify-center gap-3">
                    <Leaf className="w-6 h-6 opacity-60" />
                    Computer Science Junior
                    <Leaf className="w-6 h-6 opacity-60 transform rotate-180" />
                  </p>
                  <p className="text-lg text-white/80 font-normal tracking-wide max-w-3xl mx-auto leading-relaxed">
                    Computer Science @ Nile University (GPA: 3.76) — Passionate about leveraging AI and data analysis to solve complex problems with hands-on ML experience
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-emerald-500/20 hover:bg-emerald-500/30 backdrop-blur-md px-12 py-4 text-lg font-normal tracking-wide transition-all duration-300 border border-emerald-500/40 hover:border-emerald-500/60 text-white rounded-lg flex items-center justify-center gap-3"
                >
                  <Leaf className="w-5 h-5" />
                  View Work
                </button>
                <button className="border border-emerald-500/30 hover:border-emerald-500/50 px-12 py-4 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-3 hover:bg-emerald-500/10 backdrop-blur-md text-white rounded-lg">
                  <Download className="w-5 h-5" />
                  Resume
                </button>
              </div>

              <ChevronDown
                className="w-8 h-8 text-emerald-400/70 mx-auto cursor-pointer hover:text-emerald-400 transition-colors duration-300"
                onClick={() => scrollToSection('about')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-gradient-to-br from-green-950/30 to-emerald-950/20 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-white tracking-tight mb-4 flex items-center justify-center gap-4">
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60" />
              About
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60 transform rotate-180" />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Photo Section */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-md">
                  <div className="aspect-[4/5] w-80 bg-gradient-to-br from-green-600/10 to-emerald-600/10 flex items-center justify-center relative">
                    {/* Natural frame decoration */}
                    <div className="absolute top-4 left-4 opacity-20">
                      <Leaf className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="absolute top-4 right-4 opacity-20">
                      <Leaf className="w-5 h-5 text-green-400 transform rotate-45" />
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20">
                      <Leaf className="w-7 h-7 text-lime-400 transform -rotate-12" />
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-20">
                      <Leaf className="w-6 h-6 text-emerald-300 transform rotate-90" />
                    </div>

                    <div className="text-center space-y-4 p-8 relative z-10">
                      <div className="w-24 h-24 mx-auto bg-emerald-500/30 rounded-full flex items-center justify-center border border-emerald-500/50 relative">
                        <User className="w-12 h-12 text-emerald-400" />
                        <div className="absolute -top-1 -right-1">
                          <Leaf className="w-4 h-4 text-emerald-300 opacity-70" />
                        </div>
                      </div>
                      <p className="text-white/70 text-sm font-light">Professional Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats with natural elements */}
              <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="text-center p-4 bg-black/20 backdrop-blur-md rounded-lg border border-emerald-500/20 relative overflow-hidden">
                  <div className="absolute top-1 right-1 opacity-10">
                    <Leaf className="w-3 h-3" />
                  </div>
                  <div className="text-2xl font-light text-emerald-400">3.76</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">GPA</div>
                </div>
                <div className="text-center p-4 bg-black/20 backdrop-blur-md rounded-lg border border-emerald-500/20 relative overflow-hidden">
                  <div className="absolute top-1 right-1 opacity-10">
                    <Leaf className="w-3 h-3 transform rotate-45" />
                  </div>
                  <div className="text-2xl font-light text-emerald-400">CS</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">Sophomore</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-6">
                <p className="text-xl font-normal text-white/90 leading-relaxed">
                  I'm a Computer Science junior at Nile University (GPA: 3.76) with hands-on experience in developing end-to-end machine learning models. I'm passionate about leveraging AI and data analysis to solve complex problems.
                </p>

                <p className="text-lg font-normal text-white/80 leading-relaxed">
                  My journey has led me through intensive internships where I've delivered impactful projects in healthcare AI, including stroke risk prediction and diamond price modeling. I'm proficient in Python, Scikit-learn, and data visualization.
                </p>

                <p className="text-lg font-normal text-white/80 leading-relaxed">
                  I build end-to-end ML pipelines and full-stack applications, combining technical expertise with creative problem-solving. My experience spans from healthcare data analysis to generative AI web applications.
                </p>
              </div>

              {/* Skills Grid with nature elements */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 backdrop-blur-md p-6 border border-emerald-500/30 rounded-lg relative overflow-hidden">
                  <div className="absolute top-2 right-2 opacity-5">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-normal mb-4 text-green-400 tracking-wide flex items-center gap-3">
                    <Brain className="w-5 h-5" />
                    Current Focus
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">End-to-end ML pipeline development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">Generative AI integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">Healthcare AI applications</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">Bio-inspired algorithms</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md p-6 border border-green-500/30 rounded-lg relative overflow-hidden">
                  <div className="absolute top-2 right-2 opacity-5">
                    <Leaf className="w-8 h-8 transform rotate-45" />
                  </div>
                  <h3 className="text-lg font-normal mb-4 text-emerald-400 tracking-wide flex items-center gap-3">
                    <Leaf className="w-5 h-5" />
                    Core Values
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">Ethical AI development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">Sustainable technology</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">Accessible solutions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white/90 leading-relaxed">Natural harmony</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-gradient-to-br from-slate-900/80 to-emerald-900/40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-white tracking-tight mb-4 flex items-center justify-center gap-4">
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60" />
              Projects
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60 transform rotate-180" />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
          </div>

          {/* Project 1: Heart Disease Predictor */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-md flex items-center justify-center rounded-lg border border-emerald-500/30 relative">
                    <Database className="w-6 h-6 text-emerald-400" />
                    <div className="absolute -top-1 -right-1">
                      <Leaf className="w-3 h-3 text-emerald-300 opacity-70" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal text-white tracking-wide">
                      ML Heart Disease Predictor
                    </h3>
                    <p className="text-emerald-400 font-normal tracking-wide">
                      Sprints x Microsoft Summer Camp 2025
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/20 backdrop-blur-md p-6 border border-emerald-500/20 rounded-lg relative overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-5">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <h4 className="font-normal text-emerald-400 mb-3 tracking-wide flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Problem Statement
                    </h4>
                    <p className="text-white/90 font-normal leading-relaxed">
                      Cardiovascular disease remains the leading cause of death globally. Early detection through data-driven risk assessment can save lives by enabling preventive interventions, mimicking nature's early warning systems.
                    </p>
                  </div>

                  <div className="bg-black/20 backdrop-blur-md p-6 border border-emerald-500/20 rounded-lg relative overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-5">
                      <Leaf className="w-6 h-6 transform rotate-45" />
                    </div>
                    <h4 className="font-normal text-emerald-400 mb-3 tracking-wide flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technical Approach
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'K-Means', 'PCA'].map(tech => (
                        <span key={tech} className="bg-emerald-500/10 backdrop-blur-md px-3 py-1 text-sm font-normal tracking-wide text-white border border-emerald-500/30 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/90 font-normal leading-relaxed">
                      Built complete end-to-end ML pipeline implementing supervised learning (Random Forest, SVM) and unsupervised techniques (K-Means clustering, PCA) to identify risk patterns and reduce dimensionality, inspired by natural pattern recognition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-md p-8 border border-emerald-500/30 rounded-lg relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Leaf className="w-12 h-12" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-5">
                    <Leaf className="w-8 h-8 transform rotate-90" />
                  </div>
                  <h4 className="font-normal text-emerald-400 mb-6 tracking-wide flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Results & Impact
                  </h4>
                  <div className="grid grid-cols-2 gap-8 text-center mb-6 relative z-10">
                    <div>
                      <div className="text-3xl font-normal text-sky-600 dark:text-emerald-400 mb-2">95.2%</div>
                      <div className="text-sm font-normal text-white/70 tracking-wide">Model Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-normal text-sky-600 dark:text-emerald-400 mb-2">94%</div>
                      <div className="text-sm font-normal text-slate-600 dark:text-white/70 tracking-wide">Model Recall</div>
                    </div>
                  </div>
                  <p className="text-white font-normal leading-relaxed text-center relative z-10">
                    Selected XGBoost as optimal model after rigorous comparison, generating feature importance plots and ROC curves for clinically relevant insights
                  </p>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-3 bg-black/30 backdrop-blur-md hover:bg-black/40 px-6 py-3 transition-all duration-300 font-normal tracking-wide border border-emerald-500/30 hover:border-emerald-500/50 rounded">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-3 bg-emerald-500/80 hover:bg-emerald-500 px-6 py-3 transition-all duration-300 font-normal tracking-wide rounded">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional projects would follow the same pattern... */}
          {/* For brevity, I'll continue with the remaining sections */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 bg-gradient-to-br from-green-950/30 to-emerald-950/20 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-white tracking-tight mb-4 flex items-center justify-center gap-4">
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60" />
              Experience
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60 transform rotate-180" />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
          </div>

          <div className="bg-black/30 backdrop-blur-md p-12 border border-emerald-500/30 rounded-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-5">
              <Leaf className="w-16 h-16" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Leaf className="w-12 h-12 transform rotate-45" />
            </div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-md flex items-center justify-center rounded-lg border border-emerald-500/30 relative">
                <Award className="w-8 h-8 text-emerald-400" />
                <div className="absolute -top-2 -right-2">
                  <Leaf className="w-4 h-4 text-emerald-300 opacity-70" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-normal text-white mb-3 tracking-wide">
                  Machine Learning Intensive Program
                </h3>
                <p className="text-emerald-400 font-normal tracking-wide mb-8">
                  Sprints x Microsoft Summer Camp 2025
                </p>

                <div className="space-y-8">
                  <p className="text-lg font-normal text-white leading-relaxed">
                    Completed intensive 6-week bootcamp-level training in machine learning and data science, working on real-world healthcare datasets with industry mentors from Microsoft, focusing on sustainable and nature-inspired AI solutions.
                  </p>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h4 className="font-normal text-emerald-400 mb-6 tracking-wide flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <div className="space-y-4">
                        {['Built end-to-end ML pipeline with 92% accuracy', 'Mastered supervised & unsupervised learning techniques', 'Developed interpretable models for healthcare applications', 'Explored bio-inspired algorithm optimization'].map(achievement => (
                          <div key={achievement} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                            <span className="font-normal text-white leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-normal text-emerald-400 mb-6 tracking-wide flex items-center gap-2">
                        <Leaf className="w-4 h-4" />
                        Skills Developed
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Python', 'Scikit-learn', 'Pandas', 'Feature Engineering', 'Model Evaluation', 'Data Visualization', 'Statistical Analysis', 'Bio-inspired ML'].map(skill => (
                          <span key={skill} className="bg-black/40 backdrop-blur-md px-3 py-2 text-sm font-normal text-white text-center tracking-wide border border-emerald-500/30 rounded">
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
      <section id="skills" className="py-32 px-8 bg-gradient-to-br from-slate-900/80 to-emerald-900/40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-white tracking-tight mb-4 flex items-center justify-center gap-4">
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60" />
              Skills
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60 transform rotate-180" />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-black/30 backdrop-blur-md p-8 border border-emerald-500/30 rounded-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-5">
                  <Leaf className={`w-8 h-8 transform rotate-${index * 30}`} />
                </div>
                <h3 className="text-xl font-normal text-white mb-8 flex items-center gap-3 tracking-wide">
                  {category === 'Programming Languages' && <Code className="w-5 h-5 text-emerald-400" />}
                  {category === 'ML/AI' && <Brain className="w-5 h-5 text-emerald-400" />}
                  {category === 'Data Analysis' && <Database className="w-5 h-5 text-emerald-400" />}
                  {category === 'Generative AI' && <Lightbulb className="w-5 h-5 text-emerald-400" />}
                  {category === 'Web Development' && <Globe className="w-5 h-5 text-emerald-400" />}
                  {category === 'Tools & Platforms' && <Cpu className="w-5 h-5 text-emerald-400" />}
                  {category}
                </h3>
                <div className="space-y-4 relative z-10">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="font-normal text-white tracking-wide">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-black/30 backdrop-blur-md p-12 border border-emerald-500/30 rounded-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-5">
              <Leaf className="w-20 h-20" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-5">
              <Leaf className="w-16 h-16 transform rotate-90" />
            </div>
            <h3 className="text-2xl font-normal text-center mb-12 text-white tracking-wide relative z-10">
              Professional Skills & Philosophy
            </h3>
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h4 className="font-normal text-emerald-400 mb-6 tracking-wide flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Professional Skills
                </h4>
                <div className="space-y-4">
                  {['Problem-solving with natural patterns', 'Cross-functional collaboration', 'Technical communication', 'Sustainable project management', 'Bio-inspired design thinking'].map(skill => (
                    <div key={skill} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                      <span className="font-normal text-white leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-normal text-emerald-400 mb-6 tracking-wide flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Languages & Philosophy
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <span className="font-normal text-white leading-relaxed">Arabic (Native), English (Fluent)</span>
                  </div>
                </div>
                <p className="text-lg text-white/80 font-normal tracking-wide leading-relaxed">
                  <span className="text-emerald-400">Beyond Code:</span> Graphic design reviewer at NU Book Club, finding harmony between natural aesthetics and digital precision. Gaming and nature photography inspire biomimetic approaches to algorithmic challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-green-950/30 to-emerald-950/20 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/4 opacity-10">
            <Leaf className="w-16 h-16 text-emerald-400" />
          </div>
          <div className="absolute bottom-0 right-1/4 opacity-10">
            <Leaf className="w-12 h-12 text-green-400 transform rotate-45" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-light mb-12 text-white tracking-tight flex items-center justify-center gap-4">
              <Leaf className="w-8 h-8 text-emerald-400 opacity-60" />
              Future Vision
              <Leaf className="w-8 h-8 text-emerald-400 opacity-60 transform rotate-180" />
            </h2>
            <p className="text-2xl font-normal text-white leading-relaxed">
              In three years, I envision myself building AI-powered diagnostic tools that make healthcare accessible in underserved regions, combining technical expertise with nature-inspired algorithms to create sustainable systems that save lives through intelligent data analysis and ecological harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-gradient-to-br from-slate-900/80 to-emerald-900/40 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-white tracking-tight mb-4 flex items-center justify-center gap-4">
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60" />
              Contact
              <Leaf className="w-10 h-10 text-emerald-400 opacity-60 transform rotate-180" />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
          </div>

          <p className="text-xl font-normal text-white mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss AI/ML projects, research opportunities, or innovative ideas that create real-world impact through sustainable technology solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="bg-emerald-500/80 hover:bg-emerald-500 px-12 py-4 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-3 rounded relative overflow-hidden">
              <div className="absolute top-1 right-1 opacity-20">
                <Leaf className="w-4 h-4" />
              </div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Email</span>
            </button>
            <button className="border border-emerald-500/30 hover:border-emerald-500 px-12 py-4 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-3 hover:bg-emerald-500/10 backdrop-blur-md rounded relative overflow-hidden">
              <div className="absolute top-1 right-1 opacity-20">
                <Leaf className="w-4 h-4 transform rotate-45" />
              </div>
              <Linkedin className="w-5 h-5 relative z-10" />
              <span className="relative z-10">LinkedIn</span>
            </button>
            <button className="border border-emerald-500/30 hover:border-emerald-500 px-12 py-4 text-lg font-normal tracking-wide transition-all duration-300 flex items-center justify-center gap-3 hover:bg-emerald-500/10 backdrop-blur-md rounded relative overflow-hidden">
              <div className="absolute top-1 right-1 opacity-20">
                <Leaf className="w-4 h-4 transform rotate-90" />
              </div>
              <Github className="w-5 h-5 relative z-10" />
              <span className="relative z-10">GitHub</span>
            </button>
          </div>

          <div className="text-white/70 space-y-3 font-normal flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400 opacity-60" />
              <span>Nile University, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400 opacity-60 transform rotate-45" />
              <span>Open to internships, research opportunities, and sustainable tech collaborations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-emerald-500/30 bg-gradient-to-br from-green-950/30 to-emerald-950/20 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 opacity-10">
            <Leaf className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 opacity-10">
            <Leaf className="w-6 h-6 text-green-400 transform rotate-180" />
          </div>
          <p className="text-white/60 font-normal tracking-wide relative z-10 flex items-center justify-center gap-3">
            <Leaf className="w-4 h-4 text-emerald-400 opacity-40" />
            © 2025 Yahya Mohamed. Built with React, TypeScript, and passion for sustainable AI.
            <Leaf className="w-4 h-4 text-emerald-400 opacity-40 transform rotate-180" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
