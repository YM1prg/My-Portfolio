import { Award, Brain, Briefcase, ChevronDown, Code, Cpu, Database, Download, ExternalLink, Github, Globe, Leaf, Lightbulb, Linkedin, Mail, User } from 'lucide-react';
import { Moon, Sun, Cloud } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    <div className={`min-h-screen font-serif relative transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-800 text-white' 
        : 'bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 text-slate-800'
    }`}>
      {/* Nature-inspired background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Organic light sources */}
        <div className={`absolute top-20 left-20 w-96 h-96 bg-gradient-radial rounded-full blur-3xl transition-all duration-700 ${
          isDarkMode ? 'from-emerald-500/15 to-transparent' : 'from-emerald-400/25 to-transparent'
        }`}></div>
        <div className={`absolute bottom-40 right-32 w-80 h-80 bg-gradient-radial rounded-full blur-3xl transition-all duration-700 ${
          isDarkMode ? 'from-green-500/10 to-transparent' : 'from-cyan-400/20 to-transparent'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial rounded-full blur-3xl transition-all duration-700 ${
          isDarkMode ? 'from-lime-500/8 to-transparent' : 'from-blue-400/15 to-transparent'
        }`}></div>

        {/* Static nature decorations - leaves in dark mode, clouds in light mode */}
        <div className={`absolute top-32 left-16 transition-all duration-700 ${
          isDarkMode ? 'opacity-20' : 'opacity-30'
        }`}>
          {isDarkMode ? (
            <Leaf className="w-8 h-8 transform rotate-45 text-emerald-400" />
          ) : (
            <Cloud className="w-8 h-8 text-sky-500" />
          )}
        </div>
        <div className={`absolute top