import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Globe, Layers } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      id: 3,
      title: "VedaRoot",
      category: "web",
      image: "./Images/blockchain.png",
      description:
        "Built a platform for Ayurvedic product purchases, doctor consultations, personalize remedies, and yoga that provides secure, transparent, and efficient solutions for modern business needs.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "ReactJs",
        "ExpressJs",
        "Socket.io",
        "Cloudinary",
      ],
      liveUrl: "https://vedaroot.com/",
      githubUrl: "https://github.com/Lalit-Patel21/",
      accentColor: "#8B5CF6",
    },
    {
      id: 4,
      title: "Null Solutions",
      category: "web",
      image: "./Images/null_solutions.png",
      description:
        "A comprehensive web solution platform that helps businesses manage their digital presence with modern technologies and best practices.",
      technologies: [
        "React.js",
        "CSS",
        "Tailwind CSS",
        "HTML",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      liveUrl: "http://Nullsolutions.in",
      githubUrl: "https://github.com/Lalit-Patel21/Null-Solution",
      accentColor: "#F59E0B",
    },
    {
      id: 5,
      title: "Video Uploader",
      category: "fullstack",
      image: "./Images/video_uploader.png",
      description:
        "A **Video Uploader App** that lets users upload, process, and share videos with progress tracking and secure storage",
      technologies: [
        "Next.js",
        "CSS",
        "Tailwind CSS",
        " Node.js",
        "Nest.js",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
      ],
      liveUrl: "https://video-uploader-frontend-five.vercel.app/",
      githubUrl: "https://github.com/Lalit-Patel21/",
      accentColor: "#06a4d4ff",
    },
    {
      id: 1,
      title: "Easy Solution",
      category: "fullstack",
      image: "./Images/easy_solution.png",
      description:
        "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Html",
        "Redux",
        "Tailwind CSS",
        "Express.js",
        "Cloudinary",
      ],
      liveUrl: "https://easy-solution-frontend.vercel.app/",
      githubUrl: "https://github.com/Lalit-Patel21/Easy_solution_frontend",
      accentColor: "#6366F1",
    },
    {
      id: 2,
      title: "Scrapify",
      category: "fullstack",
      image: "./Images/Scrapify.png",
      description:
        "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, payment integration, and admin dashboard.",
      technologies: [
        "Next.js",
        "CSS",
        "Tailwind CSS",
        " Node.js",
        "Nest.js",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
      ],
      liveUrl: "https://scrapify-livb.onrender.com/",
      githubUrl: "https://github.com/Lalit-Patel21/",
      accentColor: "#06B6D4",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const projectCategories = [
    { id: "all", name: "All", icon: <Code size={20} /> },
    { id: "fullstack", name: "Full Stack", icon: <Layers size={20} /> },
    { id: "web", name: "Web Dev", icon: <Globe size={20} /> },
  ];

  // Filter projects based on the active category
  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="relative bg-gray-950 text-white py-16 md:py-24 font-inter overflow-hidden"
    >
      {/* This is the CSS for the glowing orb background animation.
        It must be inside a <style> tag to work correctly within the component.
      */}
      <style>{`
        .glowing-orb {
          filter: blur(80px);
          animation: glow-animation 15s infinite ease-in-out;
        }

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

      {/* This is the container for the glowing orbs.
        It needs to be positioned absolutely and have a low z-index (z-0)
        to appear behind the main content.
      */}
      <div className="absolute inset-0 z-0">
        <div className="glowing-orb one absolute rounded-full opacity-50"></div>
        <div className="glowing-orb two absolute rounded-full opacity-50"></div>
        <div className="glowing-orb three absolute rounded-full opacity-50"></div>
      </div>

      {/* This is the container for the main content (text, cards, etc.).
        It needs a higher z-index (z-10) to appear on top of the background.
      */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title and subtitle with animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#00ffff] mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my recent projects, showcasing my skills in
            full-stack and web development.
          </p>
        </motion.div>

        {/* Project Categories Filter */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {projectCategories.map((category, index) => (
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
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="p-6 bg-gray-900 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              variants={itemVariants}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm font-medium rounded-full text-white"
                    style={{
                      backgroundColor: project.accentColor,
                      opacity: 0.8,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-auto">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: project.accentColor }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 8px 15px ${project.accentColor}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Preview
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-gray-800 text-gray-300 transition-all duration-300 shadow-lg hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
