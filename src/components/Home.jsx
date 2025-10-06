// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Code, Palette, Eye, Mail } from "lucide-react";

// const useTypingEffect = (texts, speed = 50, delay = 2000) => {
//   const [currentText, setCurrentText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     if (isDeleting && currentText === "") {
//       setIsDeleting(false);
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//       return;
//     }

//     if (!isDeleting && currentText === texts[textIndex]) {
//       setTimeout(() => setIsDeleting(true), delay);
//       return;
//     }

//     const timer = setTimeout(
//       () => {
//         setCurrentText((prev) => {
//           const fullText = texts[textIndex];
//           return isDeleting
//             ? fullText.substring(0, prev.length - 1)
//             : fullText.substring(0, prev.length + 1);
//         });
//       },
//       isDeleting ? speed / 2 : speed
//     ); // Faster deletion

//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, textIndex, texts, speed, delay]);

//   return currentText;
// };

// const Home = () => {
//   // Roles for the typing animation
//   const roles = ["Full Stack Developer", "Problem Solver", "Creative Thinker"];
//   const animatedText = useTypingEffect(roles);

//   // Function to smoothly scroll to a section by its ID
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white p-6 md:p-12 font-inter">
//       {/* Floating Background Shapes */}
//       {/* A large violet circle with a more complex floating animation */}
//       <motion.div
//         className="absolute rounded-full bg-[#8a2be2] opacity-10 w-80 h-80 md:w-96 md:h-96"
//         style={{ top: "10%", left: "-5%" }}
//         animate={{
//           scale: [1, 1.2, 1.1, 1],
//           x: ["0%", "20%", "-10%", "0%"],
//           y: ["0%", "30%", "-20%", "0%"],
//           rotate: [0, 90, 180, 270, 360],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//           repeatType: "reverse",
//         }}
//       />
//       {/* A smaller teal circle with a different floating animation path */}
//       <motion.div
//         className="absolute rounded-full bg-[#00ffff] opacity-10 w-60 h-60 md:w-80 md:h-80"
//         style={{ bottom: "5%", right: "-5%" }}
//         animate={{
//           scale: [1, 1.3, 1.1, 1],
//           x: ["0%", "-25%", "15%", "0%"],
//           y: ["0%", "-20%", "30%", "0%"],
//           rotate: [360, 270, 180, 90, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "linear",
//           repeatType: "reverse",
//         }}
//       />

//       {/* Main content container with a responsive flex layout */}
//       <div className="container mx-auto z-10">
//         <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
//           {/* Left Side Content - Text and Buttons */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
//             {/* Title with drop-in animation */}
//             <motion.h1
//               className="text-4xl md:text-6xl font-extrabold mb-4"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Hi, I'm{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#00ffff]">
//                 Lalit Patel
//               </span>
//             </motion.h1>

//             {/* Type-animation for roles */}
//             <motion.h2
//               className="text-2xl md:text-3xl font-medium mb-6 text-white"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               I'm a{" "}
//               <span className="font-bold text-[#8a2be2]">{animatedText}</span>
//             </motion.h2>

//             {/* Paragraph with fade-in animation */}
//             <motion.p
//               className="text-base md:text-lg mb-8 text-gray-400 max-w-lg mx-auto lg:mx-0"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Passionate about creating innovative digital solutions. I combine
//               technical expertise with creative problem-solving to deliver
//               exceptional user experiences.
//             </motion.p>

//             {/* Buttons with hover and drop-in animations */}
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               {/* View My Work Button */}
//               <motion.div whileHover={{ scale: 1.05, y: -3 }}>
//                 <Link
//                   to="/projects"
//                   className="px-6 py-3 rounded-full bg-[#8a2be2] text-white font-semibold hover:bg-opacity-80 transition-colors duration-300 shadow-xl"
//                 >
//                   <Eye className="inline-block mr-2 w-5 h-5" /> View My Work
//                 </Link>
//               </motion.div>
//               {/* Get In Touch Button */}
//               <motion.div whileHover={{ scale: 1.05, y: -3 }}>
//                 <button
//                   className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 shadow-xl"
//                   onClick={() =>
//                     (window.location.href =
//                       "mailto:lalitpatel111.da@gmail.com?subject=Hello Lalit&body=I want to connect with you.")
//                   }
//                 >
//                   <Mail className="inline-block mr-2 w-5 h-5" /> Get In Touch
//                 </button>
//               </motion.div>
//             </motion.div>

//             {/* Stats section with animations */}
//             <motion.div
//               className="flex flex-wrap justify-center lg:justify-start gap-8"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-[#8a2be2]">10+</div>
//                 <div className="text-gray-400">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-[#00ffff]">1.3+</div>
//                 <div className="text-gray-400">Years Exp</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-gray-300">100%</div>
//                 <div className="text-gray-400">Clients Happy</div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side Image - Profile Photo with floating icons */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
//             <motion.div
//               className="relative inline-block"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               {/* Profile Image with subtle floating animation */}
//               <motion.img
//                 src="/Images/lalit_patel.jpg"
//                 alt="Lalit Patel"
//                 className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-white object-cover"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* Floating icon for 'Code' */}
//               <motion.div
//                 className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
//                 animate={{
//                   y: [0, -15, 0],
//                   x: [0, 10, -5, 0],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <Code className="text-2xl text-[#8a2be2]" />
//               </motion.div>

