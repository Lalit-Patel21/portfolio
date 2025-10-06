import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Code,
  Database,
  Server,
  Cog,
  Zap,
  GitFork,
  Box,
  Type,
  FileJson,
  Layers,
  Palette,
  CodeSquare,
  Github,
  Bot,
  ArrowUpRight,
  ArrowLeftRight,
  GitPullRequest,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "all",
      name: "All Skills",
      icon: <Layout size={20} />,
      color: "#8a2be2",
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code size={20} />,
      color: "#00ffff",
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server size={20} />,
      color: "#339933",
    },
    {
      id: "database",
      name: "Database",
      icon: <Database size={20} />,
      color: "#47A248",
    },
    { id: "tools", name: "Tools", icon: <Cog size={20} />, color: "#F05032" },
  ];

  const skills = [
    {
      name: "React.js",
      percentage: 95,
      category: "frontend",
      icon: <Layers size={30} />,
      color: "#61DAFB",
      description: "Modern React with Hooks & Context API.",
    },
    {
      name: "JavaScript",
      percentage: 90,
      category: "frontend",
      icon: <Zap size={30} />,
      color: "#F7DF1E",
      description: "ES6+ & Modern JavaScript syntax.",
    },
    {
      name: "HTML5 & CSS3",
      percentage: 95,
      category: "frontend",
      icon: <Palette size={30} />,
      color: "#E34F26",
      description: "Semantic HTML & Advanced CSS techniques.",
    },
    {
      name: "Node.js",
      percentage: 95,
      category: "backend",
      icon: <Server size={30} />,
      color: "#339933",
      description: "Server-side JavaScript applications.",
    },
    {
      name: "Java SE",
      percentage: 80,
      category: "backend",
      icon: <Code size={30} />,
      color: "#3776AB",
      description: "Object-Oriented Programming (OOP) principles.",
    },
    {
      name: "MongoDB",
      percentage: 75,
      category: "database",
      icon: <Database size={30} />,
      color: "#47A248",
      description: "NoSQL Database Management.",
    },
    {
      name: "PostgreSQL",
      percentage: 70,
      category: "database",
      icon: <Database size={30} />,
      color: "#336791",
      description: "Relational Database Design.",
    },
    {
      name: "Git",
      percentage: 90,
      category: "tools",
      icon: <GitFork size={30} />,
      color: "#F05032",
      description: "Version Control & Collaboration.",
    },
    {
      name: "Docker",
      percentage: 65,
      category: "tools",
      icon: <Box size={30} />,
      color: "#2496ED",
      description: "Containerization & Deployment.",
    },
  ];

  // Additional skills for the second section
  const additionalSkills = [
    // { name: "TypeScript", icon: <Type size={20} />, color: "#3178C6" },
    { name: "Express.js", icon: <Server size={20} />, color: "#FFFFFF" },
    { name: "Redux", icon: <GitFork size={20} />, color: "#3178C6" },
    { name: "REST APIs", icon: <ArrowLeftRight size={20} />, color: "#FF6B6B" },
    {
      name: "Bootstrap CSS",
      icon: <GitPullRequest size={20} />,
      color: "#7952B3",
    },
    { name: "Tailwind CSS", icon: <Palette size={20} />, color: "#06B6D4" },
    { name: "Figma", icon: <FileJson size={20} />, color: "#F24E1E" },
    { name: "VS Code", icon: <CodeSquare size={20} />, color: "#007ACC" },
    { name: "GitHub", icon: <Github size={20} />, color: "#181717" },
    { name: "Cursor AI", icon: <Bot size={20} />, color: "#6366F1" },
    { name: "Postman", icon: <ArrowUpRight size={20} />, color: "#FF6C37" },
  ];

  // Filter skills based on the active category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren", // Ensures the container animation happens first
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    // Exit animation is optional but good practice with AnimatePresence
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    // Main section with dark background and padding
    <section
      id="skills"
      className="relative bg-gray-950 text-white py-16 md:py-24 font-inter overflow-hidden"
    >
      <style>{`
                .glowing-orb {
                    filter: blur(80px);
                    animation: glow-animation 15s infinite ease-in-out;
                }
                /* ... (rest of your CSS styles) */
                .glowing-orb.one {
                    background-color: #8a2be2;
                    width: 250px;
                    height: 250px;
                    top: 5%;
                    left: 5%;
                    animation-delay: 0s;
                }

                .glowing-orb.two {
                    background-color: #00ffff;
                    width: 200px;
                    height: 200px;
                    top: 40%;
                    left: 80%;
                    animation-delay: 5s;
                }

                .glowing-orb.three {
                    background-color: #8B5CF6;
                    width: 300px;
                    height: 300px;
                    top: 70%;
                    left: 20%;
                    animation-delay: 10s;
                }

                @keyframes glow-animation {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
                    25% { transform: scale(1.1) translate(50px, -20px); opacity: 0.7; }
                    50% { transform: scale(0.9) translate(-50px, 30px); opacity: 0.6; }
                    75% { transform: scale(1.2) translate(20px, 40px); opacity: 0.8; }
                }
            `}</style>

      <div className="absolute inset-0 z-0">
        <div className="glowing-orb one absolute rounded-full opacity-50"></div>
        <div className="glowing-orb two absolute rounded-full opacity-50"></div>
        <div className="glowing-orb three absolute rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#00ffff] mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills, from frontend
            development to backend systems and modern tools.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full font-semibold transition-all duration-300
                                ${
                                  activeCategory === category.id
                                    ? "bg-gradient-to-r from-[#8a2be2] to-[#00ffff] text-white shadow-lg"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ color: category.color }}>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid (FIXED: Wrapped in AnimatePresence) */}
        <AnimatePresence mode="wait">
          <motion.div
            // CRUCIAL: Changing the key forces a remount and re-runs the animation
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Use animate for state changes, not whileInView
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name} // Keeps card key consistent for smooth transitions
                className="p-8 bg-gray-900 rounded-3xl shadow-2xl h-full flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                variants={itemVariants}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className="flex-shrink-0 p-3 rounded-full"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <span className="text-3xl" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className="inline-block px-3 py-1 text-sm font-semibold rounded-full"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        color: skill.color,
                        border: `1px solid ${skill.color}30`,
                      }}
                    >
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Skill Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2.5 relative">
                  <motion.div
                    className="h-full rounded-full absolute top-0 left-0"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }} // Changed to animate
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-8 gradient-text"
            variants={itemVariants}
          >
            Additional Technologies & Tools
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {additionalSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="p-4 bg-gray-900 rounded-2xl shadow-xl flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
                variants={itemVariants}
              >
                <div className="text-2xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="text-white font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
