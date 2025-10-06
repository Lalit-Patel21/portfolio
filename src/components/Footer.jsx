// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Linkedin,
//   Github,
//   Twitter,
//   Instagram,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUp,
// } from "lucide-react";

// // Main Footer component
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   const footerLinks = {
//     "Quick Links": [
//       { name: "Home", path: "/" },
//       { name: "About", path: "/about" },
//       { name: "Skills", path: "/skills" },
//       { name: "Projects", path: "/projects" },
//       { name: "Experience", path: "/experience" },
//       { name: "Contact", path: "/contact" },
//     ],
//     Services: [
//       { name: "Web Development", path: "/skills" },
//       { name: "Mobile Development", path: "/skills" },
//       { name: "UI/UX Design", path: "/skills" },
//     ],
//     Resources: [
//       { name: "Blog", path: "/about" },
//       { name: "Documentation", path: "/about" },
//       { name: "Tutorials", path: "/about" },
//       { name: "Case Studies", path: "/about" },
//       { name: "Free Tools", path: "/skills" },
//     ],
//   };

//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       url: "https://www.linkedin.com/in/lalit-patel21",
//       color: "hover:text-blue-500",
//     },
//     {
//       name: "GitHub",
//       icon: Github,
//       url: "https://github.com/Lalit-Patel21",
//       color: "hover:text-gray-900",
//     },
//     {
//       name: "Twitter",
//       icon: Twitter,
//       url: "https://twitter.com/lalit-patel21",
//       color: "hover:text-blue-400",
//     },
//     {
//       name: "Instagram",
//       icon: Instagram,
//       url: "https://www.instagram.com/_lalit.patel/",
//       color: "hover:text-pink-500",
//     },
//     {
//       name: "YouTube",
//       icon: Youtube,
//       url: "https://youtube.com/lalit-patel21",
//       color: "hover:text-red-600",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   useEffect(() => {
//     const handleScroll = () => setShowScrollBtn(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="relative bg-gray-950 text-white font-sans overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-950 to-indigo-900 opacity-70"></div>

//       <div className="relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8">
//         {/* Top Grid Section */}
//         <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           {/* Brand/About */}
//           <motion.div
//             className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <motion.h3
//               className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500 mb-3"
//               variants={itemVariants}
//             >
//               LALIT PATEL
//             </motion.h3>
//             <motion.p className="text-gray-400 mb-6" variants={itemVariants}>
//               A passionate Full Stack Developer dedicated to creating innovative
//               digital solutions that make a real impact in the world.
//             </motion.p>
//             <motion.div className="flex gap-4" variants={itemVariants}>
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`text-gray-400 transition-colors duration-300 ${social.color}`}
//                   whileHover={{ scale: 1.2, y: -2 }}
//                   whileTap={{ scale: 0.9 }}
//                   title={social.name}
//                 >
//                   <social.icon size={24} />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <motion.h6
//               className="text-lg font-semibold text-white mb-4"
//               variants={itemVariants}
//             >
//               Quick Links
//             </motion.h6>
//             <ul className="space-y-3 text-sm">
//               {footerLinks["Quick Links"].map((link) => (
//                 <motion.li key={link.name} variants={itemVariants}>
//                   <a
//                     href={link.path}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <motion.h6
//               className="text-lg font-semibold text-white mb-4"
//               variants={itemVariants}
//             >
//               Services
//             </motion.h6>
//             <ul className="space-y-3 text-sm">
//               {footerLinks.Services.map((link) => (
//                 <motion.li key={link.name} variants={itemVariants}>
//                   <a
//                     href={link.path}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Resources */}
//           <motion.div
//             className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <motion.h6
//               className="text-lg font-semibold text-white mb-4"
//               variants={itemVariants}
//             >
//               Resources
//             </motion.h6>
//             <ul className="space-y-3 text-sm">
//               {footerLinks.Resources.map((link) => (
//                 <motion.li key={link.name} variants={itemVariants}>
//                   <a
//                     href={link.path}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.name}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <motion.h6
//               className="text-lg font-semibold text-white mb-4"
//               variants={itemVariants}
//             >
//               Contact Info
//             </motion.h6>
//             <ul className="space-y-3 text-sm text-gray-400">
//               <motion.li
//                 variants={itemVariants}
//                 className="flex items-center gap-2"
//               >
//                 <Mail size={18} className="text-teal-400" />
//                 <span>lalitpatel111.da@gmail.com</span>
//               </motion.li>
//               <motion.li
//                 variants={itemVariants}
//                 className="flex items-center gap-2"
//               >
//                 <Phone size={18} className="text-teal-400" />
//                 <span>+91 76107 13699</span>
//               </motion.li>
//               <motion.li
//                 variants={itemVariants}
//                 className="flex items-center gap-2"
//               >
//                 <MapPin size={18} className="text-teal-400" />
//                 <span>Indore Madhya Pradesh India</span>
//               </motion.li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Horizontal Divider */}
//         <hr className="my-8 border-t border-gray-700" />

