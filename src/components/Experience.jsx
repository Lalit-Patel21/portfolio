import { motion } from "framer-motion";

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      company: "Freelancing",
      position: "Full Stack Developer",
      duration: "July 2025 - Present",
      location: "Indore, Madhya Pradesh, India",
      description:
        "Designing and developing scalable full-stack web applications for clients. Managing end-to-end project lifecycles including planning, development, deployment, and maintenance.",
      achievements: [
        "Delivered 2+ full-stack projects with 100% on-time completion.",
        "Implemented CI/CD pipelines reducing deployment time by 60%.",
        "Optimized backend APIs and database queries improving performance by 35%.",
        "Mentored junior developers and introduced a structured code review process, improving quality and reducing bugs.",
      ],
      technologies: [
        "ReactJs",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Java",
        "MongoDB",
      ],
      logo: "bi-building",
    },
    {
      id: 2,
      company: "Infobeans Foundation",
      position: "Trainee Developer",
      duration: "Mar 2024 - June 2025",
      location: "Indore, Madhya Pradesh, India",
      description:
        "Worked as a trainee on multiple live projects, focusing on web development fundamentals and modern frameworks. Assisted in building features and fixing bugs under senior developer guidance.",
      achievements: [
        "Contributed to building an MVP mobile/web app that reached 10,000+ users within 6 months.",
        "Implemented responsive UI using React and Tailwind CSS for better user experience.",
        "Collaborated with senior developers on code reviews and debugging sessions.",
        "Learned and applied best practices in REST API development using Node.js and Express.",
      ],
      technologies: [
        "Java",
        "Node.js",
        "Express.js",
        "React.js",
        "HTML5",
        "CSS3",
        "BootStrap",
        "Tailwind CSS",
      ],
      logo: "bi-rocket",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "Nov 2024",
      credentialId: "AWS-123456789",
      logo: "bi-cloud",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "April 2024",
      credentialId: "MDB-987654321",
      logo: "bi-database",
    },
    {
      name: "MERN Stack Developer Certification",
      issuer: "Meta",
      date: "June 2025",
      credentialId: "META-456789123",
      logo: "bi-braces-asterisk",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const timelineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mt-4 font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional journey in software development, showcasing growth,
            achievements, and contributions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-gradient-to-b before:from-indigo-500 before:to-purple-600 before:-translate-x-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              className={`mb-12 w-full md:w-1/2 px-4 relative ${
                index % 2 === 0 ? "md:left-0 md:pr-8" : "md:left-1/2 md:pl-8"
              }`}
              variants={itemVariants}
            >
              {/* Card */}
              <motion.div
                className="mt-6 md:mt-0 bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl p-6 hover:-translate-y-5 hover:shadow-2xl hover:shadow-indigo-300/50 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {" "}
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <h4 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                    <i className="bi bi-briefcase-fill text-indigo-500"></i>{" "}
                    {job.position}
                  </h4>
                  <h5 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3 flex items-center gap-2">
                    <i className="bi bi-building text-indigo-500"></i>{" "}
                    {job.company}
                  </h5>
                </motion.div>
                <motion.div
                  className="flex flex-col md:flex-row md:gap-6 mb-4"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-1 md:mb-0">
                    <i className="bi bi-calendar-event-fill text-indigo-500"></i>{" "}
                    {job.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <i className="bi bi-geo-alt-fill text-red-500"></i>{" "}
                    {job.location}
                  </div>
                </motion.div>
                <motion.p
                  className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <i className="bi bi-journal-text text-indigo-500"></i>{" "}
                  {job.description}
                </motion.p>
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-5 shadow-inner hover:shadow-lg transition-shadow duration-300"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h6 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="bi bi-trophy-fill text-yellow-400"></i> Key
                    Achievements:
                  </h6>
                  <ul className="list-disc list-inside space-y-2">
                    {job.achievements.map((ach, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors duration-300"
                      >
                        <i className="bi bi-check-circle-fill text-green-500"></i>{" "}
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-inner hover:shadow-lg transition-shadow duration-300"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h6 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    Technologies:
                  </h6>
                  <div className="flex flex-wrap gap-3">
                    {job.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-2xl text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-1"
                        whileHover={{ rotate: [0, 5, -5, 0], scale: 1.15 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
            variants={itemVariants}
          >
            Certifications & Achievements
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="w-full sm:w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:-translate-y-3 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="text-indigo-500 text-4xl mb-4">
                  <i className={`${cert.logo}`}></i>
                </div>
                <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                  {cert.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-indigo-500 font-medium mb-1">{cert.date}</p>
                <p className="text-gray-400 text-sm">ID: {cert.credentialId}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Growth */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-10 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">Professional Growth</h3>
          <p className="mb-8">
            Over the years, I've continuously evolved my skills and expertise,
            taking on increasingly complex challenges and leadership roles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-1">1.3+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">10+</div>
              <div>Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">25+</div>
              <div>Technologies Mastered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">100%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/lalit-patel21"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-indigo-500 text-indigo-500 px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <i className="bi bi-linkedin"></i> View LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