//               {/* Floating icon for 'Palette' */}
//               <motion.div
//                 className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
//                 animate={{
//                   y: [0, 15, 0],
//                   x: [0, -10, 5, 0],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1,
//                 }}
//               >
//                 <Palette className="text-2xl text-[#00ffff]" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         onClick={() => scrollToSection("about")}
//       >
//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <svg
//             className="w-8 h-8 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Palette, Eye, Mail } from "lucide-react";

const useTypingEffect = (texts, speed = 50, delay = 2000) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    if (!isDeleting && currentText === texts[textIndex]) {
      setTimeout(() => setIsDeleting(true), delay);
      return;
    }

    const timer = setTimeout(
      () => {
        setCurrentText((prev) => {
          const fullText = texts[textIndex];
          return isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1);
        });
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, speed, delay]);

  return currentText;
};

const Home = () => {
  // Roles for the typing animation
  const roles = ["Full Stack Developer", "Problem Solver", "Creative Thinker"];
  const animatedText = useTypingEffect(roles);

  // Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home" // Added ID for navigation
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white p-6 md:p-12 font-inter"
    >
      {/* Floating Background Shapes */}
      {/* A large violet circle with a more complex floating animation */}
      <motion.div
        className="absolute rounded-full bg-[#8a2be2] opacity-10 w-80 h-80 md:w-96 md:h-96"
        style={{ top: "10%", left: "-5%" }}
        animate={{
          scale: [1, 1.2, 1.1, 1],
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "30%", "-20%", "0%"],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        }}
      />
      {/* A smaller teal circle with a different floating animation path */}
      <motion.div
        className="absolute rounded-full bg-[#00ffff] opacity-10 w-60 h-60 md:w-80 md:h-80"
        style={{ bottom: "5%", right: "-5%" }}
        animate={{
          scale: [1, 1.3, 1.1, 1],
          x: ["0%", "-25%", "15%", "0%"],
          y: ["0%", "-20%", "30%", "0%"],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        }}
      />

      {/* Main content container with a responsive flex layout */}
      <div className="container mx-auto z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Side Content - Text and Buttons */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            {/* Title with drop-in animation */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#00ffff]">
                Lalit Patel
              </span>
            </motion.h1>

            {/* Type-animation for roles */}
            <motion.h2
              className="text-2xl md:text-3xl font-medium mb-6 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm a{" "}
              <span className="font-bold text-[#8a2be2]">{animatedText}</span>
            </motion.h2>

            {/* Paragraph with fade-in animation */}
            <motion.p
              className="text-base md:text-lg mb-8 text-gray-400 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate about creating innovative digital solutions. I combine
              technical expertise with creative problem-solving to deliver
              exceptional user experiences.
            </motion.p>

            {/* Buttons with hover and drop-in animations (FIXED ALIGNMENT) */}
            <motion.div
              // FIX: Added items-center for vertical alignment
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* View My Work Button */}

              <motion.div whileHover={{ scale: 1.05, y: -3 }}>
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full bg-[#8a2be2] text-white font-semibold hover:bg-opacity-80 transition-colors duration-300 shadow-xl inline-flex items-center justify-center"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   scrollToSection("/projects");
                  // }}
                >
                  <Eye className="inline-block mr-2 w-5 h-5" /> View My Work
                </Link>
              </motion.div>

              {/* Get In Touch Button */}
              <motion.div whileHover={{ scale: 1.05, y: -3 }}>
                <button
                  // FIX: Added inline-flex and items-center to align icon/text
                  className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 shadow-xl inline-flex items-center justify-center"
                  onClick={() =>
                    (window.location.href =
                      "mailto:lalitpatel111.da@gmail.com?subject=Hello Lalit&body=I want to connect with you.")
                  }
                >
                  <Mail className="inline-block mr-2 w-5 h-5" /> Get In Touch
                </button>
              </motion.div>
            </motion.div>

            {/* Stats section with animations */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8a2be2]">10+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00ffff]">1.3+</div>
                <div className="text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-300">100%</div>
                <div className="text-gray-400">Clients Happy</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Image - Profile Photo with floating icons */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Profile Image with subtle floating animation */}
              <motion.img
                src="/Images/lalit_patel.jpg"
                alt="Lalit Patel"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-white object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating icon for 'Code' */}
              <motion.div
                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code className="text-2xl text-[#8a2be2]" />
              </motion.div>

              {/* Floating icon for 'Palette' */}
              <motion.div
                className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Palette className="text-2xl text-[#00ffff]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
