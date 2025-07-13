'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Code, Palette, Database, Zap } from 'lucide-react';

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-4"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="text-center max-w-4xl">
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ayush Kunjadia
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Aspiring & Passionate Software Engineer
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                I&apos;m Ayush—a driven software engineer passionate about building innovative tools and learning cutting-edge technologies. 
                I thrive on transforming ideas into real products and leveling up everyday.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-6"
            >
              <a
                href="https://github.com/atkunja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ayushkunjadia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="py-20 px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Experience
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Engineer Intern</h3>
                  <p className="text-gray-400">Loshi Technologies, LLC</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="py-20 px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Manga Animator Project */}
              <motion.div
                variants={fadeInUp}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Palette size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Manga Animator</h3>
                    </div>
                    <a
                      href="https://github.com/atkunja/Manga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Python', 'Streamlit', 'MoviePy', 'Docker'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">
                      Interactive web app that turns static manga panels into anime-style video sequences
                    </p>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Built image-processing pipelines & smooth video concatenation</li>
                      <li>• Containerized deployment with Docker</li>
                      <li>• Implemented advanced transitions for fluid animations</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* CodeCollab Project */}
              <motion.div
                variants={fadeInUp}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Database size={24} />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">CodeCollab</h3>
                    </div>
                    <a
                      href="https://github.com/atkunja/codecollab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['TypeScript', 'Next.js', 'NestJS', 'Tailwind CSS', 'Supabase', 'Socket.io'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">
                      Full-stack monorepo with in-browser multi-user code editing (Monaco Editor)
                    </p>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Features persistent snippet storage, live collaboration, chat, presence indicators</li>
                      <li>• Supports OAuth (GitHub & Google) and production CI/CD pipelines</li>
                      <li>• Built with TypeScript, Next.js App Router, and NestJS</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="py-20 px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Skills & Technologies
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Code className="mr-3" size={24} />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['TypeScript', 'Java', 'Python', 'C/C++', 'JavaScript', 'HTML', 'CSS', 'SQL'].map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Zap className="mr-3" size={24} />
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'NestJS', 'React', 'Node.js', 'Streamlit', 'Tailwind CSS', 'Docker', 'Supabase', 'MoviePy', 'Socket.io'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section 
          className="py-20 px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Hobbies & Interests
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
            >
              {[
                { name: 'Wrestling', emoji: '🤼', desc: 'All-state multiple times' },
                { name: 'Weightlifting', emoji: '🏋️', desc: 'Strength training' },
                { name: 'Fishing', emoji: '🎣', desc: 'Outdoor relaxation' },
                { name: 'Hiking', emoji: '🥾', desc: 'Exploring nature' },
                { name: 'Chess', emoji: '♟️', desc: 'Strategic thinking' }
              ].map((hobby) => (
                <div key={hobby.name} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3">{hobby.emoji}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{hobby.name}</h3>
                  <p className="text-gray-400 text-sm">{hobby.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-20 px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
                                Let&apos;s Connect
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-8"
            >
              <a
                href="https://github.com/atkunja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github size={24} />
                <span className="text-lg">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ayushkunjadia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={24} />
                <span className="text-lg">LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
