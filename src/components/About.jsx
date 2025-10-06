import React from "react";
import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Lightbulb,
  Users as Team,
  Download,
} from "lucide-react";

const About = () => {
  const personalInfo = [
    { label: "Name", value: "LALIT PATEL", icon: <User size={20} /> },
    { label: "Age", value: "25 Years", icon: <GraduationCap size={20} /> },
    {
      label: "Location",
      value: "Indore Madhya Pradesh India",
      icon: <MapPin size={20} />,
    },
    {
      label: "Email",
      value: "lalitpatel111.da@gmail.com",
      icon: <Mail size={20} />,
    },
    { label: "Phone", value: "+91 76107-13699", icon: <Phone size={20} /> },
    { label: "Freelance", value: "Available", icon: <Briefcase size={20} /> },
  ];

  const education = [
    {
      year: "2024 - 2025",
      degree: "Information Technology Excellence Program",
      University: "InfoBeans Foundation",
      institution: "InfoBeans Foundation",
      description:
        "Focused on core IT skills including Java, JavaScript, MySQL, and soft skills.",
    },
    {
      year: "2022 - 2024",
      degree: "Master of Computer Application",
      University: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      institution: "University Institute of Technology RGPV, Bhopal",
      description: "Computer Application",
    },
    {
      year: "2018 - 2021",
      degree: "Bachelor of Science",
      University: "Devi Ahilya Vishwavidyalaya",
      institution: "P.M.B. Gujarati Science College, Indore",
      description: "Computer Science",
    },
    {
      year: "2017 - 2018",
      degree: "12th",
      University: "Board Of Secondary Education, Madhya Pradesh, Bhopal",
      institution: "Devi Ahilya Govt. Excellence H.S.S. No. 1 Khargone",
      description: "Mathematics Chemistry and Physics ",
    },
    {
      year: "2015 - 2016",
      degree: "10th",
      University: "Board Of Secondary Education, Madhya Pradesh, Bhopal",
      institution: "Gayatri Shiksha Niketan H.S.S. Khargone",
      description: "",
    },
  ];

  const interests = [
    {
      icon: <Code size={24} />,
      title: "Coding",
      description: "Building innovative solutions",
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      description: "Creating beautiful interfaces",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation",
      description: "Solving complex problems",
    },
    {
      icon: <Team size={24} />,
      title: "Collaboration",
      description: "Working in teams",
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  /**
   * Helper function to render the interactive value based on the label.
   */
  const renderValue = (info) => {
    // 1. Interactive Mail Link
    if (info.label === "Email") {
      return (
        <a
          href={`mailto:${info.value}`}
          className="font-semibold text-white leading-tight break-words hover:text-[#00ffff] transition-colors"
        >
          {info.value}
        </a>
      );
    }
    // 2. Interactive Phone Link
    else if (info.label === "Phone") {
      const cleanPhone = info.value.replace(/[^0-9+]/g, "");
      return (
        <a
          href={`tel:${cleanPhone}`}
          className="font-semibold text-white leading-tight break-words hover:text-[#00ffff] transition-colors"
        >
          {info.value}
        </a>
      );
    }
    // 3. Interactive Location/Address Link (NEW)
    else if (info.label === "Location") {
      // Use encodeURIComponent to safely put the address string into the URL for Google Maps search
      const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(
        info.value
      )}`;
      return (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white leading-tight break-words hover:text-[#00ffff] transition-colors"
        >
          {info.value}
        </a>
      );
    }
    // 4. Regular Text Value (Name, Age, Freelance)
    else {
      return (
        <p className="font-semibold text-white leading-tight break-words">
          {info.value}
        </p>
      );
    }
  };

  return (
    <section
      id="about"
      className="relative bg-gray-950 text-white py-16 md:py-24 font-inter overflow-hidden"
    >
      <style>{`
        .glowing-orb { filter: blur(80px); animation: glow-animation 15s infinite ease-in-out; }
        .glowing-orb.one { background-color: #8a2be2; width: 250px; height: 250px; top: 5%; left: 5%; animation-delay: 0s; }
        .glowing-orb.two { background-color: #00ffff; width: 200px; height: 200px; top: 40%; left: 80%; animation-delay: 5s; }
        .glowing-orb.three { background-color: #8B5CF6; width: 300px; height: 300px; top: 70%; left: 20%; animation-delay: 10s; }
        @keyframes glow-animation {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          25% { transform: scale(1.1) translate(50px, -20px); opacity: 0.7; }
          50% { transform: scale(0.9) translate(-50px, 30px); opacity: 0.6; }
          75% { transform: scale(1.2) translate(20px, 40px); opacity: 0.8; }
        }
        .gradient-text {
          background-clip: text;
          color: transparent;
          background-image: linear-gradient(to right, #8a2be2, #00ffff);
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <div className="glowing-orb one absolute rounded-full opacity-50"></div>
        <div className="glowing-orb two absolute rounded-full opacity-50"></div>
        <div className="glowing-orb three absolute rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#00ffff] mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my background, education, and what drives me
            to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            className="p-8 bg-gray-900 rounded-3xl shadow-2xl h-full flex flex-col transition-all duration-300 hover:shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 gradient-text"
              variants={itemVariants}
            >
              Personal Information
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-800 rounded-xl shadow-inner border border-gray-700/50"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 text-[#8a2be2]">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-400">
                      {info.label}
                    </p>

                    {/* Render the interactive or static value */}
                    {renderValue(info)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-gray-900 rounded-3xl shadow-2xl h-full flex flex-col transition-all duration-300 hover:shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 gradient-text"
              variants={itemVariants}
            >
              Who I Am
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate **Full Stack Developer** with a strong foundation
              in modern web technologies. My journey in software development
              began with curiosity and has evolved into a deep passion for
              creating solutions that make a real impact.
            </motion.p>
            <motion.p
              className="text-gray-400 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              I believe in writing clean, maintainable code and creating user
              experiences that are both beautiful and functional. Every project
              I work on is an opportunity to learn, grow, and push the
              boundaries of what's possible.
            </motion.p>
            <motion.p
              className="text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </motion.p>
          </motion.div>
        </div>

        {/* EDUCATION SECTION (RESPONSIVE GRID) */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-8 gradient-text"
            variants={itemVariants}
          >
            Education & Background
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-900 rounded-3xl shadow-2xl flex flex-col border border-gray-800 transition-all duration-300 hover:border-[#00ffff]/50"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0, 255, 255, 0.1)",
                }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <span className="text-sm font-semibold bg-violet-700 bg-opacity-30 text-[#8a2be2] px-3 py-1 rounded-full mb-2 sm:mb-0">
                    {edu.degree}
                  </span>
                  <span className="text-sm font-semibold text-[#00ffff] px-3 py-1 rounded-full border border-[#00ffff] border-opacity-50 flex-shrink-0">
                    {edu.year}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1">
                  {edu.institution}
                </h4>
                <p className="text-base font-normal text-gray-400 mb-3">
                  {edu.University}
                </p>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {edu.description || "—"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-8 gradient-text"
            variants={itemVariants}
          >
            What Drives Me
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-900 rounded-3xl shadow-2xl text-center h-full flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:shadow-lg border border-gray-800"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[#00ffff] mb-4">{interest.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {interest.title}
                </h4>
                <p className="text-gray-400">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1VQRfgZcyr2woXsnQlp4QSARXkGb7k3Q6"
            download="LALIT_PATEL_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#8a2be2] to-[#00ffff] hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Download size={20} className="mr-2" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