//         {/* Bottom Section */}
//         <motion.div
//           className="pt-2 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-gray-500 text-center sm:text-left">
//             &copy; {currentYear} Lalit Patel. All rights reserved.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center sm:text-right">
//             <a
//               href="#"
//               className="text-gray-500 hover:text-white transition-colors duration-300"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </motion.div>

//         {/* Back to Top Button */}
//         {showScrollBtn && (
//           <motion.button
//             className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950"
//             onClick={scrollToTop}
//             title="Back to Top"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           >
//             <ArrowUp size={24} />
//           </motion.button>
//         )}
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

// Main Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // Contact Details
  const contactDetails = {
    email: "lalitpatel111.da@gmail.com",
    phone: "+91 76107 13699",
    address: "Indore Madhya Pradesh India",
  };

  const footerLinks = {
    "Quick Links": [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Skills", path: "/skills" },
      { name: "Projects", path: "/projects" },
      { name: "Experience", path: "/experience" },
      { name: "Contact", path: "/contact" },
    ],
    Services: [
      { name: "Web Development", path: "/skills" },
      { name: "Mobile Development", path: "/skills" },
      { name: "UI/UX Design", path: "/skills" },
    ],
    Resources: [
      { name: "Blog", path: "/about" },
      { name: "Documentation", path: "/about" },
      { name: "Tutorials", path: "/about" },
      { name: "Case Studies", path: "/about" },
      { name: "Free Tools", path: "/skills" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/lalit-patel21",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Lalit-Patel21",
      color: "hover:text-gray-900",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/lalit-patel21",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/_lalit.patel/",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/lalit-patel21",
      color: "hover:text-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-950 text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-950 to-indigo-900 opacity-70"></div>

      <div className="relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand/About */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500 mb-3"
              variants={itemVariants}
            >
              LALIT PATEL
            </motion.h3>
            <motion.p className="text-gray-400 mb-6" variants={itemVariants}>
              A passionate Full Stack Developer dedicated to creating innovative
              digital solutions that make a real impact in the world.
            </motion.p>
            <motion.div className="flex gap-4" variants={itemVariants}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h6
              className="text-lg font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Quick Links
            </motion.h6>
            <ul className="space-y-3 text-sm">
              {footerLinks["Quick Links"].map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h6
              className="text-lg font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Services
            </motion.h6>
            <ul className="space-y-3 text-sm">
              {footerLinks.Services.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h6
              className="text-lg font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Resources
            </motion.h6>
            <ul className="space-y-3 text-sm">
              {footerLinks.Resources.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info (Updated with Active Links) */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xs mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h6
              className="text-lg font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Contact Info
            </motion.h6>
            <ul className="space-y-3 text-sm text-gray-400">
              {/* Email Link */}
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <Mail size={18} className="text-teal-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {contactDetails.email}
                </a>
              </motion.li>

              {/* Phone Link */}
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <Phone size={18} className="text-teal-400 flex-shrink-0" />
                <a
                  // Clean the phone number for the 'tel:' link
                  href={`tel:${contactDetails.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {contactDetails.phone}
                </a>
              </motion.li>

              {/* Location Link */}
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <MapPin size={18} className="text-teal-400 flex-shrink-0" />
                <a
                  // Link to Google Maps search query
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactDetails.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  {contactDetails.address}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        {/* Horizontal Divider */}
        <hr className="mt-12 mb-4 border-t border-gray-700" />
        {/* Bottom Section*/}

        <motion.div
          className="pt-2 flex flex-col items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-center">
            &copy; Copyrights {currentYear} {/* 👇 FIX APPLIED HERE */}
            <a
              href="#" // Use '#' to link to the top of the current page/home section
              className="text-white hover:text-teal-400 font-semibold transition-colors duration-300"
              title="Go to Home"
            >
              Lalit Patel
            </a>
            . All rights reserved.
          </p>
          <div className="flex gap-4 text-center">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
        {/* Back to Top Button */}
        {showScrollBtn && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            onClick={scrollToTop}
            title="Back to Top"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
